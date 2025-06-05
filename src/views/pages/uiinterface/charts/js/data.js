const barchartjs = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [24, 10, 32, 24, 26, 20],
            backgroundColor: '#2C35A5'
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    max: 80
                }
            },
            xAxes: {
                barPercentage: 0.6,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11
                }
            }
        }
    }
};
const transparencychartJs = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: "Sales",
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: '#00C1B6'
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    max: 40
                }
            },
            xAxes: {
                barPercentage: 0.6,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11
                }
            }
        }
    }
};
const gradientchartJs = { 
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0,0,0,250);
  
                gradient.addColorStop(0, '#44c4fa');
                gradient.addColorStop(1, '#664dc9');
  
                return gradient;
              },
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    max: 40
                }
            },
            xAxes: {
                barPercentage: 0.6,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11
                }
            }
        }
    }
};
const  horizontalchartJs = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b']
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                }
            },
            xAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
                    max: 80
                }
            }
        }
    }
};
const horizontal2chartJs = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: [ '#664dc9', '#38cb89', '#116e7c', '#ffab00', '#ef4b4b']
        }, {
            data: [22, 30, 25, 30, 20, 40],
            backgroundColor: '#44c4fa'
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
                }
            },
            xAxes: {
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
                    max: 80
                }
            }
        }
    }
};
const verticalchartJs = {
    type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				data: [14, 12, 34, 25, 24, 20],
				backgroundColor: '#ff9b44',
				borderWidth: 1,
				fill: true
			}, {
				data: [14, 12, 34, 25, 24, 20],
				backgroundColor:  'rgb(252, 96, 117)',
				borderWidth: 1,
				fill: true
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true,
						fontSize: 11
					}
				}],
				xAxes: [{
					barPercentage: 0.5,
					stacked: true,
					ticks: {
						fontSize: 11
					}
				}]
			}
		}
};
const horizontal3ChartJs = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: '#664DC9',
            borderWidth: 1,
            fill: true
        }, {
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor:  'rgb(68,196,250)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    max: 80
                }
            }],
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11
                }
            }]
        }
    }
};
const linechartJs = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
            borderColor: '#7A64D0',
            borderWidth: 1,
            fill: false
        }, {
            data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
            borderColor: 'rgb(68,196,250)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    max: 80
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 11
                }
            }]
        }
    }
};
const areachartJs = {
    type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
                    borderColor: '#7A64D0',
                    borderWidth: 1,
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 350, 0, 0);
          
                        gradient.addColorStop(0, 'rgba(102, 77, 201,0)');
                        gradient.addColorStop(1, 'rgba(102, 77, 201,.5)');
          
                        return gradient;
                      },
                }, {
                    data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
                    borderColor: '#44c4fa',
                    borderWidth: 1,
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 280, 0, 0);
          
                        gradient.addColorStop(0, 'rgba(91, 115, 232,0)');
                        gradient.addColorStop(1, 'rgba(91, 115, 232,.5)');
          
                        return gradient;
                      },
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: {
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    },
                    xAxes: {
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }
                }
            }
};
const  donutchartJs = {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            data: [35,20,8,15,24],
            backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b']
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
const piechartJs = {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            data: [35,20,8,15,24],
            backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b']
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}
export {
    barchartjs,
    transparencychartJs,
    gradientchartJs,
    horizontalchartJs,
    horizontal2chartJs,
    verticalchartJs,
    horizontal3ChartJs,
    linechartJs,
    areachartJs,
    donutchartJs,
    piechartJs,
}