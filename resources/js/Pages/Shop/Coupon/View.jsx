import { Container } from "@/Components/shared/Container";
import { PageHeader } from "@/Components/shared/PageHeader";
import sharedComposable from "@/Composables/sharedComposable";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { Link } from "@inertiajs/react";
import moment from "moment";
import React from "react";
export default function View({ coupon }) {
    const { deleteRow } = sharedComposable();
    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <div class="flex">
                    {/* Main Content  */}
                    <div className="flex-1 p-6">
                        <div className="rounded-lg bg-white p-6 shadow-lg">
                            <h2 className="mb-6 text-4xl font-bold">
                                Coupon Details
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 gap-6 rounded-md p-3 shadow-md md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Coupon Shop:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.shop?.name}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Coupon Code:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.code}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Discount Type:
                                        </label>
                                        <p className="text-lg font-semibold capitalize text-gray-900">
                                            {coupon?.discount_type}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Discount Amount
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.discount}
                                            {coupon?.discount_type ===
                                            "percentage"
                                                ? "%"
                                                : ""}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Valid From:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {moment(coupon?.valid_from).format(
                                                "DD-MM-YYYY"
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Valid To:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {moment(coupon?.valid_to).format(
                                                "DD-MM-YYYY"
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 rounded-md p-3 shadow-md md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Title:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.title}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Short Description:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.short_description}
                                        </p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="mb-2 block text-sm font-bold text-gray-700">
                                            Description:
                                        </label>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {coupon?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex space-x-4">
                                <Link
                                    href={route("shop.coupons.edit", coupon.id)}
                                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                                >
                                    Edit Coupon
                                </Link>
                                <button
                                    onClick={() =>
                                        deleteRow(
                                            route(
                                                "shop.coupons.destroy",
                                                coupon.id
                                            ),
                                            "Coupon has been deleted successfully"
                                        )
                                    }
                                    className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                                >
                                    Delete Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ShopLayout>
    );
}
