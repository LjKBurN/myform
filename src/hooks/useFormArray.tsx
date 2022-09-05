import React, { useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';
import { transformSchema } from '../schema';
import { FormArrayOptions } from '../../types';

function useFormArray(options: FormArrayOptions) {
  const {
    name: preName,
    formHook,
    schemas = [],
  } = options;

  const { control } = formHook;

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
  } = useFieldArray({ control, name: preName });

  const formArray = useMemo(() => {
    return fields.map((field, index) => {
      const formItems = {};

      schemas.forEach((schema) => {
        const {
          name: schemaName,
        } = schema;

        formItems[schemaName] = transformSchema(
          {
            ...schema,
            name: `${preName}.${index}.${schemaName}`,
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