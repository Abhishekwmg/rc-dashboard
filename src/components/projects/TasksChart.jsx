import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
);

export const TasksOverTime = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Tasks",
        data: [2, 4, 6, 3, 8],
      },
    ],
  };

  return <Line data={data} />;
};

export const TasksSummary = () => {
  const data = {
    labels: ["Done", "Pending", "In Progress"],
    datasets: [
      {
        data: [12, 5, 3],
      },
    ],
  };

  return <Pie data={data} />;
};
