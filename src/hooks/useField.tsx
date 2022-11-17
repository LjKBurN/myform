import React, { useMemo } from 'react';
import { Path } from 'react-hook-form';
import { SchemaField } from '../schema';
import { UseFieldProps, FormValues } from '../../types/index';

function useField<TFormValues extends FormValues>(props: UseFieldProps<TFormValues>) {
  const { schemas = [], control } = props;

  const formItems = useMemo(() => {
    const map: Record<keyof TFormValues, JSX.Element>  = {} as Record<keyof TFormValues, JSX.Element>;

    schemas.forEach((schema) => {
      const mapName = schema.name as keyof TFormValues;
      const name = schema.name as unknown as Path<TFormValues>

      map[mapName] = <SchemaField schema={{ ...schema, name }} control={control} />;
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