import { InputGroup } from "@/Components/shared/InputGroup";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";
export default function Checkout({ coupon }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        coupon_code: coupon.code,
    });

    const submit = (e) => {
        e.preventDefault();
        setData("coupon_code", coupon.code);
        post(route("coupons.buy"));
    };
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-4xl font-bold">
                    Coupon Checkout
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Coupon Details*/}
                    <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold">
                            Coupon Details
                        </h3>
                        <p className="mb-2 text-lg">
                            <strong>Coupon:</strong> {coupon.title}
                        </p>
                        <p className="mb-2 text-lg">
                            <strong>Price:</strong> ${coupon.price}
                        </p>
                        <p className="mb-2 text-lg">
                            <strong>Discount:</strong>{" "}
                            {coupon.discount_type == "fixed"
                                ? "$" + coupon.discount
                                : coupon.discount + "%"}
                        </p>
                        <p className="mb-2 text-lg">
                            <strong>Usage Limit (per phone number):</strong>{" "}
                            {coupon.usage_limit}
                        </p>
                        <p className="mb-2 text-lg">
                            <strong>Description:</strong> {coupon.description}
                        </p>
                    </div>
                    {/*  */}
                    {/* Checkout Form*/}
                    <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold">
                            User Information
                        </h3>
                        <form onSubmit={submit} method="POST">
                            <InputGroup
                                label="Name"
                                name="name"
                                placeholder="Enter your name"
                                formObject={data}
                                setFormObject={setData}
                                validationError={errors}
                            />
                            <InputGroup
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                                formObject={data}
                                setFormObject={setData}
                                validationError={errors}
                            />
                            <InputGroup
                                label="Phone"
                                name="phone"
                                placeholder="Enter your name"
                                formObject={data}
                                setFormObject={setData}
                                validationError={errors}
                            />
                            <InputGroup
                                label="Password"
                                name="password"
                                placeholder="********"
                                formObject={data}
                                setFormObject={setData}
                                validationError={errors}
                            />

                            <h3 className="mb-4 text-2xl font-bold">
                                Payment Details
                            </h3>
                            <div className="mb-4">
                                <label
                                    for="card-number"
                                    className="block text-lg font-medium text-gray-700"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="card-number"
                                    name="card-number"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    for="expiry-date"
                                    className="block text-lg font-medium text-gray-700"
                                >
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    id="expiry-date"
                                    name="expiry-date"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    for="cvc"
                                    className="block text-lg font-medium text-gray-700"
                                >
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <PrimaryButton isLoading={processing}>
                                    Pay Now
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
