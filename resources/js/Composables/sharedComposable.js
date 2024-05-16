import modal from "@/Plugins/template/components/modal";
import { usePage, router } from "@inertiajs/react";

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

    const deleteRow = (actionUrl) => {
        modal.init(actionUrl, {
            method: "delete",
            options: {
                message: trans("You would not be revert it back!"),
                confirm_text: trans("Are you sure?"),
                accept_btn_text: trans("Yes, Delete"),
                reject_btn_text: trans("No, Cancel"),
            },
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

    const getQueryParams = () => {
        const obj = {};
        const para = new URLSearchParams(window.location.search);

        for (const [key, value] of para) {
            if (obj.hasOwnProperty(key)) {
                if (Array.isArray(obj[key])) {
                    obj[key].push(value);
                } else {
                    obj[key] = [obj[key], value];
                }
            } else {
                obj[key] = value;
            }
        }

        return obj;
    };
    //copy text
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        // toast.success("Copied to clipboard");
    }
    function trim(text) {
        return text.replace(/[_-]/g, " ");
    }

    function socialShare(media, url = null) {
        let shareableLinks = {
            fb: "https://www.facebook.com/sharer/sharer.php?u=",
            tw: "https://twitter.com/intent/tweet?url=",
            pn: "https://pinterest.com/pin/create/button/?url=",
            li: "https://www.linkedin.com/sharing/share-offsite/?url=",
            ins: "https://www.instagram.com/?url=",
        };
        if (shareableLinks.hasOwnProperty(media)) {
            return shareableLinks[media] + (url ?? window.location.href);
        }
        return "invalidMediaError";
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
        getQueryParams,
        copyToClipboard,
        socialShare,
        trim,
        uiAvatar,
    };
};
