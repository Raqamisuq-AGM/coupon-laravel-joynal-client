import React, { memo } from "react";
import TableHeads from "./TableHeads";
import TableBody from "./TableBody";
import { Pagination } from "../Pagination";
import { DataNotFound } from "../DataNotFound";

const Table = ({ columns, tableData, containerClass, tableClass }) => {
    console.log(tableData);
    return (
        <React.Fragment>
            <TableContainer
                containerClass={containerClass}
                tableClass={tableClass}
            >
                <TableHeads columns={columns} />
                {tableData?.data?.length ? (
                    <TableBody data={tableData?.data} columns={columns} />
                ) : (
                    <DataNotFound isForTable={true} colSpan={columns.length} />
                )}
            </TableContainer>

            {/* pagination here */}
            <Pagination links={tableData?.links} />
        </React.Fragment>
    );
};

export default memo(Table);

const TableContainer = ({ children, containerClass = "", tableClass = "" }) => {
    return (
        <div
            className={`table-responsive whitespace-nowrap rounded-primary ${containerClass}`}
        >
            <table className={`table ${tableClass}`}>{children}</table>
        </div>
    );
};
