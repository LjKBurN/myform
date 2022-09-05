import React from 'react';
import styled from 'styled-components';
import { useController } from 'react-hook-form';
import { ControlFieldProps } from '../../types';

const ErrorContent = styled('div')`
  text-align: left;
  color: #ff4d4f;
`;

function ControlField (props: ControlFieldProps) {
  const {
    control,
    name,
    Component,
    componentProps,
    render,
    rules,
  } = props;

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <Component
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref} 
        {...componentProps}
      >
        {
          typeof render === 'function' ? render() : render
        }
      </Component>
      {
        error && <ErrorContent>{error.message}</ErrorContent>
      }
    </div>
  );
}

export {
  ControlField
};