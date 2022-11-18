import React from 'react';
import {
  Control,
  RegisterOptions,
  DefaultValues,
  Path,
  ArrayPath,
} from 'react-hook-form';
import { MyPath } from './path';

export declare type FormValues = Record<string, any>;

export interface FormLayoutProps {
  direction?: 'row' | 'column';
  labelCol?: string | number;
  wrapperCol?: string | number;
  labelAlign?: 'left' | 'right';
  display?: 'visible' | 'none' | 'hidden';
}

type dependency = string | any;

type Render = (() => React.ReactElement) | (() => React.ReactElement[]) | JSX.Element | JSX.Element[] | null | undefined

export interface ReactiveSchemaProps extends FormLayoutProps {
  title?: React.ReactNode;
  Component?: React.FC<any>;
  componentProps?: Record<string, any>;
  render?: Render;
  rules?: RegisterOptions;
}

interface EffectProps {
  dependencies: dependency[];
  reactions: ReactiveSchemaProps | ((deps: any[]) => ReactiveSchemaProps) | ((deps: any[]) => Promise<ReactiveSchemaProps>);
}

export interface SchemaProps<TFormValues extends FormValues, A extends (ArrayPath<TFormValues> | undefined) = undefined> extends FormLayoutProps{
  name: A extends ArrayPath<TFormValues>  ? MyPath<TFormValues[A]> : MyPath<TFormValues>;
  title?: React.ReactNode;
  Component?: React.FC<any>;
  componentProps?: Record<string, any>;
  render?: Render;
  defaultValue?: any;
  rules?: RegisterOptions;
  effect?: EffectProps;
}

export interface InnerSchemaProps<TFormValues extends FormValues> extends FormLayoutProps{
  name: Path<TFormValues>;
  title?: React.ReactNode;
  Component?: React.FC<any>;
  componentProps?: Record<string, any>;
  render?: Render;
  defaultValue?: any;
  rules?: RegisterOptions;
  effect?: EffectProps;
}

export interface ControlFieldProps<TFormValues extends FormValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  Component?: React.FC<any>;
  componentProps?: Record<string, any>;
  render?: Render;
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

export interface UseFieldArrayProps<TFormValues extends FormValues, A extends ArrayPath<TFormValues>> {
  control: Control<TFormValues>;
  name: A;
  schemas?: SchemaProps<TFormValues, A>[];
}

export interface FormItemOptions extends FormLayoutProps {
  title?: React.ReactNode;
  children?: JSX.Element;
}