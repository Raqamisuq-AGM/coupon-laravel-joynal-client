import { Container } from "@/Components/shared/Container";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import UserLayout from "@/Layouts/user/UserLayout";
import React from "react";
export default function Dashboard({overviews}) {

    return (
        <UserLayout>
          <Container>
            <PageHeader/>
            <OverviewGrid items={overviews}/>
            <div className="space-y-6">
                <h1>Dashboard</h1>
            </div>
          </Container>
        </UserLayout>
    );
}
