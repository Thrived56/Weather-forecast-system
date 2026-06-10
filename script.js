const apiKey = "73815c0b4adb21c5b5f5a618981e0da4";

function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod != 200) {
                document.getElementById("weatherResult").innerHTML =
                    "<h3>City Not Found</h3>";
                return;
            }

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>

                <img 
                src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg"
                class="weather-icon">

                <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>

                <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>

                <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>

                <p><strong>☁ Weather:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML =
                "<h3>Error Fetching Weather Data</h3>";
        });
}