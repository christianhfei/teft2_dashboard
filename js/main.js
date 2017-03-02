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
        type: 'horizontalBar',
        options: {
            title: "Average Time per Status of Flag",
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        data: {
            labels: ["Flagged", ["Under Review"], ["Reviewed - ", "No further action required"], ["Reviewed -","Escalated to Incident"]],
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

    var loginsByLocationChart = document.getElementById('loginsByLocation').getContext('2d');
    var loginsByLocationChart = new Chart(loginsByLocationChart, {
        type: 'horizontalBar',
        options: {
            title: "Logins by Location",
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        data: {
            labels: ["Baltimore", ["Annapolis"], ["Rockville"], ["College Park"], 'Laurel', 'Columbia'],
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
                    data: [160, 143, 112, 98, 85, 63],
                }
            ]
        }
    });

    

    
    


});