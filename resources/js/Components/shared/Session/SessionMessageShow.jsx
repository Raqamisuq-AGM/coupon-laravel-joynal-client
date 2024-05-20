const { usePage } = require("@inertiajs/react");
const { useMemo, useEffect, useState } = require("react");
import "./style.css";

export const SessionMessageShow = () => {
    const [errors, setErrors] = useState(usePage().props.errors);
    useEffect(
        () => setErrors(usePage().props.errors),
        [usePage().props.errors]
    );

    const hasErrors = useMemo(() => {
        return Object.keys(errors).length > 0;
    }, [errors]);

    return (
        <transition name="slide-right">
            {hasErrors && (
                <div className="validation-errors">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => setErrors({})}
                        >
                            X
                        </button>
                    </div>
                    <div className="flex flex-col">
                        {errors.map((error, index) => (
                            <p key={index}> * {error.replace(/[.,]/g, " ")}</p>
                        ))}
                    </div>
                </div>
            )}
        </transition>
    );
};
