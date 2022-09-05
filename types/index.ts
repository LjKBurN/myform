import React from 'react';
import { UseFormReturn, Control, RegisterOptions } from 'react-hook-form';

export interface FormLayoutProps {
  direction?: 'row' | 'column';
  labelCol?: string | number;
  wrapperCol?: string | number;
  labelAlign?: 'left' | 'right';
}

export interface SchemaProps extends FormLayoutProps {
  name: string;
  title?: React.ReactNode;
  Component?: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  render?: () => React.ReactElement | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
}

export interface ControlFieldProps {
  control: Control;
  name: string;
  Component?: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  render?: () => React.ReactElement | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
}

export interface MyFormOptions {
  schemas?: SchemaProps[];
  defaultValues?: Record<string, any>;
}

export interface FormArrayOptions {
  formHook: UseFormReturn;
  name: string;
  schemas?: SchemaProps[];
}

export interface FormItemOptions extends FormLayoutProps {
  title?: React.ReactNode;
  children?: JSX.Element;
}