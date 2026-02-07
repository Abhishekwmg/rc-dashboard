import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { dashboardStats } from "../../data/dummyData";

// Register Chart.js components (REQUIRED)
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const LeadFunnelChart = () => {
//   const data = {
//     labels: ["Leads", "Contacted", "Qualified", "Customers"],
//     datasets: [
//       {
//         label: "Lead Funnel",
//         data: [
//           dashboardStats.leadFunnel.leads,
//           dashboardStats.leadFunnel.contacted,
//           dashboardStats.leadFunnel.qualified,
//           dashboardStats.leadFunnel.customers,
//         ],
//         backgroundColor: "#6366f1",
//         borderRadius: 6,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//   };

//   return (
//     <div
//       className="p-4 rounded-xl border"
//       style={{ borderColor: "var(--border-color)" }}
//     >
//       <h3 className="text-lg font-semibold mb-3">Lead Funnel</h3>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

const LeadFunnelChart = () => {
  const root = document.documentElement;
  const textColor = getComputedStyle(root).getPropertyValue("--text-color");
  const borderColor = getComputedStyle(root).getPropertyValue("--border-color");

  const data = {
    labels: ["Leads", "Contacted", "Qualified", "Customers"],
    datasets: [
      {
        label: "Lead Funnel",
        data: [
          dashboardStats.leadFunnel.leads,
          dashboardStats.leadFunnel.contacted,
          dashboardStats.leadFunnel.qualified,
          dashboardStats.leadFunnel.customers,
        ],
        backgroundColor: "#6366f1",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: textColor },
        grid: { color: borderColor },
      },
      y: {
        ticks: { color: textColor },
        grid: { color: borderColor },
      },
    },
  };

  return (
    <div
      className="p-4 rounded-xl border"
      style={{ borderColor: "var(--border-color)" }}
    >
      <h3 className="text-lg font-semibold mb-3">Lead Funnel</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeadFunnelChart;
