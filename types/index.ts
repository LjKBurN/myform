import React from 'react';
import { Control, RegisterOptions, DefaultValues, Path, ArrayPath } from 'react-hook-form';

export declare type FormValues = Record<string, any>;

export interface FormLayoutProps {
  direction?: 'row' | 'column';
  labelCol?: string | number;
  wrapperCol?: string | number;
  labelAlign?: 'left' | 'right';
  display?: boolean;
}

type dependency = string | any;

interface ReactiveSchemaProps extends FormLayoutProps {
  title?: React.ReactNode;
  Component?: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  render?: (() => React.ReactElement) | JSX.Element | null | undefined;
  rules?: RegisterOptions;
  effect?: EffectProps;
}

interface EffectProps {
  dependencies: dependency[],
  reactions: ReactiveSchemaProps | ((deps: any[]) => ReactiveSchemaProps);
}

export interface SchemaProps<TFormValues extends FormValues> extends FormLayoutProps{
  name: Path<TFormValues>;
  title?: React.ReactNode;
  Component: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  render?: (() => React.ReactElement) | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
  effect?: EffectProps;
}

export interface ControlFieldProps<TFormValues extends FormValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  Component: React.ForwardRefExoticComponent<any>;
  componentProps?: Record<string, any>;
  render?: (() => React.ReactElement) | JSX.Element | null | undefined;
  defaultValue?: any;
  rules?: RegisterOptions;
}

export interface UseMyFormProps<TFormValues extends FormValues> {
  defaultValues?: DefaultValues<TFormValues>;
}

export interface UseFieldProps<TFormValues extends FormValues> {
  schemas?: SchemaProps<TFormValues>[];
  control: Control<TFormValues>;
}

export interface UseFieldArrayProps<TFormValues extends FormValues> {
  control: Control<TFormValues>;
  name: ArrayPath<TFormValues>;
  schemas?: SchemaProps<TFormValues>[];
}

export interface FormItemOptions extends FormLayoutProps {
  title?: React.ReactNode;
  children?: JSX.Element;
}