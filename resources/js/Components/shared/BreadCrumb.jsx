import { Link } from "@inertiajs/react";
import React from "react";

export const BreadCrumb = ({ segments }) => {
    return (
        <ol className="breadcrumb">
            {segments.length
                ? segments.map((item, index) => (
                      <li key={index} className="breadcrumb-item">
                          <Link href="#">{item}</Link>
                      </li>
                  ))
                : ""}
        </ol>
    );
};
