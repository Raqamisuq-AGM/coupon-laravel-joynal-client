import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import moment from "moment";
import React from "react";
import { UserViewModal } from "./UserViewModal";

export default function Index({ coupons, overViews }) {
    const columns = [
        {
            header: "Code",
            accessor: "coupon?.code",
        },
        {
            header: "User",
            accessor: "user",
            call: ({ value }) => (
                <div>
                    <p>{value?.name}</p>
                    <p>{value?.phone}</p>
                </div>
            ),
        },
        {
            header: "used",
            accessor: "used",
        },

        {
            header: "Purchased At",
            accessor: "created_at",
            call: ({ value }) => moment(value).format("DD-MM-YYYY"),
        },
        {
            header: "Status",
            accessor: "status",
            call: ({ value }) => {
                if (value) {
                    return <span className="badge badge-success">Active</span>;
                } else {
                    return <span className="badge badge-warning">Expired</span>;
                }
            },
        },
        {
            header: "Action",
            call: ({ original }) => (
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
                                <li className="dropdown-list-item">
                                    <button
                                        type="button"
                                        onClick={() => openUserModal(original)}
                                        className="dropdown-link"
                                    >
                                        <Icon
                                            className="h-6 text-slate-400"
                                            icon="material-symbols:visibility-outline"
                                        />
                                        <span>Claim List</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    const [coupon, setCoupon] = React.useState(false);
    const openUserModal = (coupon) => {
        setCoupon(true);
    };

    return (
        <React.Fragment>
            <AdminLayout>
                <UserViewModal isOpen={coupon} setIsOpen={setCoupon} />
                <Container>
                    <PageHeader />
                    <OverviewGrid items={overViews} />
                    <Filter />
                    <Table tableData={coupons} columns={columns} />
                </Container>
            </AdminLayout>
        </React.Fragment>
    );
}
