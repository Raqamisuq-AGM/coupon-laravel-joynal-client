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

export default function Index({ users, overviews }) {
    const { deleteRow } = sharedComposable();

    const columns = [
        {
            header: "ID",
            accessor: "id",
        },
        {
            header: "Name",
            accessor: "name",
        },
        {
            header: "Phone",
            accessor: "phone",
        },
        {
            header: "Email",
            accessor: "email",
        },
        {
            header: "Role",
            call: ({ original }) => {
                let role = original.roles;

                return <>{role[0]?.name}</>;
            }
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
                                    <Link
                                        href={route(
                                            "admin.users.edit",
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
                                                    "admin.users.destroy",
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

    return (
        <AdminLayout>
            <Container>
                <PageHeader />
                <OverviewGrid items={overviews} cla />
                <Filter />
                <Table tableData={users} columns={columns} />
            </Container>
        </AdminLayout>
    );
}
