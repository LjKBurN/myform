import React, { useMemo } from 'react';
import { Control, useWatch, Path } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { parsePath } from './formPath';
import { SchemaProps, ControlFieldProps, FormItemOptions, FormValues } from '../../types';

function SchemaField<TFormValues extends FormValues>(props: { schema: SchemaProps<TFormValues>, control: Control<TFormValues> }) {
  const { schema, control } = props;

  const { name, effect } = schema;

  const { dependencies = [], reactions = {} } = effect || {};

  const pathNames = useMemo(() => {
    return dependencies.map((path) => parsePath(path, name));
  }, [dependencies, name]) as Path<TFormValues>[];

  const deps = useWatch({
    name: pathNames,
    control,
  });

  const latestSchema = useMemo(() => {
    if (!deps) {
      return {
        ...schema,
      };
    }

    const newSchema = typeof reactions === 'function' ? reactions(deps) : reactions;

    return {
      ...schema,
      ...newSchema,
    }
  }, [deps, schema, reactions]);

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