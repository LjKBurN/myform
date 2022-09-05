import React from 'react';
import { Control } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { SchemaProps, ControlFieldProps, FormItemOptions } from '../../types';

function transformSchema(schema: SchemaProps, control: Control) {
  const {
    name,
  } = schema;

  const formItemProps: FormItemOptions = {
    ...schema,
  }

  const fieldProps: ControlFieldProps = {
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