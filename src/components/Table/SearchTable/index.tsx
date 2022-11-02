import React, { ChangeEvent } from "react";
import "./index.scss";

const SearchTable: React.FC<{
  globalFilter: string;
  globalFilterHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ globalFilter, globalFilterHandler }) => (
  <div className="search-container">
    <label htmlFor="search" className="create-employee-label">
      Search:{" "}
    </label>
    <input
      id="search"
      name="search"
      type="text"
      value={globalFilter ?? ""}
      onChange={globalFilterHandler}
    />
  </div>
);

export default SearchTable;
