import React from "react";
import { useForm, useModal } from "../../utils/hooks";
import { InputData, SelectData } from "../../utils/models/employee.interface";
import "./index.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import {
  customStyles,
  dateFormatted,
  formatDateToString,
  initialState,
  inputFormatted,
  selectFormatted,
} from "./helper";
import { template } from "./template";
import { setEmployee } from "../../features/employee/employee";
import { useAppDispatch } from "../../utils/store";
import "react-modal-typescript-custom/dist/index.css";
import { Modal } from "react-modal-typescript-custom";

const CreateEmployee = () => {
  const dispatch = useAppDispatch();
  const { onChange, values, setValues } = useForm(initialState);
  const { isShowing, toggleShowing } = useModal();

  const createEmployee = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      setEmployee({
        ...values,
        birthDate: formatDateToString(values.birthDate),
        startDate: formatDateToString(values.startDate),
      })
    );
    toggleShowing();

    setValues(initialState);
  };

  const inputText = (
    input: InputData,
    type: "text" | "number" = "text",
    className: string = ""
  ): JSX.Element => (
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
        value={values[input.name] || ""}
      />
    </div>
  );

  const inputDate = (inputData: InputData): JSX.Element => (
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

  return (
    <>
      <div> {template(createEmployee, inputText, inputDate, inputSelect)}</div>
      <Modal isShowing={isShowing} onRequestClose={toggleShowing}>
        <div>Employee Created!</div>
      </Modal>
    </>
  );
};
export default CreateEmployee;
