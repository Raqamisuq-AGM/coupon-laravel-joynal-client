import UserGuestLayout from "@/Layouts/user/UserGuestLayout";
import { Link } from "@inertiajs/react";
import React from "react";
export default function Success({ coupon }) {
    return (
        <UserGuestLayout>
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="rounded-lg bg-green-100 p-8 shadow-lg">
                        <svg
                            className="mx-auto mb-4 h-16 w-16 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2l4 -4m2 -6a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"
                            ></path>
                        </svg>
                        <h2 className="mb-4 text-4xl font-bold text-green-600">
                            Purchase Successful!
                        </h2>
                        <p className="mb-4 text-xl">
                            Thank you for your purchase. Your transaction has
                            been completed successfully.
                        </p>
                        <p className="mb-4 text-lg">
                            <strong>Coupon:</strong> {coupon.title}
                        </p>
                        <p className="mb-4 text-lg">
                            <strong>Amount Paid:</strong> ${coupon.price}
                        </p>
                        <Link
                            href="/#coupons"
                            className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-700"
                        >
                            Explore More Coupons
                        </Link>
                        <Link
                            href="/"
                            className="ml-4 rounded-full bg-gray-600 px-6 py-3 text-lg font-semibold text-white hover:bg-gray-700"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </section>
        </UserGuestLayout>
    );
}
