// import React from "react";
// import { leads, customers, projects, activities } from "../data/dummyData";
import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import { leads, customers, projects, activities } from "../data/dummyData";

const Dashboard = () => {
  return (
    <div
      className="p-6 min-h-screen"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <KPISection
        totalLeads={leads.length}
        totalCustomers={customers.length}
        activeProjects={
          projects.filter((p) => p.status === "In Progress").length
        }
        pendingTasks={activities.length}
      />

      <RecentActivities activities={activities.slice(-5).reverse()} />

      <QuickActions />
    </div>
  );
};

export default Dashboard;
