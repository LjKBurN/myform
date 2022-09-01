import React from 'react';
import { Control } from 'react-hook-form'; 
import { ControlField, FormItem } from '../components';
import { SchemaProps, ControlFieldProps } from '../../types';

function transformSchema(schema: SchemaProps, control: Control) {
  const {
    name,
    title,
    Component,
    componentProps,
    children,
    defaultValue,
    labelCol,
    labelAlign,
    wrapperCol,
    direction,
  } = schema;

  const itemProps = {
    title,
    labelCol,
    labelAlign,
    wrapperCol,
    direction,
  };

  const fieldProps: ControlFieldProps = {
    control,
    name,
    Component,
    componentProps,
    children,
    defaultValue,
  };

  return (
    <FormItem {...itemProps}>
      <ControlField {...fieldProps} />
    </FormItem>
  );
}

export {
  transformSchema,
};