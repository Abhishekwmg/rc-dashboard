const KPICard = ({ label, value }) => (
  <div
    className="rounded-xl border p-4"
    style={{ borderColor: "var(--border-color)" }}
  >
    <p className="text-sm opacity-70">{label}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const KPISection = ({
  totalLeads,
  totalCustomers,
  activeProjects,
  pendingTasks,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <KPICard label="Total Leads" value={totalLeads} />
      <KPICard label="Customers" value={totalCustomers} />
      <KPICard label="Active Projects" value={activeProjects} />
      <KPICard label="Pending Tasks" value={pendingTasks} />
    </div>
  );
};

export default KPISection;
