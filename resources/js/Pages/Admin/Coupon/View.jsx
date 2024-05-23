import { Container } from "@/Components/shared/Container";
import { PageHeader } from "@/Components/shared/PageHeader";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import React from "react";
export default function View({ coupon }) {
    return (
        <AdminLayout>
            <Container>
                <PageHeader />
                <div class="flex">
                    {/* Main Content  */}
                    <div className="flex-1 p-6">
                        <div className="rounded-lg bg-white p-6 shadow-lg">
                            <h2 className="mb-6 text-4xl font-bold">
                                Coupon Details
                            </h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Coupon Code:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        SAVE50
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Description:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        50% off on all items
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Discount Amount:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        $50.00
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Expiration Date:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        2024-12-31
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Created At:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        2024-05-20
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700">
                                        Total Claims:
                                    </label>
                                    <p className="text-lg font-semibold text-gray-900">
                                        25
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex space-x-4">
                                <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                                    Edit Coupon
                                </button>
                                <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
                                    Delete Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </AdminLayout>
    );
}
