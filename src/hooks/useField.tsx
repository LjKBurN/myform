import React, { useMemo } from 'react';
import { SchemaField } from '../schema';
import { UseFieldProps, FormValues } from '../../types/index';

function useField<TFormValues extends FormValues>(props: UseFieldProps<TFormValues>) {
  const { schemas = [], control } = props;

  const formItems = useMemo(() => {
    const map: Record<keyof TFormValues, JSX.Element>  = {} as Record<keyof TFormValues, JSX.Element>;

    schemas.forEach((schema) => {
      const name = schema.name as keyof TFormValues;

      map[name] = <SchemaField schema={schema} control={control} />;
    });
    return map;
  }, [schemas, control]);

  return {
    formItems,
  }
}

export {
  useField,
}