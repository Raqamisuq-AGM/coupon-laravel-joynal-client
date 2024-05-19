import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ToastContainer = () => {
    const toastMessages = usePage().props.toast;
    useEffect(() => {
        ["success", "error", "warning", "info"].forEach((type) => {
            if (toastMessages[type]) {
                toast[type](toastMessages[type]);
            }
        });
    }, [toastMessages]);

    return <Toaster position="top-right" />;
};
