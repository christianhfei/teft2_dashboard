$(document).ready(function () {
    // Frequency/Flags Chart
    var frequencyOfFlagsChart = document.getElementById('frequencyOfFlagsChart').getContext('2d');
    var frequencyOfFlagsChart = new Chart(frequencyOfFlagsChart, {
        type: 'line',
        options: {
            title: 'Frequency of Flags',
        },
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
             'September', 'November', 'December'],
            datasets: [{
            label: 'Number of Flags',
            data: [0, 3, 12, 22, 16, 14, 8, 11, 14, 6, 4],
            backgroundColor: "rgba(235,0,0,0.4)"
        }]
        }
    });


});