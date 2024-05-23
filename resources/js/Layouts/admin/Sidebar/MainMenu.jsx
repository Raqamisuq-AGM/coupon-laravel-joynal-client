import React from "react";
import { Link } from "@inertiajs/react";
import { SubMenu } from "./SubMenu";
import { Icon } from "@iconify/react";
export const MainMenu = ({ item }) => {
    
    return (
        <>
            {item.child ? (
                <SubMenu item={item} />
            ) : (
                <li>
                    <Link
                        href={item.url}
                        className={`sidebar-menu ${
                            window.location.href.startsWith(item.url)
                                ? "active"
                                : ""
                        }`}
                    >
                        <span className="sidebar-menu-icon">
                            <Icon icon={item.icon ?? "mdi-light:home"} />
                        </span>
                        <span className="sidebar-menu-text">{item.title}</span>
                    </Link>
                </li>
            )}
        </>
    );
};
