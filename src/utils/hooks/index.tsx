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
  setValues: any;
} => {
  const [values, setValues] = useState(initialState);
  const onChange = (data: InputValue) =>
    setValues({ ...values, [data.name]: data.value });

  return {
    onChange,
    values,
    setValues,
  };
};

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowing = () => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggleShowing,
  };
};
