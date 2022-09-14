import React from 'react';
import { Control } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { SchemaProps, ControlFieldProps, FormItemOptions, FormValues } from '../../types';

function transformSchema<TFormValues extends FormValues>(schema: SchemaProps<TFormValues>, control: Control<TFormValues>) {
  const {
    name,
  } = schema;

  const formItemProps: FormItemOptions = {
    ...schema,
  }

  const fieldProps: ControlFieldProps<TFormValues> = {
    control,
    ...schema,
  };

  return (
    <FormItem {...formItemProps}>
      <ControlField {...fieldProps} />
    </FormItem>
  );
}

export {
  transformSchema,
};