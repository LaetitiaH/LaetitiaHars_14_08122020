import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const HeaderTable: React.FC<{
  headerGroups: { id: React.Key | null | undefined; headers: any[] }[];
}> = ({ headerGroups }): JSX.Element => (
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th key={header.id}>
            {header.isPlaceholder ? null : (
              <button
                type="button"
                {...{
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: (
                    <FontAwesomeIcon
                      icon={faSortUp}
                      size="sm"
                      color="#5A6E11"
                    />
                  ),
                  desc: (
                    <FontAwesomeIcon
                      icon={faSortDown}
                      size="sm"
                      color="#5A6E11"
                    />
                  ),
                }[header.column.getIsSorted() as string] ?? (
                  <FontAwesomeIcon icon={faSort} size="sm" color="#5A6E11" />
                )}
              </button>
            )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
);

export default HeaderTable;
