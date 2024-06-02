import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import SwitchBox from "@/Components/shared/SwitchBox";
import { TextAreaGroup } from "@/Components/shared/TextAreaGroup";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect } from "react";
export default function Edit({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        ...user,
    });

    const editUser = (e) => {
        e.preventDefault();
        put(route("admin.users.update", user.id));
    };

    const status = [
        {
            label: "Active",
            value: true,
        },
        {
            label: "Inactive",
            value: false,
        },
    ];

    const roles = [
        {
            label: "Admin",
            value: "admin",
        },
        {
            label: "Shop",
            value: "shop",
        },
    ];
    return (
        <AdminLayout>
            <Container>
                <PageHeader />
                <div className="card mx-auto max-w-[800px]">
                    <div className="card-body">
                        <form onSubmit={editUser}>
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup
                                    label="Name"
                                    placeholder="Jhone Doe"
                                    name="name"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="jDqJi@example.com"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />

                                <InputGroup
                                    label="Phone Number"
                                    name="phone"
                                    placeholder="1234567890"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />

                                <SelectGroup
                                    label="Select Role"
                                    name="role"
                                    options={roles}
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <SelectGroup
                                    label="Select Status"
                                    name="status"
                                    options={status}
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                            </div>
                            <div className="mt-4 flex justify-end">
                                <PrimaryButton
                                    isLoading={processing}
                                    type="submit"
                                >
                                    Update
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </AdminLayout>
    );
}
