"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Bank",
        data: [1250, 3654, 5895],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <div>
      <Doughnut data={data} 
      options={{
        cutout:'60%',
        plugins:{
          legend:{
            display:false
          }
        }
      }}/>
    </div>
  );
};

export default DoughnutChart;
