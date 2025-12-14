import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import { getCurrentWeather, getWeatherForecast } from './services/weatherAPI'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentCity, setCurrentCity] = useState('')

  // Load default city on mount (optional)
  useEffect(() => {
    // You can set a default city here
    // handleSearch('London')
  }, [])

  const handleSearch = async (city) => {
    setLoading(true)
    setError(null)
    setCurrentCity(city)

    try {
      // Fetch current weather
      const currentWeatherData = await getCurrentWeather(city)
      console.log('Weather API Response:', currentWeatherData) // Debug: Log API response
      setWeather(currentWeatherData)

      // Fetch forecast (if available)
      const forecastData = await getWeatherForecast(city, 5)
      if (forecastData) {
        console.log('Forecast API Response:', forecastData) // Debug: Log forecast response
        setForecast(forecastData.forecast || forecastData.list || forecastData)
      } else {
        setForecast(null)
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data. Please check your API configuration.')
      setWeather(null)
      setForecast(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
          <p>Get real-time weather information for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {error && (
          <div className="error-message">
            <span>⚠️</span>
            <p>{error}</p>
            <small>
              Make sure you've configured your RapidAPI key in the .env file
            </small>
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {!loading && weather && (
          <>
            <WeatherCard weather={weather} />
            <Forecast forecast={forecast} />
          </>
        )}

        {!loading && !weather && !error && (
          <div className="welcome-message">
            <h2>Welcome to Weather App!</h2>
            <p>Enter a city name above to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

