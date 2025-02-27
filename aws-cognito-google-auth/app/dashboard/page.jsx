"use client";
import EnhancedDashboard from "app/components/EnhancedDashboard";
import { withAuth } from "../../hoc/withAuth";

const ProtectedEnhancedDashboard = withAuth(EnhancedDashboard);

export default function Dashboard() {
    return <main><ProtectedEnhancedDashboard /></main>;
}