import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  label?: string;
  name: string;
};

const PhInput = ({ type, label, name }: TInputProps) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {label ? label : null}
        <Controller
          name={name}
          render={({ field }) => <Input {...field} type={type} id={name} />}
        ></Controller>
      </div>
    </>
  );
};

export default PhInput;
