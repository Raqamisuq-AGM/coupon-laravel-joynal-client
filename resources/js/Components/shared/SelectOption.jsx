import React, { useMemo } from "react";
import Select, { createFilter } from "react-select";
import makeAnimated from "react-select/animated";

const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: "any",
};
const animatedComponents = makeAnimated();

// options format {label: string, value: string}

export const SelectOption = ({
    options = [],
    onChange,
    isMultiple = false,
    value, // value accept array or single element of an option value
    placeholder = "Select...",
    className = "",
}) => {
    const selectedValue = useMemo(() => {
        if (!options?.length) return "";
        if (isMultiple) {
            return options.filter((option) => value.includes(option.value));
        }
        return options.find((option) => option.value === value);
    }, [value, options]);
    const onChangeHandler = (event) => {
        if (isMultiple) {
            onChange(event.map((option) => option.value));
            return;
        }
        onChange(event.value);
    };

    return (
        <Select
            closeMenuOnSelect={!isMultiple}
            components={animatedComponents}
            isMulti={isMultiple}
            options={options}
            value={selectedValue}
            onChange={onChangeHandler}
            filterOption={createFilter(filterConfig)}
            placeholder={placeholder}
            className={className}
        />
    );
};
