import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TSubmitProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({ onSubmit, children, defaultValues }: TSubmitProps) => {
  const FormConfig: TFormConfig = {};

  if (defaultValues) {
    FormConfig["defaultValues"] = defaultValues;
  }

  const method = useForm(FormConfig);

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>;
    </FormProvider>
  );
};

export default PhForm;
