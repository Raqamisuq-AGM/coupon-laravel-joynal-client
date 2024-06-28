import React from "react";
import logo from "@/images/frontend/logo.png";
export const Header = () => {
    return (
        <>
            <a href="/">
                <div className="sidebar-header flex items-center justify-center">
                    <div className="sidebar-logo-icon ">
                        <img src={logo} alt="logo" className="h-[45px]" />
                    </div>
                </div>
            </a>
        </>
    );
};
