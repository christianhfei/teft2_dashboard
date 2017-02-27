$(document).ready(function () {

    var setHeight = function(chart) {
        var chartElement = document.getElementById(chart),
            chartPanel = chartElement.parentNode.parentNode.parentNode,
            chartSize = chartPanel.clientHeight + "px";
        console.log(chartSize); 
        chartElement.style.height = chartSize;
    };

    // Frequency/Flags Chart
    var frequencyOfFlagsChart = document.getElementById('frequencyOfFlagsChart').getContext('2d');
    var frequencyOfFlagsChart = new Chart(frequencyOfFlagsChart, {
        type: 'line',
        options: {
            title: 'Frequency of Flags',
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        onResize: setHeight('frequencyOfFlagsChart'),
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
             'September', 'November', 'December'],
            datasets: [{
            label: 'Number of Flags',
            data: [0, 3, 12, 22, 16, 14, 8, 11, 14, 6, 4],
            backgroundColor: "rgba(19,49,117,0.4)"
        }]
        }
    });

    var timeAtEachStatusChart = document.getElementById('timeAtEachStatus').getContext('2d');
    var timeAtEachStatusChart = new Chart(timeAtEachStatusChart, {
        type: 'bar',
        options: {
            title: "Average Time per Status of Flag",
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        data: {
            labels: ["Flagged (days)", ["Under", "Review", "(days)"], ["Reviewed -", "No further", "action required", "(days)"], ["Reviewed -", "Escalated", "to Incident", "(days)"]],
            datasets: [
                {
                    backgroundColor: [
                        'rgba(235, 0, 0, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [3, 4, 1, 1],
                }
            ]
        }
    });

    

    
    


});