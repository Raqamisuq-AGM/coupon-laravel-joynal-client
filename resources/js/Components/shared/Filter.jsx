import { trans } from "@/TranslationsContext";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export const Filter = ({ form }) => {
    const { errors, get, data, setData } = useForm();
    const url = usePage().url;
    const handleSubmit = (event) => {
        event.preventDefault();
        get(url);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0"
        >
            <div className="group flex h-10 w-full items-center rounded-primary border border-transparent bg-white shadow-sm focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-inset focus-within:ring-primary-500 dark:border-transparent dark:bg-slate-800 dark:focus-within:border-primary-500 md:w-72">
                <div className="flex h-full items-center px-2">
                    <i
                        className="h-4 text-slate-400 group-focus-within:text-primary-500"
                        data-feather="search"
                    ></i>
                </div>
                <input
                    className="h-full w-full border-transparent bg-transparent px-0 text-sm placeholder-slate-400 placeholder:text-sm focus:border-transparent focus:outline-none focus:ring-0"
                    type="text"
                    value={data["search"] || ""}
                    onChange={(e) => setData("search", e.target.value)}
                    placeholder={trans("Search")}
                />
            </div>

            <div className="itransems-center flex w-full justify-between gap-x-4 md:w-auto">
                <div className="dropdown" data-placement="bottom-end">
                    <div className="dropdown-toggle">
                        {/* <button
                            type="button"
                            className="btn bg-white font-medium shadow-sm dark:bg-slate-800"
                        >
                            <i className="w-4" data-feather="filter"></i>
                            <span>{trans("Filter")}</span>
                            <i className="w-4" data-feather="chevron-down"></i>
                        </button> */}
                    </div>
                    <div className="dropdown-content w-72 !overflow-visible">
                        <ul className="dropdown-list space-y-4 p-4">
                            {form?.filterFields?.length &&
                                form.filterFields.map((field) => (
                                    <li className="dropdown-list-item">
                                        {filed?.options?.length ?? (
                                            <React.Fragment>
                                                <label
                                                    htmlFor={field.name}
                                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                                >
                                                    {trans(field.label)}
                                                </label>
                                                <select
                                                    id={field.name}
                                                    name={field.name}
                                                    className="select select-bordered w-full"
                                                    onChange={(e) =>
                                                        setData(
                                                            field.name,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        {trans("All")}
                                                    </option>
                                                    {field?.options?.map(
                                                        (option) => (
                                                            <option
                                                                key={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                            >
                                                                {option.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </React.Fragment>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    <i data-feather="search" height="1rem" width="1rem"></i>
                    <span>{trans("Go")}</span>
                </button>
            </div>
        </form>
    );
};
