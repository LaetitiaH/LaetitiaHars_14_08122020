import React from "react";
import { flexRender, Row } from "@tanstack/react-table";
import "./index.scss";

const BodyTable = <T,>({
  rows,
  nbRows,
  hasSearchTerm,
  nbColumns,
}: {
  rows: Row<T>[];
  nbRows: number;
  hasSearchTerm: boolean;
  nbColumns: number;
}) => (
  <tbody>
    {rows.map(
      (row: {
        id: React.Key | null | undefined;
        getVisibleCells: () => any[];
      }) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              {...{
                className: cell.column.getIsSorted()
                  ? "show-column-sorted"
                  : "",
              }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      )
    )}

    {!nbRows && (
      <tr className="no-result">
        <td colSpan={nbColumns}>No data available in table</td>
      </tr>
    )}

    {hasSearchTerm && !rows.length && (
      <tr className="no-result">
        <td colSpan={nbColumns}>No matching records found</td>
      </tr>
    )}
  </tbody>
);

export default BodyTable;
