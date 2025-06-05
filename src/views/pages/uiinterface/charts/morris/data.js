const barchartjs = {
  morrisbar: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      gridTextSize: 11,
      hideHover: "auto",
      resize: true,
    },
    colors: ["#2E37A4", "#00D3C7"],
    dataLabels: {
      enabled: false,
    },

    axis: {
      y: {
        type: "category",
        // name of each category
        categories: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      },
    },
  },
  series: [
    {
      data: [12, 18, 15, 25, 30, 18, 12],
    },
    {
      data: [18, 22, 18, 28, 35, 28, 18],
    },
  ],
};
const barstacked = {
  morrisbar2: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      stacked: true,
      lineWidth: 1,
      ymax: "auto 50",
      gridTextSize: 11,
      hideHover: "auto",
      resize: true,
    },
    colors: ["#2E37A4", "#00D3C7"],
    dataLabels: {
      enabled: false,
    },

    axis: {
      y: {
        type: "category",
        // name of each category
        categories: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      },
    },
  },
  series: [
    {
      data: [12, 18, 15, 25, 30, 18, 12],
    },
    {
      data: [18, 22, 18, 28, 35, 28, 18],
    },
  ],
};
const linechart = {
  morrisbar3: {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      stacked: true,
      gridTextSize: 11,
      hideHover: "auto",
      resize: true,
    },
    colors: ["#664dc9", "#44c4fa"],
    dataLabels: {
      enabled: true,
    },

    axis: {
      y: {
        type: "category",
        // name of each category
        categories: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      },
    },
  },
  series: [
    {
      data: [12, 18, 15, 25, 30, 18, 12],
    },
    {
      data: [18, 22, 18, 28, 35, 28, 18],
    },
  ],
};
const areachart = {
  morrisbar4: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      lineWidth: 1,
      fillOpacity: 0.9,
      gridTextSize: 11,
      hideHover: "auto",
      resize: true,
      ymax: "auto 100",
    },
    colors: ["#664dc9", "#44c4fa"],
    dataLabels: {
      enabled: false,
    },

    axis: {
      y: {
        type: "category",
        // name of each category
        categories: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      },
    },
  },
  series: [
    {
      data: [10, 25, 80, 25, 30, 18, 12],
    },
    {
      data: [15, 22, 60, 28, 35, 28, 18],
    },
  ],
};
const linechart2 = {
  morrisbar5: {
    chart: {
      id: "vuechart-example",
      type: "donut",
      height: 300,
      stacked: true,
      resize: true,
      expandOnClick: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
  },

  colors: ["#664dc9", "#44c4fa", "#38cb89"],
  series: [50, 30, 20],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
const linechart3 = {
  morrisbar6: {
    chart: {
      id: "vuechart-example",
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#664dc9", "#44c4fa"],
    markers: {
      size: 1,
    },
    dataLabels: {
      enabled: false,
    },
  },
  stroke: {
    curve: "smooth",
  },

  series: [
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export { barchartjs, barstacked, linechart, areachart, linechart2, linechart3 };
