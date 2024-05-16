
import { Link } from "@inertiajs/react";

export default function DangerButton({
    className = "",
    disabled = false,
    url = "",
    isLoading = false,
    children,
    ...props
}) {
    return !url ? (
        <button
        {...props}
        className={`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150` + className}
        disabled={disabled}
    >
        {children}
    </button>
    ) : (
        <Link
            {...props}
            href={url}
            className={`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150` + className}
            disabled={disabled}
        >
            {children}
        </Link>
    );
}

