import React from "react";
import avatar from "@/Assets/images/avatar1.png";
import Dropdown from "@/Components/shared/Dropdown";
import composable from "@/Composables/sharedComposable";
export default function index() {
    const { logout } = composable();
    return (
        <header className="header">
            <div className="container-fluid flex items-center justify-between">
                {/* <!-- Sidebar Toggle & Search Starts --> */}
                <div className="flex items-center space-x-6 overflow-visible">
                    <button className="sidebar-toggle">
                        <span className="flex space-x-4">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="22"
                                width="22"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                ></path>
                            </svg>
                        </span>
                    </button>

                    {/* <!-- Mobile Search Starts --> */}
                    <div className="sm:hidden">
                        <button
                            type="button"
                            data-trigger="search-modal"
                            className="flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-primary-500 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300"
                        >
                            <i width="22" height="22" data-feather="search"></i>
                        </button>
                    </div>
                    {/* <!-- Mobile Search Ends --> */}

                    {/* <!-- Searchbar Start --> */}
                    <button
                        type="button"
                        data-trigger="search-modal"
                        className="group hidden h-10 w-72 items-center overflow-hidden rounded-primary bg-slate-100 px-3 shadow-sm dark:border-transparent dark:bg-slate-700 sm:flex"
                    >
                        <i
                            className="text-slate-400"
                            width="1em"
                            height="1em"
                            data-feather="search"
                        ></i>
                        <span className="ml-2 text-sm text-slate-400">
                            Search
                        </span>
                    </button>
                </div>

                <div className="flex items-center">
                    <div className="dropdown" data-strategy="absolute">
                        <div className="dropdown-toggle px-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700 focus:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-slate-300"
                            >
                                <span className="fi fi-gb"></span>
                                <span className="hidden font-medium md:inline-block">
                                    English
                                </span>
                                <span className="inline-block font-medium md:hidden">
                                    EN
                                </span>
                            </button>
                        </div>

                        <div className="dropdown-content mt-3 w-40">
                            <ul className="dropdown-list">
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-gb"></span>
                                        <span className="">English</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-de"></span>
                                        <span className="">German</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-gf"></span>
                                        <span className="">French</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-sa"></span>
                                        <span className="">Arabic</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-cn"></span>
                                        <span className="">Chinese</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <button
                                        className="dropdown-btn"
                                        type="button"
                                    >
                                        <span className="fi fi-bd"></span>
                                        <span className="">Bangla</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="dropdown"
                        data-strategy="absolute"
                        id="theme-switcher-dropdown"
                    >
                        <button
                            className="dropdown-toggle px-3 text-slate-500 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500"
                            type="button"
                        >
                            <i
                                className="hidden dark:block"
                                width="24"
                                height="24"
                                data-feather="moon"
                            ></i>
                            <i
                                className="block dark:hidden"
                                width="24"
                                height="24"
                                data-feather="sun"
                            ></i>
                        </button>

                        <div className="dropdown-content mt-3 w-36">
                            <ul className="dropdown-list">
                                <li className="dropdown-list-item">
                                    <button
                                        type="buttton"
                                        className="dropdown-btn"
                                        data-theme-mode="light"
                                    >
                                        <i
                                            width="16"
                                            height="16"
                                            data-feather="sun"
                                        ></i>
                                        <span>Light</span>
                                    </button>
                                </li>

                                <li className="dropdown-list-item">
                                    <button
                                        type="buttton"
                                        className="dropdown-btn"
                                        data-theme-mode="dark"
                                    >
                                        <i
                                            width="16"
                                            height="16"
                                            data-feather="moon"
                                        ></i>
                                        <span>Dark</span>
                                    </button>
                                </li>

                                <li className="dropdown-list-item">
                                    <button
                                        type="buttton"
                                        className="dropdown-btn"
                                        data-theme-mode="system"
                                    >
                                        <i
                                            width="16"
                                            height="16"
                                            data-feather="monitor"
                                        ></i>
                                        <span>System</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dropdown -mt-0.5" data-strategy="absolute">
                        <div className="dropdown-toggle px-3">
                            <button className="relative mt-1 flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500">
                                <i
                                    width="24"
                                    height="24"
                                    data-feather="bell"
                                ></i>
                                <span className="absolute -right-1 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger-500 text-[11px] text-slate-200">
                                    5
                                </span>
                            </button>
                        </div>

                        <div className="dropdown-content mt-3 w-[17.5rem] divide-y dark:divide-slate-700 sm:w-80">
                            <div className="flex items-center justify-between px-4 py-4">
                                <h6 className="text-slate-800 dark:text-slate-300">
                                    Notifications
                                </h6>
                                <button className="text-xs font-medium text-slate-600 hover:text-primary-500 dark:text-slate-300">
                                    Clear All
                                </button>
                            </div>

                            <div className="h-80 w-full" data-simplebar>
                                <ul>
                                    <li className="flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                            <i
                                                data-feather="alert-circle"
                                                width="20"
                                                height="20"
                                            ></i>
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-normal">
                                                New order received
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                Order #1234 has been placed
                                            </p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                                <i
                                                    data-feather="clock"
                                                    width="1em"
                                                    height="1em"
                                                ></i>
                                                <span>2 min ago</span>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                                            <i
                                                data-feather="alert-triangle"
                                                width="20"
                                                height="20"
                                            ></i>
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-normal">
                                                High CPU usage
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                CPU usage is at 92%
                                            </p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                                <i
                                                    data-feather="clock"
                                                    width="1em"
                                                    height="1em"
                                                ></i>
                                                <span>5 min ago</span>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500">
                                            <i
                                                data-feather="check-circle"
                                                width="20"
                                                height="20"
                                            ></i>
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-normal">
                                                Your order has been shipped
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                Order #1234 has been shipped
                                            </p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                                <i
                                                    data-feather="clock"
                                                    width="1em"
                                                    height="1em"
                                                ></i>
                                                <span>10 min ago</span>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-danger-100 text-danger-500">
                                            <i
                                                data-feather="x-circle"
                                                width="20"
                                                height="20"
                                            ></i>
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-normal">
                                                Something went wrong
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                Order #1234 has been placed
                                            </p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                                <i
                                                    data-feather="clock"
                                                    width="1em"
                                                    height="1em"
                                                ></i>
                                                <span>1 hour ago</span>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500">
                                            <i
                                                data-feather="check-circle"
                                                width="20"
                                                height="20"
                                            ></i>
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-normal">
                                                Your order has been shipped
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                Order #1234 has been shipped
                                            </p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                                <i
                                                    data-feather="clock"
                                                    width="1em"
                                                    height="1em"
                                                ></i>
                                                <span>10 min ago</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="px-4 py-2">
                                <button
                                    className="btn btn-primary-plain btn-sm w-full"
                                    type="button"
                                >
                                    <span>View More</span>
                                    <i
                                        data-feather="arrow-right"
                                        width="1rem"
                                        height="1rem"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <div className="avatar avatar-circle avatar-indicator avatar-indicator-online">
                                        <img
                                            className="avatar-img group-focus-within:ring group-focus-within:ring-primary-500"
                                            src={avatar}
                                            alt="Avatar 1"
                                        />
                                    </div>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <div className="px-4 py-3">
                                <p className="text-sm">Signed in as</p>
                                <p className="truncate text-sm font-medium">
                                    admin@example.com
                                </p>
                            </div>
                            <div className="py-1"></div>
                            <div className="py-1">
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="dropdown-btn"
                                >
                                    <i
                                        width="18"
                                        height="18"
                                        data-feather="log-out"
                                        className="text-slate-500"
                                    ></i>
                                    <span>Sign out</span>
                                </button>
                            </div>
                        </Dropdown.Content>
                    </Dropdown>
                    {/* <div className="dropdown" data-strategy="absolute">
                        <div className="dropdown-toggle pl-3">
                            <button
                                className="group relative flex items-center gap-x-1.5"
                                type="button"
                            >
                                <div className="avatar avatar-circle avatar-indicator avatar-indicator-online">
                                    <img
                                        className="avatar-img group-focus-within:ring group-focus-within:ring-primary-500"
                                        src={avatar}
                                        alt="Avatar 1"
                                    />
                                </div>
                            </button>
                        </div>

                        <div className="dropdown-content mt-1 w-56 divide-y dark:divide-slate-600">
                            <div className="px-4 py-3">
                                <p className="text-sm">Signed in as</p>
                                <p className="truncate text-sm font-medium">
                                    admin@example.com
                                </p>
                            </div>
                            <div className="py-1">
                                <a href="#" className="dropdown-link">
                                    <i
                                        width="18"
                                        height="18"
                                        data-feather="user"
                                        className="text-slate-500"
                                    ></i>
                                    <span>Profile</span>
                                </a>
                                <a href="#" className="dropdown-link">
                                    <i
                                        width="18"
                                        height="18"
                                        data-feather="settings"
                                        className="text-slate-500"
                                    ></i>
                                    <span>Settings</span>
                                </a>
                                <a href="#" className="dropdown-link">
                                    <i
                                        width="18"
                                        height="18"
                                        data-feather="help-circle"
                                        className="text-slate-500"
                                    ></i>
                                    <span>Support</span>
                                </a>
                            </div>
                            <div className="py-1">
                                <form method="POST" action="#">
                                    <button
                                        type="submit"
                                        className="dropdown-btn"
                                    >
                                        <i
                                            width="18"
                                            height="18"
                                            data-feather="log-out"
                                            className="text-slate-500"
                                        ></i>
                                        <span>Sign out</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
}
