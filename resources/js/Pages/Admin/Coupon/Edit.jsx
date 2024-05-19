import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { SelectGroup } from "@/Components/shared/SelectGroup";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { useForm } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect } from "react";
export default function Edit({ coupon }) {
    const { data, setData, put, processing, errors } = useForm({});

    const editCoupon = (e) => {
        e.preventDefault();
        put(route("admin.coupons.update", coupon.id));
    };

    useEffect(() => {
        setData({
            ...coupon,
            valid_from: moment(coupon.valid_from).format("YYYY-MM-DD"),
            valid_to: moment(coupon.valid_to).format("YYYY-MM-DD"),
        });
    }, [coupon]);

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
                        <form onSubmit={editCoupon}>
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup
                                    label="Coupon Code"
                                    placeholder="000001"
                                    name="code"
                                    formObject={data}
                                    setFormObject={setData}
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

                                <InputGroup
                                    label="User limit (per user)"
                                    name="usage_limit"
                                    placeholder="100"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />

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
