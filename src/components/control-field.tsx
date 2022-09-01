import React from 'react';
import { useController } from 'react-hook-form';
import { ControlFieldProps } from '../../types';

function ControlField (props: ControlFieldProps) {
  const {
    control,
    name,
    Component,
    componentProps,
    children,
    rules,
  } = props;

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <Component
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      ref={ref} 
      {...componentProps}
    >
      {
        typeof children === 'function' ? children() : children
      }
    </Component>
  );
}

export {
  ControlField
};