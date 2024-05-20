import { usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default () => {
    const textExcerpt = (text, length = 30) => {
        if (text) {
            return text?.length > length
                ? text?.substring(0, length) + "..."
                : text;
        }
        return text || "";
    };
    const currentRoute = (route) => {
        return usePage().component === route;
    };
    const currentRouteGroup = (route) => {
        return usePage().component.startsWith(route);
    };

    const logout = () => {
        router.post("/logout");
    };

    const formatNumber = (num, precision = 1) => {
        const map = [
            { suffix: "T", threshold: 1e12 },
            { suffix: "B", threshold: 1e9 },
            { suffix: "M", threshold: 1e6 },
            { suffix: "K", threshold: 1e3 },
            { suffix: "", threshold: 1 },
        ];

        const found = map.find((x) => Math.abs(num) >= x.threshold);
        if (found) {
            const formatted =
                (num / found.threshold).toFixed(precision) + found.suffix;
            return formatted;
        }

        return num;
    };

    const deleteRow = (actionUrl, message) => {
        withReactContent(Swal)
            .fire({
                title: "Are you sure?",
                text: message,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    router.delete(actionUrl);
                }
            });
    };
    const formatCurrency = (amount = 0, iconType = "name") => {
        let formattedCurrency = "";
        if (!(typeof amount === "number")) {
            return "";
        }
        const currency = usePage().props.currency;
        if (iconType === "name") {
            formattedCurrency =
                currency.position === "right"
                    ? currency.name + " " + amount.toFixed(2)
                    : currency.icon + " " + amount.toFixed(2);
        } else if (iconType === "both") {
            formattedCurrency =
                currency.icon + amount.toFixed(2) + " " + currency.name;
        } else {
            formattedCurrency =
                currency.position === "right"
                    ? amount.toFixed(2) + currency.icon
                    : currency.icon + amount.toFixed(2);
        }

        return formattedCurrency;
    };
    const pickBy = (obj) => {
        const result = {};

        for (const key in obj) {
            const value = obj[key];

            if (value !== undefined && value !== null && value !== "") {
                if (Array.isArray(value) && value.length === 0) {
                    continue; // Skip empty arrays
                } else if (
                    typeof value === "object" &&
                    Object.keys(value).length === 0
                ) {
                    continue; // Skip empty objects
                }

                result[key] = value;
            }
        }

        return result;
    };
    //copy text
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        // toast.success("Copied to clipboard");
    }
    function trim(text) {
        return text.replace(/[_-]/g, " ");
    }

    function uiAvatar(name = null, avatar = null) {
        return avatar
            ? avatar
            : `https://ui-avatars.com/api/?name=${name ? name : "user"}`;
    }
    return {
        textExcerpt,
        currentRoute,
        currentRouteGroup,
        deleteRow,
        logout,
        formatCurrency,
        pickBy,
        formatNumber,
        copyToClipboard,
        trim,
        uiAvatar,
    };
};
