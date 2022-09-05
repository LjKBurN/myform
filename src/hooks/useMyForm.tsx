import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { transformSchema } from '../schema';
import { MyFormOptions } from '../../types/index';

function useMyForm(options: MyFormOptions) {
  const {
    schemas,
    defaultValues,
  } = options;

  const formHook = useForm({ defaultValues });

  const { control } = formHook;

  const formItems = useMemo(() => {
    const map = {};

    schemas.forEach((schema) => {
      const {
        name,
      } = schema;
      map[name] = transformSchema(schema, control);
    });
    return map;
  }, [schemas]);

  return {
    formHook,
    formItems,
  };
}

export {
  useMyForm,
}