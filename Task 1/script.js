const url = 'https://api.weatherapi.com/v1/current.json';
const apiKey = '5ee1ad62bcf8494a9fd53921242907'; 

function fetchWeather() {
    const city = $('#city-input').val();
    if (city) {
        $.ajax({
            type: 'GET',
            url: url,
            data: {
                key: apiKey,
                q: city
            },
            success: function(data) {
                displayWeather(data);
            },
            error: function() {
                alert('City not found!');
            }
        });
    } else {
        alert('Please enter a city name!');
    }
}

function displayWeather(data) {
    $('#city-name').text(`Location: ${data.location.name}`);
    $('#date').text(moment().format('dddd, MMMM D, YYYY'));
    $('#weather-icon').attr('src', data.current.condition.icon);
    $('#temperature').text(`${data.current.temp_c}°C`);
    $('#description').text(`Condition: ${data.current.condition.text}`);
    $('#wind-speed').text(`${data.current.wind_kph} kph`);
    $('#humidity').text(`${data.current.humidity}%`);
    $('#pressure').text(`${data.current.pressure_mb} mb`);
    $('#visibility').text(`${data.current.vis_km} km`);
    $('#feels-like').text(`${data.current.feelslike_c}°C`);
    $('#dew-point').text(`${data.current.dewpoint_c}°C`);
    $('#weather-info').show();
}

$(document).ready(function() {
    $('#city-input-btn').click(fetchWeather);
});
