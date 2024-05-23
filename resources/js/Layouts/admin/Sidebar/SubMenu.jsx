import React from "react";
import { Link } from "@inertiajs/react";
import { FiChevronRight } from "react-icons/fi";
import { Icon } from "@iconify/react";
export const SubMenu = ({ item }) => {
    const isChildActive = () => {
        if (item.child) {
            return item.child.some((menu) => {
                return window.location.href == menu.url;
            });
        }
        return false;
    };
    return (
        <>
            <li>
                <a
                    href="#"
                    className={`sidebar-menu ${
                        isChildActive() ? "active" : ""
                    }`}
                >
                    <span className="sidebar-menu-icon">
                        <Icon icon={item.icon ?? "mdi-light:home"} />
                    </span>
                    <span className="sidebar-menu-text">{item.title}</span>
                    <span className="sidebar-menu-arrow">
                        <FiChevronRight />
                    </span>
                </a>
                <ul className="sidebar-submenu">
                    {item.child.map((menu, index) => (
                        <li key={index}>
                            <Link
                                href={menu.url}
                                className={`sidebar-submenu-item ${
                                    window.location.href == menu.url
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </>
    );
};
