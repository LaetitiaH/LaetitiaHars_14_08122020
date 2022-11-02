import { Employee, SelectData } from "../../utils/models/employee.interface";
import React from "react";
import { SingleValue, StylesConfig } from "react-select";
import { InputValue } from "../../utils/hooks";
import dayjs from "dayjs";

export const initialState: Employee = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  street: "",
  city: "",
  zipCode: null,
  state: "AL",
  department: "sales",
};

export const customStyles: StylesConfig<SelectData, false> = {
  control: (base) => ({
    ...base,
    background: "#f6f6f6",
  }),
};

export const inputFormatted = (
  event: React.ChangeEvent<HTMLInputElement>
): InputValue => ({
  name: event.target.name.toString(),
  value: event.target.value.toString(),
});

export const dateFormatted = (
  date: Date | null,
  inputDateName: string
): InputValue => ({
  name: inputDateName,
  value: date,
});

export const selectFormatted = (
  selectData: SingleValue<SelectData>,
  inputSelectName: string
): InputValue => ({
  name: inputSelectName || "",
  value: selectData?.value || "",
});

export const formatDateToString = (value: Date): string =>
  value ? dayjs(value).format("MM/DD/YYYY") : "";
