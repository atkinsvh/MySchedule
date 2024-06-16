const apiKey = 'a0c669945cefe2dd4a3503600956917e';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const city = 'Sarasota';

function kelvinToCelsiusFahrenheit(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = celsius * (9 / 5) + 32;
    return { celsius, fahrenheit };
}

async function fetchWeather() {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const tempKelvin = data.main.temp;
        const feelsLikeKelvin = data.main.feels_like;
        const { celsius: tempCelsius, fahrenheit: tempFahrenheit } = kelvinToCelsiusFahrenheit(tempKelvin);
        const { celsius: feelsLikeCelsius, fahrenheit: feelsLikeFahrenheit } = kelvinToCelsiusFahrenheit(feelsLikeKelvin);
        const windSpeed = data.wind.speed;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const sunriseTime = new Date((data.sys.sunrise + data.timezone) * 1000).toLocaleTimeString();
        const sunsetTime = new Date((data.sys.sunset + data.timezone) * 1000).toLocaleTimeString();

        document.getElementById('weatherDetails').innerHTML = `
            <p>Temperature in ${city}: ${tempCelsius.toFixed(2)}°C or ${tempFahrenheit.toFixed(2)}°F</p>
            <p>Temperature in ${city} feels like: ${feelsLikeCelsius.toFixed(2)}°C or ${feelsLikeFahrenheit.toFixed(2)}°F</p>
            <p>Humidity in ${city}: ${humidity}%</p>
            <p>Wind Speed in ${city}: ${windSpeed} m/s</p>
            <p>General Weather in ${city}: ${description}</p>
            <p>Sun rises in ${city} at ${sunriseTime} local time</p>
            <p>Sun sets in ${city} at ${sunsetTime} local time</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherDetails').innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);
