import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import sharedComposable from "@/Composables/sharedComposable";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import { Icon } from "@iconify/react";
import moment from "moment";
import React from "react";

export default function Index({ shop, users }) {
    const { deleteRow } = sharedComposable();
    const columns = [
        {
            header: "Name",
            accessor: "name",
        },
        {
            header: "User",
            call: ({ original }) => (
                <div>
                    <p>{original?.name}</p>
                    <p>{original?.phone}</p>
                </div>
            ),
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
                                        onClick={() =>
                                            deleteRow(
                                                route(
                                                    "admin.shops.users.destroy",
                                                    [shop.id, original.id]
                                                )
                                            )
                                        }
                                        className="dropdown-link"
                                    >
                                        <Icon
                                            className="h-6 text-slate-400"
                                            icon="bi:trash-fill"
                                        />
                                        <span>Remove</span>
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
        <React.Fragment>
            <AdminLayout>
                <Container>
                    <PageHeader />
                    <Table tableData={users} columns={columns} />
                </Container>
            </AdminLayout>
        </React.Fragment>
    );
}
