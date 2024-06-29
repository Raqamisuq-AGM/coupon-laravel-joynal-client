import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import { TextAreaGroup } from "@/Components/shared/TextAreaGroup";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { shopStatus, shopTypes } from "./constant";

export default function Update({ shop }) {
    const { data, setData, post, processing, errors, transform } = useForm({
        name: shop.name,
        short_description: shop.short_description,
        type: shop.type,
        status: shop.status,
        description: shop.description,
        site_url: shop.site_url,
        id: shop.id,
        image: null, // Initialize the image field
        _method: "post",
    });

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

    const editShop = (e) => {
        e.preventDefault();
        post(route("shop.profile-update", shop.id), {
            forceFormData: true, // Ensure the form is submitted as multipart/form-data
        });
    };

    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <div className="card mx-auto max-w-[800px]">
                    <div className="card-body">
                        <form onSubmit={editShop} encType="multipart/form-data">
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup
                                    label="Shop Name"
                                    placeholder="Enter Shop Name"
                                    name="name"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <SelectGroup
                                    label="Select Type"
                                    name="type"
                                    options={shopTypes}
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="md:col-span-2">
                                    <InputGroup
                                        label="Short Description"
                                        name="short_description"
                                        type="text"
                                        placeholder="Enter Short Description"
                                        formObject={data}
                                        setFormObject={setData}
                                        validationError={errors}
                                    />
                                </div>

                                <InputGroup
                                    label="Image"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    placeholder="Enter Short Description"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                    ref={fileInputRef}
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                <InputGroup
                                    label="Site Link (optional)"
                                    name="site_url"
                                    type="string"
                                    placeholder="https://example.com"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <SelectGroup
                                    label="Select Status"
                                    name="status"
                                    options={shopStatus}
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="col-span-2">
                                    <TextAreaGroup
                                        label="Description (optional)"
                                        name="description"
                                        formObject={data}
                                        setFormObject={setData}
                                        validationError={errors}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <PrimaryButton isLoading={processing} type="submit">
                                    Update
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </ShopLayout>
    );
}
