const planCharts = {

    series: [95, 5],
    PlanTeach: {
        chart: {
            height: 90,
            type: 'donut',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
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
            'Completed',
            'Pending'

        ],
        legend: { show: false },
        colors: ['#3D5EE1', '#E82646'],
         position: 'bottom',
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 100
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
    }
}

const attendChartsOne = {

    series: [60, 5, 15, 20],

    AttendOne: {
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
export { planCharts,attendChartsOne }