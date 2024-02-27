import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TSubmitProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TSubmitProps) => {
  const FormConfig: TFormConfig = {};

  if (resolver) {
    FormConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    FormConfig["defaultValues"] = defaultValues;
  }

  const method = useForm(FormConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    method.reset();
  };

  return (
    <FormProvider {...method}>
      <Form layout="vertical" onFinish={method.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PhForm;
