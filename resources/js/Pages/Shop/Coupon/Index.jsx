import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import sharedComposable from "@/Composables/sharedComposable";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Modal } from "@/Components/shared/Modal";
import CreateModal from "@/Pages/Shop/CouponClaim/CreateModal";

export default function Index({ coupons, overviews }) {
    const { deleteRow } = sharedComposable();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [couponClaim, setCouponClaim] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleClaimClick = (couponClaim) => {
        setCouponClaim(couponClaim);
        openModal();
    };

    useEffect(() => {
        if (!isModalOpen) {
            setCouponClaim(null);
        }
    }, [isModalOpen]);

    const columns = [
        {
            header: "Code",
            accessor: "code",
        },
        {
            header: "Discount",
            accessor: "discount",
        },
        // {
        //     header: "Usage Limit",
        //     accessor: "usage_limit",
        // },
        {
            header: "Valid From",
            accessor: "valid_from",
            call: ({ value }) => moment(value).format("DD-MM-YYYY"),
        },
        {
            header: "Valid Till",
            accessor: "valid_to",
            call: ({ value }) => moment(value).format("DD-MM-YYYY"),
        },
        {
            header: "Purchased",
            accessor: "total_purchased",
        },
        {
            header: "Status",
            accessor: "status",
            call: ({ value }) => {
                if (value) {
                    return <span className="badge badge-success">Active</span>;
                } else {
                    return (
                        <span className="badge badge-warning">Claimed</span>
                    );
                }
            },
        },
        {
            header: "Action",
            call: ({ original }) => (
                <>
                    <div className="flex justify-end">
                        <div className="dropdown" data-placement="bottom-start">
                            <div className="dropdown-toggle">
                                <Icon
                                    className="w-30 text-lg"
                                    icon="bi:three-dots-vertical"
                                />
                            </div>
                            <div className="dropdown-content w-40">
                                <ul className="dropdown-list">
                                    {/* <li className="dropdown-list-item">
                                        <button
                                            onClick={() =>
                                                handleClaimClick(original)
                                            }
                                            className="dropdown-link"
                                        >
                                            <Icon
                                                className="h-6 text-slate-400"
                                                icon="heroicons:rectangle-stack"
                                            />
                                            <span>Claim</span>
                                        </button>
                                    </li> */}

                                    <li className="dropdown-list-item">
                                        <Link
                                            href={route(
                                                "shop.coupon-users",
                                                original.id
                                            )}
                                            className="dropdown-link"
                                        >
                                            <Icon
                                                className="h-6 text-slate-400"
                                                icon="heroicons:users"
                                            />
                                            <span>User</span>
                                        </Link>
                                    </li>
                                    <li className="dropdown-list-item">
                                        <Link
                                            href={route(
                                                "shop.coupons.show",
                                                original.id
                                            )}
                                            className="dropdown-link"
                                        >
                                            <Icon
                                                className="h-6 text-slate-400"
                                                icon="material-symbols:visibility-outline"
                                            />
                                            <span>View</span>
                                        </Link>
                                    </li>
                                    <li className="dropdown-list-item">
                                        <Link
                                            href={route(
                                                "shop.coupons.edit",
                                                original.id
                                            )}
                                            className="dropdown-link"
                                        >
                                            <Icon
                                                className="h-6 text-slate-400"
                                                icon="material-symbols:edit-outline"
                                            />
                                            <span>Edit</span>
                                        </Link>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <button
                                            className="dropdown-link"
                                            onClick={() =>
                                                deleteRow(
                                                    route(
                                                        "shop.coupons.destroy",
                                                        original.id
                                                    ),
                                                    "Coupon has been deleted successfully"
                                                )
                                            }
                                        >
                                            <Icon
                                                className="h-6"
                                                icon="material-symbols:delete-outline"
                                            />
                                            <span>Delete</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <OverviewGrid items={overviews} />
                <Filter />
                <Table tableData={coupons} columns={columns} />
            </Container>

            {couponClaim && (
                <Modal
                    title="Claim Your Coupon"
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                >
                    <CreateModal
                        couponClaim={couponClaim}
                        onSuccess={() => setIsModalOpen(false)}
                    />
                </Modal>
            )}
        </ShopLayout>
    );
}
