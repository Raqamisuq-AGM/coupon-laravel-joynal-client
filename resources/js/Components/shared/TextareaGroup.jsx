import React from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

export const TextareaGroup = ({
    label,
    name,
    formObject,
    setFormObject,
    validationError,
    className = "",
    placeholder = "Write message....",
}) => {
    return (
        <div className="flex w-full flex-col gap-1">
            <InputLabel htmlFor={name} value={label} />
            <textarea
                className={`textarea ${className}`}
                value={formObject[name] || ""}
                placeholder={placeholder}
                id={name}
                onChange={(e) => setFormObject(name, e.target.value)}
            />
            <InputError message={validationError[name]} />
        </div>
    );
};
