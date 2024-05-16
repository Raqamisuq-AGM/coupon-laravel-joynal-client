import React, { useEffect } from "react";
import Header from "@/Layouts/admin/Header/index.jsx";
import SidebarComponent from "@/Layouts/admin/Sidebar/index.jsx";
import { init } from "@/Plugins/template/app.js";
import Footer from "./Footer";

export default function AdminLayout({ user, children }) {
    useEffect(() => {
        init();
    }, []);
    return (
        <div>
            {/* sidebar */}
            <SidebarComponent />
            {/* content wrapper */}
            <div className="wrapper">
                {/* <!-- Header Starts --> */}
                <Header />
                {/* header content */}

                {/* <!-- Page Content Starts --> */}
                <div className="content">
                    {/* <!-- Main Content Starts --> */}
                    {children}
                    {/* <!-- Main Content Ends -->

                    <!-- Footer Starts --> */}
                    <Footer />
                    {/* <!-- Footer Ends --> */}
                </div>
                {/* <!-- Page Content Ends --> */}
            </div>
            <div className="modal" id="search-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header px-4 sm:px-6">
                            <div className="group flex items-center">
                                <i
                                    data-feather="search"
                                    className="text-slate-500 group-focus-within:text-slate-600 dark:text-slate-400 dark:group-focus-within:text-slate-300"
                                ></i>
                                <input
                                    type="text"
                                    className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-0 dark:text-slate-200"
                                    placeholder="Search"
                                />
                                <button
                                    className="rounded-primary bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                    data-dismiss="modal"
                                >
                                    ESC
                                </button>
                            </div>
                        </div>
                        <div className="modal-body max-h-[600px] px-4 py-6 sm:px-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
