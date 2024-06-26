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
export default function Create({ shops }) {
    const { data, setData, post, processing, errors } = useForm({
        status: true,
    });

    const createCoupon = (e) => {
        e.preventDefault();
        post(route("admin.coupons.store"));
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
                        <form onSubmit={createCoupon}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <InputGroup
                                    label="Coupon Title"
                                    placeholder="Pizza coupon"
                                    name="title"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Coupon Code"
                                    placeholder="000001"
                                    name="code"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="md:col-span-2">
                                    <InputGroup
                                        label="Short Description"
                                        placeholder="50 % off on pizza"
                                        name="short_description"
                                        formObject={data}
                                        setFormObject={setData}
                                        validationError={errors}
                                    />
                                </div>

                                <InputGroup
                                    label="Coupon Banner"
                                    name="image"
                                    type="file"
                                    except="image/*"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Price"
                                    name="price"
                                    placeholder="50"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <SwitchBox
                                    label="Discount Type"
                                    name="discount_type"
                                    texts={["percentage", "fixed"]}
                                    selectedValue="percentage"
                                    setValue={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Discount"
                                    name="discount"
                                    placeholder="50"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                {/* <InputGroup
                                    label="Daily Limit (Per Phone Number can buy)"
                                    name="daily_limit"
                                    placeholder="5"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Usage Limit (Claims Per Coupon)"
                                    name="usage_limit"
                                    placeholder="100"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                /> */}

                                <InputGroup
                                    label="Valid From"
                                    name="valid_from"
                                    type="date"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />

                                <InputGroup
                                    label="Valid To"
                                    name="valid_to"
                                    type="date"
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
                                <SelectGroup
                                    label="Select A Shop"
                                    name="shop_id"
                                    options={shops}
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="md:col-span-2">
                                    <TextAreaGroup
                                        label="Description"
                                        name="description"
                                        formObject={data}
                                        setFormObject={setData}
                                        validationError={errors}
                                    />
                                </div>
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
