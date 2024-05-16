import React from "react";

export const OverviewGrid = ({ className = "", items }) => {
    return (
        <section
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ${className}`}
        >
            {items.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-body flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 bg-opacity-20 text-primary-500">
                            <i
                                className={`text-3xl ${
                                    item.icon ?? "bx bx-box"
                                }`}
                            ></i>
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                            <p className="text-sm tracking-wide text-slate-500">
                                {item.title}
                            </p>
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h4>{item.value}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
