import { Transition } from "@headlessui/react";
import React, { useEffect, useRef } from "react";

export const Modal = ({ children, title, isOpen, setIsOpen }) => {
    // modal Close when click outside
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setIsOpen]);
    return (
        <div
            className={`modal  ${
                isOpen ? "show flex" : ""
            }`}
        >
            <div className="modal-dialog">
                <div className="modal-content" ref={modalRef}>
                    <div className="modal-header px-4 sm:px-6">
                        <div className="group flex items-center justify-between">
                            <p>{title}</p>
                            <button
                                className="rounded-primary bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                onClick={() => setIsOpen(false)}
                            >
                                ESC
                            </button>
                        </div>
                    </div>
                    <div className="modal-body max-h-[600px] px-4 py-6 sm:px-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
