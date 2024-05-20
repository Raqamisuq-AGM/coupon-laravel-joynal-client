import UserGuestLayout from "@/Layouts/user/UserGuestLayout";
import { Link } from "@inertiajs/react";
import moment from "moment";
import React from "react";
export default function Dashboard({ coupons }) {
    return (
        <UserGuestLayout>
            {/* Hero Section */}
            <section className="bg-blue-600 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-4 text-5xl font-bold">
                        Discover Amazing Deals with Our Coupons
                    </h1>
                    <p className="mb-8 text-xl">
                        Buy coupons easily and save on your favorite products
                        and services.
                    </p>
                    <a
                        href="#coupons"
                        className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-600 hover:bg-gray-100"
                    >
                        View Coupons
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-gray-200 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <h3 className="mb-4 text-2xl font-bold">
                                Wide Selection
                            </h3>
                            <p>
                                Choose from a variety of coupons across
                                different categories and brands.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <h3 className="mb-4 text-2xl font-bold">
                                Easy to Buy
                            </h3>
                            <p>
                                Purchase coupons with a simple and user-friendly
                                interface.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <h3 className="mb-4 text-2xl font-bold">
                                Secure Payments
                            </h3>
                            <p>
                                Our platform ensures secure and hassle-free
                                transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coupons Section */}
            <section id="coupons" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Available Coupons
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {coupons && coupons.length ? (
                            coupons.map((coupon) => (
                                <div
                                    key={coupon.id}
                                    className="rounded-lg bg-gray-100 p-8 shadow-lg"
                                >
                                    <h3 className="mb-4 text-2xl font-bold">
                                        {coupon.title}
                                    </h3>
                                    <p className="mb-4 text-lg">
                                        {coupon.description} Valid until{" "}
                                        {moment(coupon.valid_to).format(
                                            "DD-MM-YYYY"
                                        )}
                                        .
                                    </p>
                                    {coupon.discount > 0 ? (
                                        <p className="mb-4 text-sm">
                                            Get{" "}
                                            {coupon.discount_type == "fixed"
                                                ? "$" + coupon.discount + " "
                                                : coupon.discount + "% "}
                                            off using this coupon
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                    <p className="mb-4 text-sm">
                                        Phone Number Usage Limit:{" "}
                                        {coupon.usage_limit}
                                    </p>
                                    <p className="mb-4 text-2xl font-bold">
                                        ${coupon.price}
                                    </p>
                                    <Link
                                        href={`/coupons/buy/${coupon.code}`}
                                        className="rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <React.Fragment>
                                {/* Coupon Card 1 */}
                                <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        50% Off on Electronics
                                    </h3>
                                    <p className="mb-4 text-lg">
                                        Get 50% off on select electronics. Valid
                                        until 31st May 2024.
                                    </p>
                                    <p className="mb-4 text-sm">
                                        One phone number can be used: 5
                                    </p>
                                    <p className="mb-4 text-2xl font-bold">
                                        $10.00
                                    </p>
                                    <a
                                        href="#"
                                        className="rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                                {/* Coupon Card 2 */}
                                <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        20% Off on Groceries
                                    </h3>
                                    <p className="mb-4 text-lg">
                                        Save 20% on your grocery shopping. Valid
                                        until 15th June 2024.
                                    </p>
                                    <p className="mb-4 text-2xl font-bold">
                                        $5.00
                                    </p>
                                    <a
                                        href="#"
                                        className="rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                                {/* Coupon Card 3 */}
                                <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        Buy 1 Get 1 Free on Shoes
                                    </h3>
                                    <p className="mb-4 text-lg">
                                        Buy one pair of shoes and get another
                                        free. Valid until 30th June 2024.
                                    </p>
                                    <p className="mb-4 text-2xl font-bold">
                                        $15.00
                                    </p>
                                    <Link
                                        href="#"
                                        className="rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                                {/* Add more coupon cards as needed */}
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-gray-200 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <p className="mb-4 text-lg">
                                "Using CouponMS has made finding discounts super
                                easy. Highly recommend!"
                            </p>
                            <p className="font-bold">- John Doe</p>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <p className="mb-4 text-lg">
                                "I've saved so much money on my regular
                                purchases thanks to CouponMS."
                            </p>
                            <p className="font-bold">- Jane Smith</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="contact" className="bg-blue-600 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4 text-4xl font-bold">
                        Ready to Start Saving?
                    </h2>
                    <p className="mb-8 text-xl">
                        Sign up now and get access to exclusive deals and
                        discounts.
                    </p>
                    <a
                        href="#"
                        className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-600 hover:bg-gray-100"
                    >
                        Sign Up Now
                    </a>
                </div>
            </section>
        </UserGuestLayout>
    );
}
