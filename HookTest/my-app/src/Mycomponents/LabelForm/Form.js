import React, { createContext } from 'react';
import FormItem from './FormItem';
import { useForm } from 'react-hook-form';

const FormContext = createContext();

export default class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  renderForm = () => {
    const {
      
    } = this.props;

    return (
      <form />
    )
  };

  render() {
    return (
      <FormContext.Provider>
        {this.renderForm}
      </FormContext.Provider>
    );
  }
}