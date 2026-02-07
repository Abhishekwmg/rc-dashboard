import LeadFunnelChart from "../charts/LeadFunnelChart";
import ProjectStatusChart from "../charts/ProjectStatusChart";
import TasksLineChart from "../charts/TasksLineChart";

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
      {/* Lead Funnel */}
      <LeadFunnelChart />

      {/* Project Status */}
      <ProjectStatusChart />

      {/* Tasks Over Time */}
      <TasksLineChart />
    </div>
  );
};

export default ChartsSection;
