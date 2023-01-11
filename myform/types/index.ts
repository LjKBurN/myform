import React from 'react';
import { Control, RegisterOptions } from 'react-hook-form';

interface FormLayoutProps {
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
  children?: () => React.ReactElement | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
}

export interface ControlFieldProps {
  control: Control;
  name: string;
  Component?: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  children?: () => React.ReactElement | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
}

export interface MyFormOptions extends FormLayoutProps {
  schemas?: SchemaProps[];
  defaultValue?: Record<string, any>;
}

export interface FormArrayOptions extends FormLayoutProps {
  control: Control;
  name: string;
  schemas?: SchemaProps[];
}

export interface FormItemOptions extends FormLayoutProps {
  title?: React.ReactNode;
  children?: JSX.Element;
}