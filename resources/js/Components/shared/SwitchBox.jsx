import React from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

const SwitchBox = ({
    label,
    name,
    setValue,
    texts,
    validationError,
    selectedValue = "",
}) => {
    const [isChecked, setIsChecked] = React.useState(
        texts ? selectedValue === texts[0] : false
    );

    const handleClick = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            setValue(name, texts[0]);
        } else {
            setValue(name, texts[1]);
        }
    };

    const getText = (check) => (check ? texts[0] : texts[1]);

    React.useEffect(() => {
        setIsChecked(selectedValue === texts[0]);
        setValue(name, selectedValue);
    }, [selectedValue]);

    return (
        <div className="mt-2 w-full">
            <InputLabel htmlFor={name} value={label} />
            {texts && texts.length && (
                <button
                    onClick={handleClick}
                    type="button"
                    id={name}
                    className={`  ${
                        isChecked ? "bg-green-500" : "bg-yellow-500"
                    } m-auto  flex h-10 w-full  rounded-md p-0 transition duration-500`}
                >
                    <span
                        className={`m-0 flex h-full w-1/2 items-center justify-center rounded-md p-0 capitalize transition duration-500 ${
                            !isChecked ? "bg-gray-400 text-white" : "text-white"
                        }`}
                    >
                        {getText(isChecked)}
                    </span>
                    <span
                        className={`m-0 flex h-full w-1/2 items-center justify-center rounded-md p-0 capitalize transition duration-500 ${
                            isChecked ? "bg-gray-400 text-white" : "text-white "
                        }`}
                    >
                        {getText(!isChecked)}
                    </span>
                </button>
            )}

            <InputError message={validationError[name]} />
        </div>
    );
};

export default SwitchBox;
