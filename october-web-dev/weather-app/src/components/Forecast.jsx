import './Forecast.css'

function Forecast({ forecast }) {
  if (!forecast || !forecast.length) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
  }

  const getWeatherIcon = (condition) => {
    if (!condition) return '🌤️'
    const conditionLower = condition.toLowerCase()
    if (conditionLower.includes('rain')) return '🌧️'
    if (conditionLower.includes('cloud')) return '☁️'
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) return '☀️'
    if (conditionLower.includes('snow')) return '❄️'
    if (conditionLower.includes('storm')) return '⛈️'
    return '🌤️'
  }

  return (
    <div className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {forecast.map((day, index) => {
          const date = day.date || day.dt || day.time
          const temp = day.temp || day.temperature || day.temp_c || day.temp?.day || 'N/A'
          const condition = day.condition || day.weather?.[0]?.main || day.weatherCondition || 'Clear'
          const icon = day.icon || day.weather?.[0]?.icon || ''

          return (
            <div key={index} className="forecast-item">
              <div className="forecast-date">{formatDate(date)}</div>
              <div className="forecast-icon">
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
                <span style={{ display: icon ? 'none' : 'block', fontSize: '2rem' }}>
                  {getWeatherIcon(condition)}
                </span>
              </div>
              <div className="forecast-temp">
                {typeof temp === 'number' ? `${Math.round(temp)}°` : temp}
              </div>
              <div className="forecast-condition">{condition}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast

