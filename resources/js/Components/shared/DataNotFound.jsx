import React from "react";
import notFoundImage from "@/Assets/images/404.jpg";
import { trans } from "@/TranslationsContext";
export const DataNotFound = ({ isForTable = false, colSpan = 10 }) => {
    return isForTable ? (
        <tbody>
            <tr>
                <td colSpan={colSpan}>
                    <div className="mb-8 mt-5 flex flex-col items-center justify-center">
                        <img src={notFoundImage} className="my-3 h-16" alt="" />
                        <p className="text-gray-500">
                            {trans("No data found")}
                        </p>
                    </div>
                </td>
            </tr>
        </tbody>
    ) : (
        <div className="mb-8 mt-5 flex flex-col items-center justify-center">
            <img src={notFoundImage} className="my-3 h-16" alt="" />
            <p className="text-gray-500">{trans("No data found")}</p>
        </div>
    );
};
