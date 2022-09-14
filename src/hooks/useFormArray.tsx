import React, { useMemo } from 'react';
import { useFieldArray, Path, ArrayPath } from 'react-hook-form';
import { transformSchema } from '../schema';
import { FormArrayOptions, FormValues } from '../../types';

type ArrayValueName<T extends FormValues, K extends string> = T[K] extends ReadonlyArray<infer V> ? keyof V : keyof T[K];

function useFormArray<TFormValues extends FormValues, ArrayName extends string>(options: FormArrayOptions<TFormValues>) {
  const {
    name: preName,
    control,
    schemas = [],
  } = options;

  const {
    fields,
    append,
    prepend,
    insert,
    swap,
    move,
    update,
    replace,
    remove,
  } = useFieldArray<TFormValues>({ control, name: preName });

  const formArray = useMemo(() => {
    return fields.map((field, index) => {
      const formItems: Record<ArrayValueName<TFormValues, ArrayName>, JSX.Element>  = {} as Record<ArrayValueName<TFormValues, ArrayName>, JSX.Element>;;

      schemas.forEach((schema) => {
        const schemaName = schema.name as unknown as ArrayValueName<TFormValues, ArrayName>;

        const itemName = `${preName}.${index}.${schema.name}` as Path<TFormValues>;

        formItems[schemaName] = transformSchema(
          {
            ...schema,
            name: itemName,
          },
          control,
        );
      });

      return {
        key: field.id,
        formItems,
      };
    });
  }, [fields, schemas]);

  return {
    formArray,
    append,
    prepend,
    insert,
    swap,
    move,
    update,
    replace,
    remove,
  };
}

export {
  useFormArray,
}