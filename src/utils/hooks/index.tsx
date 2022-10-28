import { useState } from "react";

export interface InputValue {
  name: string;
  value: string | Date | null | number;
}

export const useForm = (
  initialState: any
): {
  onChange: (data: InputValue) => void;
  values: any;
} => {
  const [values, setValues] = useState(initialState);
  const onChange = (data: InputValue) =>
    setValues({ ...values, [data.name]: data.value });

  return {
    onChange,
    values,
  };
};
