// const parentDash = {
//     parent: {
//         chart: {
//             type: 'line',
//             height: 250,
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         },
//         tooltip: {
//             y: {
//                 formatter: function (val) {
//                     return val + "%";
//                 }
//             },
//             shared: true,
//             intersect: false,
//             custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//                 return `<div class="apexcharts-tooltip">${w.globals.labels[dataPointIndex]}<br>Exam Score: <span style="color: #1E90FF;">${series[0][dataPointIndex]}%</span><br>Attendance: <span style="color: #00BFFF;">${series[1][dataPointIndex]}%</span></div>`;
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         grid: {
//             yaxis: {
//                 lines: {
//                     show: true
//                 }
//             },
//         },
//         markers: {
//             size: 5,
//             colors: ['#1E90FF', '#00BFFF'],
//             strokeColors: '#fff',
//             strokeWidth: 2,
//             hover: {
//                 size: 7
//             }
//         },
//         colors: ['#1E90FF', '#00BFFF'], // Color for the lines
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.7,
//                 opacityTo: 0.9,
//                 stops: [0, 90, 100]
//             }
//         },
//         legend: {
//             position: 'top',
//             horizontalAlign: 'left'
//         }
//     },
//     series: [{
//         name: 'Avg. Exam Score',
//         data: [0, 32, 40, 50, 60, 52, 50, 44, 40, 60, 75, 70] // Sample data
//     }, {
//         name: 'Avg. Attendance',
//         data: [0, 35, 43, 34, 30, 28, 25, 50, 60, 75, 77, 80] // Sample data
//     }],
// };

const statisticChart = {
  chart: {
    type: "line",
    height: 345,
    xaxis: {
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
      shared: true,
      intersect: false,
      custom: function ({ series, dataPointIndex, w }) {
        return `<div class="apexcharts-tooltip">${w.globals.labels[dataPointIndex]}<br>Exam Score: <span style="color: #1E90FF;">${series[0][dataPointIndex]}%</span><br>Attendance: <span style="color: #00BFFF;">${series[1][dataPointIndex]}%</span></div>`;
    },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        left: -8,
      },
    },
    yaxis: {
      labels: {
        offsetX: -15,
      },
    },
    markers: {
      size: 0,
      colors: ["#1E90FF", "#00BFFF"],
      strokeColors: "#fff",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8"], // Color for the lines
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  },
  series: [
    {
      name: "Avg. Exam Score",
      data: [0, 32, 40, 50, 60, 52, 50, 44, 40, 60, 75, 70], // Sample data
    },
    {
      name: "Avg. Attendance",
      data: [0, 35, 43, 34, 30, 28, 25, 50, 60, 75, 77, 80], // Sample data
    },
  ]
};

const attendanceChart = {
  attendance: {
    chart: {
      height: 290,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Present", "Late", "Half Day", "Absent"],
    colors: ["#1ABE17", "#1170E4", "#E9EDF4", "#E82646"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "left",
          },
        },
      },
    ],
    legend: {
      position: "left",
    },
  },
  series: [60, 5, 15, 20],
};
export { statisticChart, attendanceChart };
