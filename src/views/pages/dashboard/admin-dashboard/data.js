const studentChart = {
  sline: {
    chart: {
      height: 260,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    labels: ["Present", "Absent"],
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 180,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [3610, 44],
};

const teacherChart = {
  sline: {
    chart: {
      height: 260,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    labels: ["Present", "Absent"],
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 180,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [346, 54],
};

const classChart = {

  series: [45, 11, 2],
  CloseCharts: {
    chart: {
      height: 130,
      type: 'donut',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#3D5EE1', '#EAB300', '#E82646'],

    labels: ['Good', 'Average', 'Below Average'],
    legend: { show: false },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        offsetX: -15,
      },
    },
    grid: {
      padding: {
        left: -8,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
}

const staffChart = {
  sline: {
    chart: {
      height: 260,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    labels: ["Present", "Absent"],
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 180,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [620, 80],
};

const feesCharts = {
  series: [{
    name: 'Collected Fee',
    data: [30, 40, 38, 40, 38, 30, 35, 38, 40]
  }, {
    name: 'Total Fee',
    data: [45, 50, 48, 50, 48, 40, 40, 50, 55]
  }],
  AdminFees: {
    chart: {
      height: 275,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    legend: {
      show: true,
      horizontalAlign: 'left',
      position: 'top',
      fontSize: '14px',
      labels: {
        colors: '#5D6369',
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    colors: ['#3D5EE1', '#E9EDF4'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    grid: {
      padding: {
        left: -8,
      },
    },

    xaxis: {
      categories: ['Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023', 'uQ1: 2023l', 'Q1: 2023', 'Q1: 2023', 'Q1: 2023'],
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        offsetX: -15
      },
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
}

const expensesCharts = {
  Total: {
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#E82646'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
  },
  series: [{
    name: 'Earnings',
    data: [40, 20, 60, 55, 50, 55, 40]
  }]
}

const earningCharts = {
  TotalCharts: {
    chart: {
      height: 90,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#3D5EE1'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
  },
  series: [{
    name: 'Earnings',
    data: [50, 60, 40, 50, 45, 55, 50]
  }]
}

export { studentChart, teacherChart, staffChart, classChart, feesCharts, expensesCharts, earningCharts };
