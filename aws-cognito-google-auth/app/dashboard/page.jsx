"use client";
import { withAuth } from "../../hoc/withAuth";
import EnhancedDashboard from "../../components/EnhancedDashboard";

const ProtectedEnhancedDashboard = withAuth(EnhancedDashboard);

export default function Dashboard() {
    return <main><ProtectedEnhancedDashboard /></main>;
}