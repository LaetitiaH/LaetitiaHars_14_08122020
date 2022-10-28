import React from "react";
import { useForm } from "../../utils/hooks";
import { InputData, SelectData } from "../../utils/models/employee.interface";
import "./index.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import {
  customStyles,
  dateFormatted,
  initialState,
  inputFormatted,
  selectFormatted,
} from "./helper";
import { template } from "./template";

const CreateEmployee = () => {
  const { onChange, values } = useForm(initialState);

  const createEmployee = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const inputText = (
    input: InputData,
    type: "text" | "number" = "text",
    className: string = ""
  ) => (
    <div className="employee-container">
      <label htmlFor={input.name} className="create-employee-label">
        {input.label}
      </label>
      <input
        required
        className={className}
        name={input.name}
        id={input.name}
        type={type}
        onChange={(event) => onChange(inputFormatted(event))}
        value={values[input.name]}
      />
    </div>
  );

  const inputDate = (inputData: InputData) => (
    <div className="employee-container">
      <label htmlFor={inputData.name} className="create-employee-label">
        {inputData.label}
      </label>
      <DatePicker
        required
        selected={values[inputData.name]}
        name={inputData.name}
        id={inputData.name}
        onChange={(date) => onChange(dateFormatted(date, inputData.name))}
      />
    </div>
  );

  const inputSelect = (
    inputData: InputData,
    options: SelectData[]
  ): JSX.Element => (
    <div className="employee-container">
      <label htmlFor={inputData.name}>{inputData.label}</label>
      <Select
        value={
          options.find((option) => option.value === values[inputData.name]) ||
          options[0]
        }
        onChange={(event) => onChange(selectFormatted(event, inputData.name))}
        options={options}
        styles={customStyles}
        inputId={inputData.name}
      />
    </div>
  );

  return template(createEmployee, inputText, inputDate, inputSelect);
};
export default CreateEmployee;
