import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function Drawer({
    children,
    title,
    drawerId,
    saveButton = "Submit",
    isLoading = false,
    handleSubmit,
}) {
    return (
        <div id={drawerId} class="drawer drawer-right">
            <form onSubmit={handleSubmit}>
                <div class="drawer-header">
                    <h5>{trans(title)}</h5>
                    <button
                        type="button"
                        class="btn btn-plain-secondary dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                        data-dismiss="drawer"
                    >
                        <i data-feather="x" width="1.5rem" height="1.5rem"></i>
                    </button>
                </div>
                <div class="drawer-body overflow-y-auto">{children}</div>
                <div class="drawer-footer">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="drawer"
                        >
                            <span> {trans("Close")}</span>
                        </button>
                        <PrimaryButton isLoading={isLoading} type="submit">
                            {trans(saveButton)}
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
}
