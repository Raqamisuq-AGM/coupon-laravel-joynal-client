import React from "react";
import { InputGroup } from "./InputGroup";
import { Icon } from "@iconify-icon/react";

export const PasswordInput = ({ data, setData, errors }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="relative">
            <InputGroup
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                formObject={data}
                setFormObject={setData}
                validationError={errors}
            />
            <div
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-2 top-[56px] -translate-y-1/2 cursor-pointer ${
                    showPassword
                        ? "text-primary-500"
                        : "text-slate-500 dark:text-slate-400"
                }`}
            >
                <Icon icon="mdi:eye-outline" className="h-5 w-5" />
            </div>
        </div>
    );
};
