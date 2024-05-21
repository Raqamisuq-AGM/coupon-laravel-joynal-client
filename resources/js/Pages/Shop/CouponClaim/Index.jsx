import { Container } from "@/Components/shared/Container";
import { PageHeader } from "@/Components/shared/PageHeader";
import Table from "@/Components/shared/Table";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import moment from "moment";
import React from "react";

export default function Index({ coupon_claims }) {
    const columns = [
        {
            header: "Sr. No.",
            accessor: "id",
        },
        {
            header: "Code",
            accessor: "code",
        },

        {
            header: "Claimed At",
            accessor: "claimed_at",
            call: ({ value }) => moment(value).format("DD-MM-YYYY"),
        },
    ];

    return (
        <ShopLayout>
            <Container>
                <PageHeader />
                <Table tableData={coupon_claims} columns={columns} />
            </Container>
        </ShopLayout>
    );
}
