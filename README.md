# Weather_Api

🌦 Weather API Project Documentation
📁 Project Structure
DAY_30_WETHEAR_API/
│── index.html       # Main HTML structure of the app
│── css/
│   └── style.css    # Styling for the weather app
│── js/
│   └── script.js    # JavaScript for fetching and displaying weather data

📜 File Details
1. index.html

Entry point of the project.

Includes:

A dropdown/input for selecting a city.

A button to fetch weather details.

A section to display weather results.

Links style.css for styling and script.js for functionality.

2. css/style.css

Contains all styling rules.

Used for layout, fonts, colors, and responsive design.

Ensures the weather app looks clean and user-friendly.

3. js/script.js

Handles app logic.

Fetches weather data from an API (like OpenWeatherMap).

Updates HTML elements dynamically to show:

Temperature 🌡

Weather condition ⛅

City name 🏙

Includes error handling (e.g., if no city is selected).

⚙️ How It Works

User selects a city from the dropdown.

Clicks the "Get Weather" button.

script.js sends a request to the Weather API.

Response is processed and displayed in the index.html.

🚀 How to Run

Open the folder in VS Code (as shown in your screenshot).

Open index.html in a browser.

Select a city → Click Get Weather → View results.

📌 Future Improvements

Add search bar instead of only dropdown.

Show 5-day forecast.

Display weather icons dynamically.

Add loader animation while fetching data.
