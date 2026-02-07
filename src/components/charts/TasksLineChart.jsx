import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { selectProjects } from "../../store/slices/projectsSlice";

const TasksLineChart = () => {
  const projects = useSelector(selectProjects);

  // Example: aggregate tasks per month (dummy logic)
  // Here you can adapt based on your project.tasks array if exists
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const tasksCreated = months.map((_, i) => 10 + i * 5); // placeholder
  const tasksCompleted = months.map((_, i) => 5 + i * 4); // placeholder

  const options = {
    chart: { type: "area", toolbar: { show: false } },
    stroke: { curve: "smooth" },
    xaxis: { categories: months },
    tooltip: { x: { show: true } },
  };

  const series = [
    { name: "Tasks Created", data: tasksCreated },
    { name: "Tasks Completed", data: tasksCompleted },
  ];

  return <Chart options={options} series={series} type="area" height={250} />;
};

export default TasksLineChart;
