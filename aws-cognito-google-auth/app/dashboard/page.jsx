"use client";
import EnhancedDashboard from "app/components/EnhancedDashboard";
import { withAuth } from "../../hoc/withAuth";

const EnhancedDashboard = withAuth(EnhancedDashboard);

export default function Dashboard() {
    return <main><EnhancedDashboard /></main>;
}