export const chartData = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 0.2,
    dashArray: 0,
  },
  options: {
    chart: {
      height: 100,
      type: "area",
    },
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0.3,
      // curve: 'smooth',
    },

    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light", // Change the gradient shade (e.g., 'dark', 'light')
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ["#ffffff", "#64cda4"], // Set the gradient colors
        opacityFrom: 0.8, // Change the starting opacity
        opacityTo: 0.3, // Change the ending opacity
        stops: [0, 100],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300, // Adjust the height for smaller screens
          },
        },
      },
    ],
    padding: {
      top: 0, // Set the top padding
      right: 0, // Set the right padding
      bottom: 0, // Set the bottom padding
      left: 0, // Set the left padding
    },
  },
};
