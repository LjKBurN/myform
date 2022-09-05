import React, { createContext } from 'react';
import { FormLayoutProps } from '../../types';

const FormLayoutContext = createContext<FormLayoutProps>({});

interface FormLayoutProviderProps extends FormLayoutProps {
  children?: JSX.Element;
}

function FormLayout(props: FormLayoutProviderProps) {
  return (
    <FormLayoutContext.Provider value={props}>
      {props.children}
    </FormLayoutContext.Provider>
  );
}

export {
  FormLayout,
  FormLayoutContext,
}