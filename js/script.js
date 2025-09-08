let apiKey = "c7c6c674a9bb145814388826486d0ef6"; // Apna API key

document.getElementById("getWeatherBtn").addEventListener("click", function() {
    let city = document.getElementById("cityDropdown").value;

    if (city === "") {
        alert("Please select a city");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url) 
        .then((res) => res.json())
        .then((data) => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            console.log(data);

            // Show result in HTML
            document.getElementById("weatherResult").innerHTML = `
                <div class="card shadow p-3 mb-3">
                    <h4>${data.name}, ${data.sys.country}</h4>
                    <p>🌡 Temperature: <b>${data.main.temp}°C</b></p>
                    <p>⛅ Weather: <b>${data.weather[0].description}</b></p>
                    <p>💧 Humidity: <b>${data.main.humidity}%</b></p>
                    <p>🌬 Wind Speed: <b>${data.wind.speed} m/s</b></p>
                </div>
            `;
        })
        .catch((error) => {
            console.log("Error:", error.message);
        });
});
