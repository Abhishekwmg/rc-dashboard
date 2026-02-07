import KPISection from "../components/dashboard/KPISection";
import ChartsSection from "../components/dashboard/ChartsSection";
import QuickActions from "../components/dashboard/QuickActions";
import { useSelector } from "react-redux";
import { selectLeads } from "../store/slices/leadsSlice";
import { selectProjects } from "../store/slices/projectsSlice";

const Dashboard = () => {
  const leads = useSelector(selectLeads);
  const projects = useSelector(selectProjects);

  // Revenue calculations
  const totalBudget = projects.reduce((sum, p) => sum + (p.budget || 0), 0);
  const totalReceived = projects.reduce(
    (sum, p) => sum + (p.stats?.received || 0),
    0,
  );

  return (
    <div
      className="p-6 min-h-screen"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <KPISection
        totalLeads={leads.length}
        activeProjects={
          projects.filter((p) => p.status === "In Progress").length
        }
        totalBudget={totalBudget}
        totalReceived={totalReceived}
      />

      <ChartsSection />

      <QuickActions />
    </div>
  );
};

export default Dashboard;
