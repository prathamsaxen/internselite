# Weather App 🌤️

A modern React weather application that integrates with RapidAPI to fetch real-time weather data and forecasts.

## Features

- 🔍 Search weather by city name
- 🌡️ Current weather display with temperature, condition, humidity, and wind speed
- 📅 5-day weather forecast
- 📱 Responsive design for all devices
- ⚡ Fast and lightweight with Vite
- 🎨 Beautiful gradient UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure RapidAPI

1. Sign up for a RapidAPI account at [https://rapidapi.com](https://rapidapi.com)
2. Subscribe to a weather API (popular options):
   - OpenWeatherMap API
   - WeatherAPI.com
   - AccuWeather API
   - Any other weather API available on RapidAPI

3. Get your API credentials:
   - **RapidAPI Key**: Found in your RapidAPI dashboard
   - **RapidAPI Host**: The host name from your API subscription (e.g., `open-weather13.p.rapidapi.com`)

### 3. Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your RapidAPI credentials:
   ```env
   VITE_RAPIDAPI_KEY=your_actual_rapidapi_key
   VITE_RAPIDAPI_HOST=your_actual_rapidapi_host
   ```

### 4. Configure the API Service

Open `src/services/weatherAPI.js` and update:

1. **API_BASE_URL**: Replace with your actual API endpoint URL
2. **API Endpoints**: Adjust the endpoint paths based on your API's documentation:
   - Current weather endpoint
   - Forecast endpoint
   - Search endpoint (if available)

### 5. Adjust API Response Mapping

The components are designed to work with common weather API response formats. You may need to adjust the data mapping in:

- `src/components/WeatherCard.jsx` - Maps weather data to display
- `src/components/Forecast.jsx` - Maps forecast data to display

Check your API's response structure and update the property names accordingly.

## Running the App

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## API Integration Examples

### Example 1: OpenWeatherMap on RapidAPI

```javascript
// In weatherAPI.js
const API_BASE_URL = 'https://open-weather13.p.rapidapi.com'

// Current weather
const response = await fetch(
  `${API_BASE_URL}/city/${city}`,
  {
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    },
  }
)
```

### Example 2: WeatherAPI.com on RapidAPI

```javascript
// In weatherAPI.js
const API_BASE_URL = 'https://weatherapi-com.p.rapidapi.com'

// Current weather
const response = await fetch(
  `${API_BASE_URL}/current.json?q=${city}`,
  {
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }
)
```

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # City search input
│   │   ├── WeatherCard.jsx     # Current weather display
│   │   └── Forecast.jsx        # 5-day forecast
│   ├── services/
│   │   └── weatherAPI.js       # API integration
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .env.example                # Environment variables template
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- **Colors**: Update gradient colors in `App.css` and component CSS files
- **API Endpoints**: Modify `src/services/weatherAPI.js` to match your API
- **Data Mapping**: Adjust property names in components to match your API response
- **Styling**: All components have their own CSS files for easy customization

## Troubleshooting

1. **API Errors**: Check that your RapidAPI key and host are correct in `.env`
2. **CORS Issues**: RapidAPI handles CORS, but ensure you're using the correct headers
3. **Data Not Displaying**: Check the browser console and verify your API response structure matches the component expectations
4. **Build Errors**: Make sure all environment variables are set before building

## License

MIT

