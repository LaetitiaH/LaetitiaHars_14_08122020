import React, { ChangeEvent } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import "./index.scss";
import NbEntriesSizeChoice from "./NbEntriesSizeChoice";
import SearchTable from "./SearchTable";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import Pagination from "./Pagination";

const Table = <T,>({
  defaultData,
  columns,
}: {
  defaultData: T[];
  columns: ColumnDef<T, any>[];
}) => {
  const [data] = React.useState(() => [...defaultData]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    globalFilterFn: "includesString",
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
  });

  const globalFilterHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setGlobalFilter(event.target.value);
  };

  return (
    <div className="table-container">
      <div className="actions-table">
        <NbEntriesSizeChoice
          pageSize={table.getState().pagination.pageSize}
          setPageSize={table.setPageSize}
        ></NbEntriesSizeChoice>

        <SearchTable
          globalFilter={globalFilter}
          globalFilterHandler={globalFilterHandler}
        />
      </div>

      <table>
        <HeaderTable headerGroups={table.getHeaderGroups()} />
        <BodyTable
          nbColumns={columns.length}
          nbRows={defaultData.length}
          hasSearchTerm={!!globalFilter}
          rows={table.getRowModel().rows}
        />
      </table>
      <Pagination table={table} nbEntries={defaultData.length} />
    </div>
  );
};

export default Table;
