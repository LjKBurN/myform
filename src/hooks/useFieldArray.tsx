import React, { useMemo } from 'react';
import { useFieldArray as useRHFArray, Path } from 'react-hook-form';
import { SchemaField } from '../schema';
import { UseFieldArrayProps, FormValues } from '../../types';

type ArrayValueName<T extends FormValues, K extends string> = T[K] extends ReadonlyArray<infer V> ? keyof V : keyof T[K];

function useFieldArray<TFormValues extends FormValues>(props: UseFieldArrayProps<TFormValues>) {
  const {
    name: preName,
    control,
    schemas = [],
  } = props;

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
  } = useRHFArray<TFormValues>({ control, name: preName });

  type ArrayName =  UseFieldArrayProps<TFormValues>['name'];
  type FormItems = Record<ArrayValueName<TFormValues, ArrayName>, JSX.Element>;

  const formArray = useMemo(() => {
    return fields.map((field, index) => {

      const formItems: FormItems = {} as FormItems;

      schemas.forEach((schema) => {
        const schemaName = schema.name as unknown as ArrayValueName<TFormValues, ArrayName>;

        const itemName = `${preName}.${index}.${schema.name}` as Path<TFormValues>;

        formItems[schemaName] = <SchemaField schema={{...schema, name: itemName}} control={control} />;
      });

      return {
        key: field.id,
        formItems,
      };
    });
  }, [fields, schemas, control, preName]);

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
  useFieldArray,
}