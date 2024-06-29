import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import { PageHeader } from "@/Components/shared/PageHeader";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { useForm } from "@inertiajs/react";
import React, { useState, useEffect  } from "react";
import CouponClaimModal from "./CouponClaimModal"; // Adjust the import path as per your project structure
import { Modal } from "@/Components/shared/Modal";

export default function CouponDetail({user,coupon,couponsClaimedToday}) {
    const { data, setData, post, processing, errors } = useForm({
        coupon_code: coupon.code,
        phone: user.phone,
    });

    const claimACoupon = (e) => {
        e.preventDefault();
        post(route("shop.coupon-claims.store"), {
            ...data,
            coupon_code: coupon.code,
            phone: user.phone,
        });
    };

    useEffect(() => {
        setData({
            coupon_code: coupon.code,
            phone: user.phone,
        });
    }, [coupon.code, user.phone]);

    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <section className="bg-white py-10">
                    <div className="container mx-auto px-6">
                        <div className="">
                            <h2>Coupon</h2>
                            <div className="">
                                <p>Code: {coupon.code} </p>
                                <p>Description: {coupon.short_description}</p>
                                <p>Discount: {coupon.discount}%</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2>Shop Owner</h2>
                            <div className="">
                                <p>Name: {coupon.shop.name}</p>
                                <p>Description: {coupon.shop.short_description}</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2>User</h2>
                            <div className="">
                                <p>Name: {user.name}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Email: {user.email}</p>
                                <p>Claimed today : {couponsClaimedToday}</p>
                            </div>
                        </div>
                        <form
                                onSubmit={claimACoupon}
                                className="text-left"
                                method="POST"
                            >
                                <InputGroup
                                    label="Coupon Code"
                                    placeholder="Pizza coupon"
                                    name="coupon_code"
                                    formObject={data}
                                    setFormObject={setData}
                                    validationError={errors}
                                />
                                <InputGroup
                                    label="Customer PHone Number"
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
                                        Claim
                                    </PrimaryButton>
                                </div>
                            </form>
                    </div>
                </section>
            </Container>
        </ShopLayout>
    );
}
