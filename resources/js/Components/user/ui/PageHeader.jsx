import { Head } from "@inertiajs/react";
import React from "react";
import PrimaryButton from "@/Components/user/ui/PrimaryButton";
import { BreadCrumb } from "@/Components/user/ui/BreadCrumb";
export const PageHeader = ({ title, buttons = [], segments = [] }) => {
    return (
        <React.Fragment>
            <Head title={title} />
            <div className="mb-6 flex flex-col justify-between gap-y-1 sm:flex-row sm:gap-y-0">
                <h5>{title}</h5>
                <div className="flex flex-row gap-4">
                    {buttons.length ? (
                        setButtons(buttons)
                    ) : (
                        <BreadCrumb segments={segments} />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

const setButtons = (buttons) => {
    function createMarkup(content) {
        return { __html: content };
    }
    return buttons.map((button, index) => (
        <PrimaryButton
            key={index}
            url={button?.url && button.url}
            dangerouslySetInnerHTML={createMarkup(button.name || button.title)}
        ></PrimaryButton>
    ));
};
