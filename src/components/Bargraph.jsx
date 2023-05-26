export const chartData2 = {
  series: [
      {
          data: [0.4, 0.65, 0.76, 0.88, 1.5],
        },
        {
          data: [-0.8, -1.05, -1.06, -1.18, -1.4],
        },
    ],
options: {
  chart: {
    type: "bar",
    height: 440,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ["#9a7ddd", "#64cda4"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "60%",
      distributed: false,
      barWidth: "60px", // Adjust the bar width as per your requirement
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  grid: {
    show: true,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    show: false,
  },
},
};
