import { Container } from "@/Components/shared/Container";
import { InputGroup } from "@/Components/shared/InputGroup";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function CreateModal({ couponClaim, onSuccess }) {
    const { data, setData, post, processing, errors } = useForm({
        couponId: couponClaim.id,
        coupon_code: couponClaim.code,
        redirectRoute: "admin.coupons.index",
    });

    const claimACoupon = (e) => {
        e.preventDefault();

        const formData = {
            couponId: couponClaim.id,
            coupon_code: couponClaim.code,
            redirectRoute: "admin.coupons.index",
        };

        post(route("admin.coupon-claims.store"), formData);
        onSuccess();
    };
    return (
        <div>
            <p className="mb-8 text-lg">
                Enter your coupon code below to claim your discount.
            </p>
            <form onSubmit={claimACoupon} className="text-left" method="POST">
                <InputGroup
                    label="Coupon Code"
                    placeholder="Pizza coupon"
                    name="coupon_code"
                    formObject={data}
                    setFormObject={setData}
                    validationError={errors}
                    disabled
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
                    <PrimaryButton className="w-full" isLoading={processing}>
                        Claim
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
