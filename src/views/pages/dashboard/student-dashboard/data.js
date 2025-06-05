const attendCharts = {

    series: [60, 5, 15, 20],

    Attend: {
        chart: {
            height: 255,
            type: 'donut',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            },
        },
        dataLabels: {
            enabled: false
        },
        labels: [
            'Present',
            'Late',
            'Half Day',
            'Absent'
        ],
        colors: ['#1ABE17', '#1170E4', '#E9EDF4', '#E82646'],
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
        }],
        legend: {
            position: 'bottom',
        },
    }
}

const performanceChart = {

    series: [{
        name: 'Avg. Exam Score',
        data: [75, 68, 65, 68, 75] // Sample data
    }, {
        name: 'Avg. Attendance',
        data: [85, 78, 75, 78, 85] // Sample data
    }],
    Performance: {
        chart: {
            type: 'area',
            height: 355
        },
        xaxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Half yearly', 'Model', 'Final Exam']
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%";
                }
            },
            shared: true,
            intersect: false,
            custom: function ({ series, dataPointIndex, w }) {
                return `<div class="apexcharts-tooltip">${w.globals.labels[dataPointIndex]}<br>Exam Score: <span style="color: #1E90FF;">${series[0][dataPointIndex]}%</span><br>Attendance: <span style="color: #00BFFF;">${series[1][dataPointIndex]}%</span></div>`;
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            yaxis: {
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },

            },
        },
        markers: {
            size: 5,
            colors: ['#1E90FF', '#00BFFF'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        colors: ['#3D5EE1', '#6FCCD8'], // Color for the lines
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        }
    }
}

var examResultCharts = {
    series: [{
        name: 'Marks',
        data: [100, 92, 90, 82, 90] // Corresponding scores for Maths, Physics, Chemistry, English, Spanish
      }],
    ExamResult : {
        chart: {
      type: 'bar',
      height: 310
    },
   
    xaxis: {
      categories: ['Mat', 'Phy', 'Che', 'Eng', 'Sci']
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '50%',
        colors: {
          backgroundBarColors: ['#E9EDF4', '#fff'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
        dataLabels: {
          position: 'top'
        },
      }
    },
    colors: ['#E9EDF4', '#3D5EE1', '#E9EDF4', '#E9EDF4', '#E9EDF4'], // Set specific colors for each bar
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '14px',
        colors: ["#304758"]
      }
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    
    legend: {
      show: false
    }
    }
  }

export { attendCharts, performanceChart,examResultCharts }