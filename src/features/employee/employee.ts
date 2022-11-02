import { Employee } from "../../utils/models/employee.interface";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: Employee[] = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
