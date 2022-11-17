import React, { useState, useEffect, useMemo } from 'react';
import { Control, useWatch, Path } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { parsePath } from './formPath';
import { InnerSchemaProps, ControlFieldProps, FormItemOptions, FormValues } from '../../types';

function SchemaField<TFormValues extends FormValues>(props: { schema: InnerSchemaProps<TFormValues>, control: Control<TFormValues> }) {
  const { schema, control } = props;

  const { name, effect } = schema;
  
  const [depSchema, setDepSchema] = useState({});

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

    if (typeof reactions === 'function') {
      Promise.resolve(reactions(deps)).then((s) => setDepSchema(s));
    } else if (typeof reactions === 'object') {
      setDepSchema(reactions)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  const latestSchema = useMemo(() => {
    return { ...schema, ...depSchema }
  }, [schema, depSchema]);

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