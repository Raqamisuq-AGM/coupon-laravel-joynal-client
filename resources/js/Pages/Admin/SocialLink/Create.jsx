import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        status: true,
    });

    const createSocial = (e) => {
        e.preventDefault();
        post(route("admin.social.store"));
    };

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
                        <form onSubmit={createSocial}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <InputGroup
                                    label="Name"
                                    placeholder="Facebook"
                                    name="name"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Link"
                                    name="link"
                                    type="link"
                                    placeholder="https://twitter.com/jhonedoe"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Icon Image"
                                    name="icon"
                                    type="file"
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
