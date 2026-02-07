import React from "react";
import Chart from "react-apexcharts";

const KPIChartCard = ({ title, stat, subtext, chartData, chartColor }) => {
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      sparkline: { enabled: true },
      animations: { enabled: true, easing: "easeinout", speed: 600 },
    },
    stroke: { curve: "smooth", width: 3 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
      },
      colors: [chartColor || "#6366f1"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: { show: false },
      y: { formatter: (val) => val },
    },
  };

  const series = [
    {
      data: chartData,
    },
  ];

  return (
    <div
      className="rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{
        border: "1px dashed rgba(0,0,0,0.1)", // subtle dashed border
        backgroundColor: "var(--header-bg)", // theme-based background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Section */}
      <div className="mb-4">
        <p className="text-xs text-gray-500">{title}</p> {/* small title */}
        <p className="text-2xl font-bold mt-1">{stat}</p> {/* bold stat */}
        <p className="text-[10px] text-gray-400 mt-0.5">{subtext}</p>{" "}
        {/* muted subtext */}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        <Chart
          options={options}
          series={series}
          type="area"
          height={60} // taller chart for better look
        />
      </div>
    </div>
  );
};

export default KPIChartCard;
