import React, { useMemo } from 'react';
import { transformSchema } from '../schema';
import { UseFieldProps, FormValues } from '../../types/index';

function useField<TFormValues extends FormValues>(props: UseFieldProps<TFormValues>) {
  const { schemas, control } = props;

  const formItems = useMemo(() => {
    const map: Record<keyof TFormValues, JSX.Element>  = {} as Record<keyof TFormValues, JSX.Element>;

    schemas.forEach((schema) => {
      const name = schema.name as keyof TFormValues;

      map[name] = transformSchema<TFormValues>(schema, control);
    });
    return map;
  }, [schemas]);

  return {
    formItems,
  }
}

export {
  useField,
}