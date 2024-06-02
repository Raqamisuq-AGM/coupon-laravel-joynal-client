import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";

export const InputGroup = ({
    label,
    name,
    formObject,
    setFormObject,
    validationError,
    className = "",
    type = "text",
    ...props
}) => {
    return (
        <div className="mt-2 w-full">
            <InputLabel htmlFor={name} value={label} />
            <TextInput
                className={className}
                type={type}
                value={
                    type == "file" && formObject[name]
                        ? undefined
                        : formObject[name] || ""
                }
                id={name}
                onChange={(e) =>
                    setFormObject(
                        name,
                        type === "file" ? e.target.files[0] : e.target.value
                    )
                }
                {...props}
            />
            <InputError message={validationError[name]} />
        </div>
    );
};
