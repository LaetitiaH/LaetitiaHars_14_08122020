import React from "react";
import { Table } from "@tanstack/react-table";
import "./index.scss";

const Pagination = <T,>({
  table,
  nbEntries,
}: {
  table: Table<T>;
  nbEntries: number;
}) => {
  const nbRowsDisplayed = table.getRowModel().rows.length;
  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;

  const nbPages = Array.from(
    Array(
      Math.ceil(nbEntries / pageSize) ? Math.ceil(nbEntries / pageSize) : 1
    ).keys()
  );
  const firstDisplayedRowIndex = nbRowsDisplayed ? pageSize * pageIndex + 1 : 0;
  const lastDisplayedRowIndex = pageSize * pageIndex + nbRowsDisplayed;

  return (
    <div className="pagination-container">
      <div className="nbr-entries-container">
        <span>Showing</span>
        <span>{firstDisplayedRowIndex}</span>
        <span>to</span>
        <span>{lastDisplayedRowIndex}</span>
        <span>of</span>
        <span>{nbEntries}</span>
        <span>entries</span>
      </div>
      <div className="pagination-content">
        <button
          type="button"
          className="navigation-button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        {nbPages.map((index) => (
          <button
            key={index}
            className="page-button"
            type="button"
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </button>
        ))}

        <button
          type="button"
          className="navigation-button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
