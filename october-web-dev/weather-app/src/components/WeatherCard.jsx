import './WeatherCard.css'

function WeatherCard({ weather }) {
  if (!weather) return null

  // Extract data with multiple fallback options for different API response formats
  const temperature = weather.temp || weather.temperature || weather.temp_c || weather.temp_f || weather.main?.temp || 'N/A'
  const condition = weather.condition || weather.weatherCondition || weather.weather?.main || weather.weather?.[0]?.main || weather.description || 'Clear'
  const description = weather.description || weather.weather?.description || weather.weather?.[0]?.description || ''
  const humidity = weather.humidity || weather.main?.humidity || 'N/A'
  const windSpeed = weather.windSpeed || weather.wind?.speed || weather.wind_speed || weather.wind_speed_mph || 'N/A'
  const city = weather.city || weather.name || weather.city_name || weather.location?.name || 'Unknown'
  const country = weather.country || weather.location?.country || weather.sys?.country || ''
  const icon = weather.icon || weather.weather?.icon || weather.weather?.[0]?.icon || ''

  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase()
    if (conditionLower.includes('rain')) return '🌧️'
    if (conditionLower.includes('cloud')) return '☁️'
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) return '☀️'
    if (conditionLower.includes('snow')) return '❄️'
    if (conditionLower.includes('storm')) return '⛈️'
    if (conditionLower.includes('mist') || conditionLower.includes('fog')) return '🌫️'
    return '🌤️'
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {city}
          {country && <span className="country">, {country}</span>}
        </h2>
        <div className="weather-icon">
          {icon ? (
            <img 
              src={icon.startsWith('http') ? icon : `https://openweathermap.org/img/wn/${icon}@2x.png`} 
              alt={condition}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
          ) : null}
          <span style={{ display: icon ? 'none' : 'block', fontSize: '4rem' }}>
            {getWeatherIcon(condition)}
          </span>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          {typeof temperature === 'number' ? `${Math.round(temperature)}°` : temperature}
        </div>
        <div className="condition">{condition}</div>
        {description && description !== condition && (
          <div className="description">{description}</div>
        )}
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">
            {typeof windSpeed === 'number' ? `${windSpeed} km/h` : windSpeed}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard

