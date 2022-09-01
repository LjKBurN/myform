import React, { useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';
import { transformSchema } from '../schema';
import { FormArrayOptions } from '../../types';

function useFormArray(options: FormArrayOptions) {
  const {
    name: preName,
    control,
    schemas = [],
    direction: allDirection,
    labelCol: allLabelCol,
    wrapperCol: allWrapperCol,
    labelAlign: allLabelAlign,
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
  } = useFieldArray({ control, name: preName });

  const formArray = useMemo(() => {
    return fields.map((field, index) => {
      const formItems = {};

      schemas.forEach((schema) => {
        const {
          name: schemaName,
          direction,
          labelCol,
          wrapperCol,
          labelAlign,
        } = schema;
        formItems[schemaName] = transformSchema(
          {
            ...schema,
            name: `${preName}.${index}.${schemaName}`,
            direction: direction === undefined ? allDirection : direction,
            labelCol: labelCol === undefined ? allLabelCol : labelCol,
            wrapperCol: wrapperCol === undefined ? allWrapperCol : wrapperCol,
            labelAlign: labelAlign === undefined ? allLabelAlign : labelAlign,
          },
          control
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