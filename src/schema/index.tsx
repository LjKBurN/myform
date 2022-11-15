import React, { useState, useEffect, useMemo } from 'react';
import { Control, useWatch, Path } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { parsePath } from './formPath';
import { SchemaProps, ControlFieldProps, FormItemOptions, FormValues } from '../../types';

function SchemaField<TFormValues extends FormValues>(props: { schema: SchemaProps<TFormValues>, control: Control<TFormValues> }) {
  const { schema, control } = props;

  const { name, effect } = schema;
  
  const [latestSchema, setLatestShcema] = useState(schema);

  const { dependencies = [], reactions = {} } = effect || {};

  const pathNames = useMemo(() => {
    return dependencies.map((path) => parsePath(path, name));
  }, [dependencies, name]) as Path<TFormValues>[];

  const deps = useWatch({
    name: pathNames,
    control,
  });

  useEffect(() => {
    if (!deps.length) return;
    console.log(pathNames, deps, schema, reactions);

    if (typeof reactions === 'function') {
      Promise.resolve(reactions(deps)).then((s) => setLatestShcema({ ...schema, ...s }));
    } else if (typeof reactions === 'object') {
      setLatestShcema({ ...schema, ...reactions })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps, schema]);

  const formItemProps: FormItemOptions = {
    ...latestSchema,
  }

  const fieldProps: ControlFieldProps<TFormValues> = {
    control,
    ...latestSchema,
  };

  return (
    <FormItem {...formItemProps}>
      <ControlField {...fieldProps} />
    </FormItem>
  );
}

export {
  SchemaField,
};