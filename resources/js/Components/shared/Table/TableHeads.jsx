import trans from "@/Composables/transComposable";
import React from "react";

const TableHeads = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th
                        key={index}
                        className={
                            (index == columns.length - 1 ? "!text-right " : "") +
                            column.thClass
                        }
                    >
                        {trans(column.header)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeads;
