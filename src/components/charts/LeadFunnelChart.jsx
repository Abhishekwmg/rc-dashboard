import { useSelector } from "react-redux";
import KPIChartCard from "../dashboard/KPIChartCard"; // optional for sparkline
import Chart from "react-apexcharts";
import { selectLeads } from "../../store/slices/leadsSlice";

const LeadFunnelChart = () => {
  const leads = useSelector(selectLeads);

  // Compute funnel counts
  const funnelCounts = {
    New: leads.filter((l) => l.status === "New").length,
    Contacted: leads.filter((l) => l.status === "Contacted").length,
    Qualified: leads.filter((l) => l.status === "Qualified").length,
    Customers: leads.filter((l) => l.status === "Customer").length || 0,
  };

  const options = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 6 } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Leads", "Contacted", "Qualified", "Customers"],
    },
  };

  const series = [
    {
      name: "Lead Funnel",
      data: [
        funnelCounts.New,
        funnelCounts.Contacted,
        funnelCounts.Qualified,
        funnelCounts.Customers,
      ],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={250} />;
};

export default LeadFunnelChart;
