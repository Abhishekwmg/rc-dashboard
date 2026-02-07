import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import {
  leads,
  customers,
  projects,
  activities,
  vendors,
} from "../data/dummyData";

const Dashboard = () => {
  // Revenue calculations
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalReceived = projects.reduce((sum, p) => sum + p.stats.received, 0);
  const totalPending = projects.reduce((sum, p) => sum + p.stats.pending, 0);

  const activeVendors = vendors.filter((v) => v.status === "Active").length;

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
        totalBudget={totalBudget}
        totalReceived={totalReceived}
        activeVendors={activeVendors}
      />

      <ChartsSection />

      <RecentActivities activities={activities.slice(-5).reverse()} />

      <QuickActions />
    </div>
  );
};

export default Dashboard;
