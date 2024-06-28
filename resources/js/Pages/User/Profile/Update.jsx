import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import { TextAreaGroup } from "@/Components/shared/TextAreaGroup";
import UserLayout from "@/Layouts/user/UserLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Update({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        name: user.name,
        phone: user.phone,
        _method: "put",
    });

    const editProfile = (e) => {
        e.preventDefault();
        post(route("user.profile.update", user.id));
    };

    return (
        <UserLayout>
            <Container>
                <PageHeader />
                <div className="card mx-auto max-w-[800px]">
                    <div className="card-body">
                        <form onSubmit={editProfile}>
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup
                                    label="Name"
                                    placeholder="Enter Name"
                                    name="name"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Phone"
                                    placeholder="Enter Phone"
                                    name="phone"
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
        </UserLayout>
    );
}
