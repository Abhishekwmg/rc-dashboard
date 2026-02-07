import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dashboardStats } from "../../data/dummyData";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectStatusChart = () => {
  const root = document.documentElement;
  const textColor = getComputedStyle(root).getPropertyValue("--text-color");

  const data = {
    labels: ["Upcoming", "In Progress", "Completed"],
    datasets: [
      {
        data: [
          dashboardStats.projectStatus.upcoming,
          dashboardStats.projectStatus.inProgress,
          dashboardStats.projectStatus.completed,
        ],
        backgroundColor: ["#f59e0b", "#6366f1", "#22c55e"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: textColor },
      },
    },
  };

  return (
    <div
      className="p-4 rounded-xl border"
      style={{ borderColor: "var(--border-color)" }}
    >
      <h3 className="text-lg font-semibold mb-3">Project Status</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProjectStatusChart;
