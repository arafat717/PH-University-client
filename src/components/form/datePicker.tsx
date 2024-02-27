import { DatePicker, Form } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TPhDatePickerProps = {
  label: string;
  name: string;
};

const PhDatePicker = ({ label, name }: TPhDatePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <DatePicker
            {...field}
            size="large"
            style={{ width: "100%" }}
          ></DatePicker>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default PhDatePicker;
