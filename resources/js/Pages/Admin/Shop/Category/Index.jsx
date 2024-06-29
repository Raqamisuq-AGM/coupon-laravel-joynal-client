import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import sharedComposable from "@/Composables/sharedComposable";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ categories }) {
    const { deleteRow } = sharedComposable();

    const columns = [
        {
            header: "Name",
            accessor: "category",
        },
        {
            header: "Icon",
            call: ({ original }) => {
                return <img src={original.img} className="h-12 w-20 object-cover"></img>;
            }
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
                                            "admin.category.edit",
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
                                                    "admin.category.destroy",
                                                    original.id
                                                ),
                                                "Social Link has been deleted successfully"
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
                {/* <Filter /> */}
                <Table tableData={categories} columns={columns} />
            </Container>
        </AdminLayout>
    );
}
