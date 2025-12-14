// Weather API Service for RapidAPI
// Using weather-api138.p.rapidapi.com


const API_BASE_URL = 'https://weather-api138.p.rapidapi.com'

/**
 * Fetch current weather data for a city
 * @param {string} city - City name
 * @returns {Promise<Object>} Weather data
 */
export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/weather?city_name=${encodeURIComponent(city)}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Weather API error: ${response.status} - ${errorText}`)
    }

    // Try to parse as JSON, fallback to text if needed
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json()
      return data
    } else {
      // If not JSON, try to parse as text and then JSON
      const text = await response.text()
      try {
        return JSON.parse(text)
      } catch {
        throw new Error(`Unexpected response format: ${text.substring(0, 100)}`)
      }
    }
  } catch (error) {
    console.error('Error fetching weather:', error)
    throw error
  }
}

/**
 * Fetch weather forecast for a city
 * Note: This API may not support forecast. Adjust endpoint if available.
 * @param {string} city - City name
 * @param {number} days - Number of days for forecast (default: 5)
 * @returns {Promise<Object>} Forecast data
 */
export const getWeatherForecast = async (city, days = 5) => {
  try {
    // Try forecast endpoint if available, otherwise return null
    const response = await fetch(
      `${API_BASE_URL}/forecast?city_name=${encodeURIComponent(city)}&days=${days}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      }
    )

    if (!response.ok) {
      // Forecast might not be available, return null instead of throwing
      console.warn('Forecast endpoint not available')
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.warn('Forecast not available:', error)
    return null
  }
}

/**
 * Search for cities (if your API supports it)
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching cities
 */
export const searchCities = async (query) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Search API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching cities:', error)
    throw error
  }
}

