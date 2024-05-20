import React from "react";

export const Container = ({ className = "", children }) => {
    return (
        <main className={`container flex flex-col gap-4 flex-grow p-4  sm:p-6 ${className}`}>
            {children}
        </main>
    );
};
