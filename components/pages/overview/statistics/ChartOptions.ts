export const basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.85,
  plugins: {
    legend: {
      labels: {
        color: "#fff",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 13,
        },
        color: "#fff",
      },
      grid: {
        color: "#303030",
      },
    },
    y: {
      grace: "5%",
      min: 0,
      ticks: {
        font: {
          size: 13,
        },
        stepSize: 1,
        color: "#fff",
      },
      grid: {
        color: "#303030",
      },
    },
  },
};
