import React from "react";
import { Employee } from "../../utils/models/employee.interface";
import { useAppSelector } from "../../utils/store";
import { selectEmployees } from "../../utils/selectors";
import { ColumnDef, createColumnHelper, Row } from "@tanstack/react-table";
import Table from "../../components/Table";
import dayjs from "dayjs";

const dateSort = (
  rowA: Row<Employee>,
  rowB: Row<Employee>,
  columnId: string
): number => {
  const valueA = dayjs(rowA.getValue(columnId), "MM/DD/YYYY");
  const valueB = dayjs(rowB.getValue(columnId), "MM/DD/YYYY");

  return valueA < valueB ? 1 : -1;
};

const EmployeeList = () => {
  const defaultData: Employee[] = useAppSelector(selectEmployees);
  const columnHelper = createColumnHelper<Employee>();

  const columns: ColumnDef<Employee, any>[] = [
    columnHelper.accessor("firstName", {
      header: () => "First Name",
    }),
    columnHelper.accessor("lastName", {
      header: () => "Last Name",
    }),
    columnHelper.accessor("startDate", {
      header: () => "Start Date",
      sortingFn: (rowA, rowB, columnId) => dateSort(rowA, rowB, columnId),
    }),
    columnHelper.accessor("department", {
      header: () => "Department",
    }),
    columnHelper.accessor("birthDate", {
      header: () => "Date of Birth",
      sortingFn: (rowA, rowB, columnId) => dateSort(rowA, rowB, columnId),
    }),
    columnHelper.accessor("street", {
      header: () => "Street",
    }),
    columnHelper.accessor("city", {
      header: () => "City",
    }),
    columnHelper.accessor("state", {
      header: () => "State",
    }),
    columnHelper.accessor("zipCode", {
      header: () => "Zip Code",
    }),
  ];

  return <Table<Employee> defaultData={defaultData} columns={columns} />;
};

export default EmployeeList;
