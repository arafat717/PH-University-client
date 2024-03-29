import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const PhSelect = ({ label, name, options, disabled, mode }: TPhSelectProps) => {
  //   const handleChange = (value: string) => {
  //     console.log(`selected ${value}`);
  //   };

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            disabled={disabled}
            options={options}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhSelect;
