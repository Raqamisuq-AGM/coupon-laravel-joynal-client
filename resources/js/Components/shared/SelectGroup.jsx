import React from "react";
import InputLabel from "./InputLabel";
import { TextEditor } from "./TextEditor";
import InputError from "./InputError";
import { SelectOption } from "./SelectOption";

export const SelectGroup = ({
    label,
    name,
    formObject,
    setFormObject,
    validationError,
    className = "",
    options,
    isMultiple = false,
}) => {
    return (
        <div className="mt-2 w-full">
            <InputLabel htmlFor={name} value={trans(label)} />
            <SelectOption
                isMultiple={isMultiple}
                className={className}
                options={options}
                value={formObject[name] || ""}
                onChange={(value) => setFormObject(name, value)}
            />
            <InputError message={validationError[name]} />
        </div>
    );
};
