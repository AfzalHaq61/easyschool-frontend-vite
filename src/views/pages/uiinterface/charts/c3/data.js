const barc3Chart = {
  barc3: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#2E37A4", "#00D3C7"],
    dataLabels: {
      enabled: false,
    },

    axis: {
      x: {
        type: "category",
        // name of each category
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    padding: {
      bottom: 0,
      top: 0,
    },
    bar: {
      width: 16,
    },
    legend: {
      show: false, //hide legend
    },
  },
  series: [
    {
      data: [11, 8, 15, 18, 19, 17, 20, 25, 32, 20, 14, 20],
    },
    {
      data: [7, 7, 5, 7, 9, 12, 4, 6, 2, 5, 2, 8],
    },
  ],
};
const multic3Chart = {
  multibarc3: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#2E37A4", "#00D3C7"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    bar: {
      width: 16,
    },
    legend: {
      show: false, //hide legend
    },
    padding: {
      bottom: 0,
      top: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      type: "category",
    },
  },
  series: [
    {
      data: [11, 8, 15, 18, 19, 17],
    },
    {
      data: [7, 7, 5, 7, 9, 12],
    },
  ],
};
const horizontalc3Chart = {
  horizontalbarc3: {
    chart: {
      type: "area",
      height: 350,
    },
    colors: ["#2E37A4", "#00D3C7"],
    plotOptions: {
      bar: {
        horizontal: true,
        width: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    axis: {
      x: {
        type: "category",
        // name of each category
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      rotated: true,
    },

    legend: {
      show: false, //hide legend
    },
    padding: {
      bottom: 0,
      top: 0,
    },
  },
  series: [
    {
      data: [11, 8, 15, 18, 19, 17],
    },
    {
      data: [7, 7, 5, 7, 9, 12],
    },
  ],
};
const linec3Chart = {
  linebarc3: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#664dc9"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 1,
      colors: ["#fff"],
      strokeColors: ["#664dc9"],
      strokeWidth: 3,
      hover: {
        size: 7,
      },
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    yaxis: {
      min: 0,
      max: 40,
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
    xaxis: {
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
  },
  series: [
    {
      name: "Maximum",
      data: [0, 9, 16, 19, 30, 25, 19, 12, 0],
    },
  ],
};
const line2c3Chart = {
  line2barc3: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#664dc9", "#44c4fa"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    yaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
    xaxis: {
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
  },
  series: [
    {
      name: "Maximum",
      data: [12, 7, 8, 6, 8, 9, 12],
    },
    {
      name: "Minimum",
      data: [8, 10, 10, 9, 7, 10, 8],
    },
  ],
};
const line3c3Chart = {
  line3barc3: {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#44c4fa", "#664dc9"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderWidth: 0,
      labelMargin: 5,
    },
    markers: {
      size: 2,
      colors: ["#fff"],
      strokeColors: ["#44c4fa", "#664dc9"],
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 30,
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      color: "rgba(67, 87, 133, .09)",
      font: {
        size: 10,
        color: "#8e9cad",
      },
    },
  },
  series: [
    {
      data: [22, 19, 26, 29, 30, 28],
    },
    {
      data: [8, 8, 6, 8, 10, 13],
    },
  ],
};
const piec3Chart = {
  piec3: {
    chart: {
      height: 350,
      type: "pie",
    },
    colors: ["#664dc9", "#44c4fa", "#2dce89", "#ff5b51"],

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
  series: [63, 44, 12, 14],
};
const donutc3Chart = {
  donutc3: {
    chart: {
      height: 350,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: ["#664dc9", "#44c4fa", "#2dce89"],
  },
  series: [58, 65, 35],
};
export {
  barc3Chart,
  multic3Chart,
  horizontalc3Chart,
  linec3Chart,
  line2c3Chart,
  line3c3Chart,
  piec3Chart,
  donutc3Chart,
};
