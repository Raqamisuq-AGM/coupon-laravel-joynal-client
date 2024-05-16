import React from "react";
import logo from "@/Assets/images/logo-small.svg";
export const Header = () => {
    return (
        <>
            <a href="/">
                <div className="sidebar-header">
                    <div className="sidebar-logo-icon">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-[45px]"
                        />
                    </div>

                    <div className="sidebar-logo-text">
                        <h1 className="flex text-xl">
                            <span className="font-bold text-slate-800 dark:text-slate-200">
                                {" "}
                                Admin{" "}
                            </span>
                            <span className="font-semibold text-primary-500">
                                Toolkit
                            </span>
                        </h1>

                        <p className="whitespace-nowrap text-xs text-slate-400">
                            Simple &amp; Customizable
                        </p>
                    </div>
                </div>
            </a>
        </>
    );
};
