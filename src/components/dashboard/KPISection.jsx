import { useSelector } from "react-redux";
import KPIChartCard from "./KPIChartCard";
import { selectLeads } from "../../store/slices/leadsSlice";
import { selectProjects } from "../../store/slices/projectsSlice";

const KPISection = () => {
  const leads = useSelector(selectLeads);
  const projects = useSelector(selectProjects);

  // Helper: generate last 7 days counts (simple example)
  const getLast7DaysCounts = (items, key = "date") => {
    const today = new Date();
    const counts = Array(7).fill(0);

    items.forEach((item) => {
      const itemDate = new Date(item[key]);
      const diff = Math.floor((today - itemDate) / (1000 * 60 * 60 * 24));
      if (diff >= 0 && diff < 7) counts[6 - diff] += 1; // reverse order
    });

    return counts;
  };

  const leadsData = getLast7DaysCounts(leads);
  const projectsData = getLast7DaysCounts(
    projects.map((p) => ({ ...p, date: p.due || new Date() })),
  );

  // Stats
  const totalLeads = leads.length;
  const activeProjects = projects.filter(
    (p) => p.status === "In Progress",
  ).length;
  const totalBudget = projects.reduce((sum, p) => sum + (p.budget || 0), 0);
  const totalReceived = projects.reduce(
    (sum, p) => sum + (p.stats?.received || 0),
    0,
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <KPIChartCard
        title="Total Leads"
        stat={totalLeads}
        subtext="Last 7 days"
        chartData={leadsData}
        chartColor="#4ade80"
      />
      <KPIChartCard
        title="Active Projects"
        stat={activeProjects}
        subtext="Last 7 days"
        chartData={projectsData}
        chartColor="#facc15"
      />
      <KPIChartCard
        title="Total Budget"
        stat={`$${totalBudget.toLocaleString()}`}
        subtext="Last 7 days"
        chartData={projectsData} // reuse projects activity as placeholder
        chartColor="#6366f1"
      />
      <KPIChartCard
        title="Payment Received"
        stat={`$${totalReceived.toLocaleString()}`}
        subtext="Last 7 days"
        chartData={projectsData} // reuse projects activity as placeholder
        chartColor="#f87171"
      />
    </div>
  );
};

export default KPISection;
