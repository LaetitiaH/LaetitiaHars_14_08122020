import React from "react";
import { Updater } from "@tanstack/react-table";
import "./index.scss";

const NbEntriesSizeChoice: React.FC<{
  pageSize: number;
  setPageSize: (updater: Updater<number>) => void;
}> = ({ pageSize, setPageSize }): JSX.Element => (
  <div>
    <label>Show</label>
    <select
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10, 25, 50, 100].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
    <span>entries</span>
  </div>
);

export default NbEntriesSizeChoice;
