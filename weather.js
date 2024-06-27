const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const lat = '27.3364'; // Latitude for Sarasota
const lon = '-82.5307'; // Longitude for Sarasota

async function fetchWeather() {
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const tempCelsius = data.current.temp;
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        const feelsLikeCelsius = data.current.feels_like;
        const feelsLikeFahrenheit = (feelsLikeCelsius * 9/5) + 32;
        const windSpeed = data.current.wind_speed;
        const humidity = data.current.humidity;
        const description = data.current.weather[0].description;
        const sunriseTime = new Date(data.current.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.current.sunset * 1000).toLocaleTimeString();

        document.getElementById('weatherDetails').innerHTML = `
            <p>Temperature in Sarasota: ${tempCelsius.toFixed(2)}°C or ${tempFahrenheit.toFixed(2)}°F</p>
            <p>Feels like: ${feelsLikeCelsius.toFixed(2)}°C or ${feelsLikeFahrenheit.toFixed(2)}°F</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
            <p>Weather: ${description}</p>
            <p>Sunrise: ${sunriseTime}</p>
            <p>Sunset: ${sunsetTime}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherDetails').innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);
