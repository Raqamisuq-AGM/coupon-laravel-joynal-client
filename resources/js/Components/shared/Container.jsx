import React from "react";

export const Container = ({ className = "", children }) => {
    return (
        <main className={`container flex-grow p-4 sm:p-6 ${className}`}>
            {children}
        </main>
    );
};
