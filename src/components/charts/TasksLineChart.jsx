import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { dashboardStats } from "../../data/dummyData";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
);

const TasksLineChart = () => {
  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color",
  );

  const labels = dashboardStats.tasksOverTime.map((d) => d.month);

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks Created",
        data: dashboardStats.tasksOverTime.map((d) => d.created),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.4,
      },
      {
        label: "Tasks Completed",
        data: dashboardStats.tasksOverTime.map((d) => d.done),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: textColor },
        grid: { color: "var(--border-color)" },
      },
      y: {
        ticks: { color: textColor },
        grid: { color: "var(--border-color)" },
      },
    },
  };

  return (
    <div
      className="p-4 rounded-xl border col-span-2"
      style={{ borderColor: "var(--border-color)" }}
    >
      <h2 className="text-lg font-semibold mb-3">Tasks Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TasksLineChart;
