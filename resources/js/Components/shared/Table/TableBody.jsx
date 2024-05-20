import React from "react";

const TableBody = ({ data, columns }) => {
    const placeCellData = (row, column) => {
        let value = row[column.accessor];
        if (column.accessor && column.accessor.includes(".")) {
            try {
                value = eval("row." + column.accessor);
            } catch (error) {
                console.error(error);
            }
        }

        if (column.call && typeof column.call == "function") {
            return (
                <>
                    {column.call({
                        original: row,
                        value,
                    })}
                </>
            );
        }
        return value;
    };

    return (
        <tbody>
            {data?.map((item) => (
                <tr key={item.id}>
                    {columns.map((column, index) => (
                        <td
                            key={index}
                            className={
                                (index == columns.length - 1
                                    ? "flex justify-end "
                                    : "") + column?.tdClass || ''
                            }
                        >
                            {placeCellData(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
