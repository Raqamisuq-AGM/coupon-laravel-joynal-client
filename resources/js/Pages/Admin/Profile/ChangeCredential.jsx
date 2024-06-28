import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
export default function ChangeCredential({ user }) {
    const {
        data: passwordData,
        setData: setPasswordData,
        post: passwordPost,
        processing: passwordProccessing,
        errors: passwordErrors,
    } = useForm();

    const { data, setData, post, processing, errors } = useForm({
        email: user.email,
    });

    const changePassword = (e) => {
        e.preventDefault();
        passwordPost(route("admin.change-password.store"));
    };

    const changeEmail = (e) => {
        e.preventDefault();
        post(route("admin.change-email.store"));
    };

    return (
        <AdminLayout>
            <Container>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                        <section className="bg-white">
                            <div className="container mx-auto px-6 text-center">
                                <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                                    <h2 className="mb-8 text-3xl font-bold">
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
                                            formObject={passwordData}
                                            setFormObject={setPasswordData}
                                            validationError={passwordErrors}
                                        />
                                        <InputGroup
                                            label="Confirmed Password"
                                            placeholder="Enter Confirmed Password"
                                            name="password_confirmation"
                                            formObject={passwordData}
                                            setFormObject={setPasswordData}
                                            validationError={passwordErrors}
                                        />
                                        <div className="mt-4 lg:mt-8">
                                            <PrimaryButton
                                                className="w-full"
                                                isLoading={passwordProccessing}
                                            >
                                                Change Password
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="bg-white">
                            <div className="container mx-auto px-6 text-center">
                                <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                                    <h2 className="mb-8 text-3xl font-bold">
                                        Change Email
                                    </h2>
                                    <form
                                        onSubmit={changeEmail}
                                        className="text-left"
                                        method="POST"
                                    >
                                        <InputGroup
                                            label="Email"
                                            placeholder="Enter Email"
                                            name="email"
                                            formObject={data}
                                            setFormObject={setData}
                                            validationError={errors}
                                        />
                                        <div className="mt-4 lg:mt-8">
                                            <PrimaryButton
                                                className="w-full"
                                                isLoading={processing}
                                            >
                                                Update
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </AdminLayout>
    );
}
