import { Modal } from "@/Components/shared/Modal";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export const AddShopUser = ({ isOpen, setIsOpen, shop }) => {
    const users = usePage().props.users;
    const { data, setData, post, processing, errors, reset } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.shops.users.store", shop.id), [
            onSuccess(() => {
                setIsOpen(false);
                reset();
            })
        ])

    };
    return (
        <Modal title="View Users" isOpen={isOpen} setIsOpen={setIsOpen}>
            <form onSubmit={submit}>
                <div>
                    <SelectGroup
                        label="User"
                        name="user_ids"
                        isMultiple={true}
                        formObject={data}
                        setFormObject={setData}
                        validationError={errors}
                        options={users}
                    />
                </div>

                <div className="mt-4">
                    <PrimaryButton isLoading={processing} type="submit">
                        Add User
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
};
