import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
export default function Create() {
    const { data, setData, post, processing, errors } = useForm({});

    const changePassword = (e) => {
        e.preventDefault();
        post(route("shop.change-password.store"));
    };
    return (
        <ShopLayout>
            <Container>
                <section className="bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                            <h2 className="mb-8 text-4xl font-bold">
                                Change Password
                            </h2>
                            <form
                                onSubmit={changePassword}
                                className="text-left"
                                method="POST"
                            >
                                <InputGroup
                                    label="Password"
                                    placeholder="Enter Password"
                                    name="password"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Confirmed Password"
                                    placeholder="Enter Confirmed Password"
                                    name="password_confirmation"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="mt-4 lg:mt-8">
                                    <PrimaryButton
                                        className="w-full"
                                        isLoading={processing}
                                    >
                                        Change Password
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Container>
        </ShopLayout>
    );
}
