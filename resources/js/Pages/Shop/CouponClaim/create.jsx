import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import CouponClaimModal from "./CouponClaimModal"; // Adjust the import path as per your project structure
import { Modal } from "@/Components/shared/Modal";

export default function Create() {
    const { data, setData, post, get, processing, errors } = useForm({});

    const getCoupon = async (e) => {
        e.preventDefault();
        get(route("shop.coupon.claim.user.get"));
    };

    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <section className="bg-white py-10">
                    <div className="container mx-auto px-6 text-center">
                        <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                            <h2 className="mb-8 text-4xl font-bold">
                                Claim Your Coupon
                            </h2>
                            <p className="mb-8 text-lg">
                                Enter your coupon code below to claim your
                                discount.
                            </p>
                            <form
                                onSubmit={getCoupon}
                                className="text-left"
                                method="POST"
                            >
                                <InputGroup
                                    label="Coupon Code"
                                    placeholder="89651"
                                    name="coupon_code"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Customer Phone Number"
                                    placeholder="Enter customer phone number"
                                    name="phone"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <div className="mt-4 lg:mt-8">
                                    <PrimaryButton
                                        className="w-full"
                                        isLoading={processing}
                                    >
                                        Check
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
