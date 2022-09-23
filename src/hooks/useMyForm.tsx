import { useForm } from 'react-hook-form';
import { UseMyFormProps, FormValues } from '../../types/index';

function useMyForm<TFormValues extends FormValues>(props?: UseMyFormProps<TFormValues>) {
  const {
    defaultValues,
  } = props || {};

  const formHook = useForm<TFormValues>({ defaultValues });

  return {
    ...formHook,
  };
}

export {
  useMyForm,
}