import { departments, states } from "../../utils/datas/datas";
import React from "react";
import { InputData, SelectData } from "../../utils/models/employee.interface";

export const template = (
  createEmployee: (event: React.FormEvent<HTMLFormElement>) => void,
  inputText: (
    input: InputData,
    type?: "text" | "number",
    className?: string
  ) => JSX.Element,
  inputDate: (inputData: InputData) => JSX.Element,
  inputSelect: (inputData: InputData, options: SelectData[]) => JSX.Element
) => (
  <div>
    <div className="create-employee-container">
      <h2 className="title">Create Employee</h2>
      <form onSubmit={createEmployee} id="create-employee">
        <div>
          {inputText(
            { label: "First Name", name: "firstName" },
            "text",
            "create-employee-input"
          )}
          {inputText(
            { label: "Last Name", name: "lastName" },
            "text",
            "create-employee-input"
          )}

          {inputDate({ label: "Date of Birth", name: "birthDate" })}
          {inputDate({ label: "Start Date", name: "startDate" })}
        </div>
        <div className="employee-container">
          <fieldset className="address">
            <legend>Address</legend>
            {inputText({ label: "Street", name: "street" })}
            {inputText({ label: "City", name: "city" })}
            {inputSelect({ label: "State", name: "state" }, states)}
            {inputText({ label: "Zip Code", name: "zipCode" }, "number")}
          </fieldset>
        </div>
        <div className="employee-container department">
          {inputSelect(
            { label: "Department", name: "department" },
            departments
          )}
        </div>

        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
);
