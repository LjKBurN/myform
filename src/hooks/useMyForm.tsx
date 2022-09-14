import React, { useMemo } from 'react';
import { useForm, Path } from 'react-hook-form';
import { transformSchema } from '../schema';
import { MyFormOptions, FormValues } from '../../types/index';

function useMyForm<TFormValues extends FormValues>(options: MyFormOptions<TFormValues>) {
  const {
    schemas,
    defaultValues,
  } = options;

  const formHook = useForm<TFormValues>({ defaultValues });

  const { control } = formHook;

  const formItems = useMemo(() => {
    const map: Record<keyof TFormValues, JSX.Element>  = {} as Record<keyof TFormValues, JSX.Element>;

    schemas.forEach((schema) => {
      const name = schema.name as keyof TFormValues;

      map[name] = transformSchema<TFormValues>(schema, control);
    });
    return map;
  }, [schemas]);

  return {
    ...formHook,
    formItems,
  };
}

export {
  useMyForm,
}