const apiKey = '4fdb4b0a059f05329be29cf7cb6ddcde'; // Replace with your actual API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const city = 'Sarasota,Fl';

async function fetchWeather() {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const tempCelsius = data.main.temp;
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        const description = data.weather[0].description;
        document.getElementById('weatherDetails').innerHTML = `
            <p>Temperature in ${city}: ${tempCelsius.toFixed(2)}°C or ${tempFahrenheit.toFixed(2)}°F</p>
            <p>Weather: ${description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherDetails').innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);
