import { Container } from "@/Components/shared/Container";
import { Filter } from "@/Components/shared/Filter";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import UserLayout from "@/Layouts/user/UserLayout";
import moment from "moment";
import React from "react";

export default function Index({ coupons, overviews }) {
    const columns = [
        {
            header: "Code",
            accessor: "coupon.code",
        },
        {
            header: "Discount",
            accessor: "coupon.discount",
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
                    return (
                        <span className="badge badge-warning">Inactive</span>
                    );
                }
            },
        },
    ];

    return (
        <UserLayout>
            <Container>
                <PageHeader />
                <OverviewGrid items={overviews} className="xl:grid-cols-3" />
                <Filter />
                <Table tableData={coupons} columns={columns} />
            </Container>
        </UserLayout>
    );
}
