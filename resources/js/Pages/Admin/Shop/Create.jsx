import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import SwitchBox from "@/Components/shared/SwitchBox";
import { TextAreaGroup } from "@/Components/shared/TextAreaGroup";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const createUser = (e) => {
        e.preventDefault();
        post(route("admin.users.store"));
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

    return (
        <AdminLayout>
            <Container>
                <PageHeader />
                <div className="card mx-auto max-w-[800px]">
                    <div className="card-body">
                        <form onSubmit={createUser}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                            </div>
                            <div className="mt-4 flex justify-end">
                                <PrimaryButton
                                    isLoading={processing}
                                    type="submit"
                                >
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </AdminLayout>
    );
}
