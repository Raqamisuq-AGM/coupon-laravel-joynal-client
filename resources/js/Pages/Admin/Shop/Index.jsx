import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import sharedComposable from "@/Composables/sharedComposable";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import React from "react";
import { AddShopUser } from "./AddShopUser";

export default function Index({ shops, overviews }) {
    const { deleteRow } = sharedComposable();

    const columns = [
        {
            header: "Image",
            accessor: "image",
            call: ({ value }) => (
                <img src={value} className="h-12 w-20 object-cover" />
            ),
        },
        {
            header: "Name",
            accessor: "name",
        },
        {
            header: "Short Description",
            accessor: "short_description",
        },
        {
            header: "Type",
            accessor: "type",
        },
        {
            header: "Shop Users",
            accessor: "total_users",
            call: ({ value }) => <div className="text-center">{value}</div>,
        },
        {
            header: "Status",
            accessor: "status",
            call: ({ value }) => {
                if (value) {
                    return <span className="badge badge-success">Active</span>;
                } else {
                    return (
                        <span className="badge badge-warning">Inactive</span>
                    );
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
                                        className="dropdown-link"
                                        onClick={() => addUserToShop(original)}
                                    >
                                        <Icon
                                            className="h-6"
                                            icon="material-symbols:add-box-outline"
                                        />
                                        <span>Add User</span>
                                    </button>
                                </li>
                                <li className="dropdown-list-item">
                                    <Link
                                        href={route(
                                            "admin.shops.edit",
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
                                                    "admin.shops.destroy",
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
            ),
        },
    ];

    const [isOpen, setIsOpen] = React.useState(false);
    const [shop, setShop] = React.useState({});
    const addUserToShop = (shop) => {
        setShop(shop);
        setIsOpen(true);
    };

    return (
        <React.Fragment>
            <AddShopUser isOpen={isOpen} setIsOpen={setIsOpen} shop={shop} />
            <AdminLayout>
                <Container>
                    <PageHeader />
                    <OverviewGrid items={overviews} />
                    <Filter />
                    <Table tableData={shops} columns={columns} />
                </Container>
            </AdminLayout>
        </React.Fragment>
    );
}
