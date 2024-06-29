import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
export default function Create() {
    const { data, setData, post, processing, errors, transform } = useForm({
        category: "",
        img: null,
        _method: "post",
    });

    const createCategory = (e) => {
        e.preventDefault();
        post(route("admin.category.store"), {
            forceFormData: true, // Ensure the form is submitted as multipart/form-data
        });
    };

    const fileInputRef = useRef();

    useEffect(() => {
        transform((data) => {
            const formData = new FormData();
            for (let key in data) {
                if (data[key] !== null) {
                    formData.append(key, data[key]);
                }
            }
            return formData;
        });
    }, [data]);

    return (
        <AdminLayout>
            <Container>
                <PageHeader />
                <div className="card mx-auto max-w-[800px]">
                    <div className="card-body">
                        <form onSubmit={createCategory}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <InputGroup
                                    label="category"
                                    placeholder="Cafes"
                                    name="category"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                               <InputGroup
                                    label="Image"
                                    name="img"
                                    type="file"
                                    accept="image/*"
                                    placeholder="Enter Short Description"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                    ref={fileInputRef}
                                    onChange={(e) => setData('img', e.target.files[0])}
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
