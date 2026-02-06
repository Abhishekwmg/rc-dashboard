// import React from "react";
// import { leads, customers, projects, activities } from "../data/dummyData";
import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import AddLeadModal from "../components/dashboard/AddLeadModal";
import {
  leads as initialLeads,
  customers,
  projects,
  activities,
} from "../data/dummyData";
import { useState } from "react";

const Dashboard = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [openAddLead, setOpenAddLead] = useState(false);

  const handleAddLead = (lead) => {
    setLeads((prev) => [...prev, { id: Date.now(), ...lead }]);
  };

  return (
    <div
      className="p-6 min-h-screen"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CRM Dashboard</h1>
        <button
          onClick={() => setOpenAddLead(true)}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          + Add Lead
        </button>
      </div>

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

      <AddLeadModal
        open={openAddLead}
        onClose={() => setOpenAddLead(false)}
        onAdd={handleAddLead}
      />
    </div>
  );
};

export default Dashboard;
