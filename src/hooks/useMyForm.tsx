import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { transformSchema } from '../schema';
import { MyFormOptions } from '../../types/index';

function useMyForm(options: MyFormOptions) {
  const form = useForm();

  const { control } = form;

  const formItems = useMemo(() => {
    const map = {};
    const {
      schemas,
      direction: allDirection,
      labelCol: allLabelCol,
      wrapperCol: allWrapperCol,
      labelAlign: allLabelAlign,
    } = options;

    schemas.forEach((schema) => {
      const {
        name,
        direction,
        labelCol,
        wrapperCol,
        labelAlign,
      } = schema;

      map[name] = transformSchema(
        {
          ...schema,
          direction: direction === undefined ? allDirection : direction,
          labelCol: labelCol === undefined ? allLabelCol : labelCol,
          wrapperCol: wrapperCol === undefined ? allWrapperCol : wrapperCol,
          labelAlign: labelAlign === undefined ? allLabelAlign : labelAlign,
        },
        control,
      );
    });

    return map;
  }, [options]);

  return {
    // hook-form
    ...form,
    formItems,
  };
}

export {
  useMyForm,
}