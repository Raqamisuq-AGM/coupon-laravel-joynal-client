import { Container } from "@/Components/shared/Container";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import ShopLayout from "@/Layouts/shop/ShopLayout";
import React from "react";
export default function Dashboard({overviews}) {

    return (
        <ShopLayout>
          <Container>
            <PageHeader/>
            <OverviewGrid items={overviews}/>
            <div className="space-y-6">
                <h1>Dashboard</h1>
            </div>
          </Container>
        </ShopLayout>
    );
}
