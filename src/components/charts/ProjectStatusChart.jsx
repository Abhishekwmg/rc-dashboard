import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { selectProjects } from "../../store/slices/projectsSlice";

const ProjectStatusChart = () => {
  const projects = useSelector(selectProjects);

  const statusCounts = {
    Upcoming: projects.filter((p) => p.status === "Upcoming").length,
    "In Progress": projects.filter((p) => p.status === "In Progress").length,
    Completed: projects.filter((p) => p.status === "Completed").length,
  };

  const options = {
    chart: { type: "donut" },
    labels: ["Upcoming", "In Progress", "Completed"],
    legend: { position: "bottom" },
    dataLabels: { enabled: false },
  };

  const series = [
    statusCounts.Upcoming,
    statusCounts["In Progress"],
    statusCounts.Completed,
  ];

  return <Chart options={options} series={series} type="donut" height={250} />;
};

export default ProjectStatusChart;
