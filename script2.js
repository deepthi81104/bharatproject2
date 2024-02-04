function getWeather() {
    let cityInput = document.getElementById('cityInput');
    let cityName = cityInput.value.trim().toUpperCase(); 
    const apiKey = '3143f04483d94ab190f54655242901';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const { condition, temp_c, humidity, wind_kph } = data.current;

            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p> ${condition.text}</p>
                <p>${temp_c}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${wind_kph} km/h</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
}

/*HERE I HAVE USED WEATHER API WHICH AS A FREE TRIAL ONLY UPTILL 
 12TH FEB AFTER WHICH THE WEATHER API WON'T BE ACCESSIBLE'*/