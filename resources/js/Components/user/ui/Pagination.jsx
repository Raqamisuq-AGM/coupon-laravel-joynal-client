import { Link } from "@inertiajs/react";
import React from "react";

export const Pagination = ({ links }) => {
    return (
        links.length > 3 && (
            <div>
                <div className="paginate-container mt-3">
                    {links.map((link) => (
                        <React.Fragment>
                            {!link.url ? (
                                <div className="paginate-link paginate-link-null border border-gray-200 dark:border-gray-600">
                                    {link.label}
                                </div>
                            ) : (
                                <Link
                                    preserve-state="preserveState"
                                    className={`paginate-link paginate-link-active border border-gray-300 dark:border-gray-700 ${
                                        link.active
                                            ? "paginate-link-active-bg"
                                            : ""
                                    }`}
                                    href={link.url}
                                >
                                    <span>{link.label}</span>
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    );
};
