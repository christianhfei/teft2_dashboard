$(document).ready(function () {
    // Frequency/Flags Chart
    var frequencyOfFlagsChart = document.getElementById('frequencyOfFlagsChart').getContext('2d');
    var frequencyOfFlagsChart = new Chart(frequencyOfFlagsChart, {
        type: 'line',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
            label: 'apples',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.4)"
            }]
        }
    });


});