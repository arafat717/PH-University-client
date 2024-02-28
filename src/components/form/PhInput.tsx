import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  label?: string;
  name: string;
  disabled?: boolean;
};

const PhInput = ({ type, label, name, disabled }: TInputProps) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Controller
          name={name}
          render={({ field }) => (
            <Form.Item label={label}>
              <Input {...field} type={type} id={name} disabled={disabled} />
            </Form.Item>
          )}
        ></Controller>
      </div>
    </>
  );
};

export default PhInput;
