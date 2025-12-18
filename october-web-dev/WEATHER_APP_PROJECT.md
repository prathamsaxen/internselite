# Weather App Project

## Overview
Build a modern, responsive weather application using React that fetches and displays real-time weather information for any city. This project will help you learn React fundamentals, API integration, component-based architecture, and state management.

## Learning Objectives
- Understand React hooks (useState, useEffect)
- Learn how to integrate third-party APIs
- Practice component composition and props
- Handle loading states and error handling
- Create a responsive UI with CSS

## Project Requirements

### 1. Setup
- Create a new React project using Vite
- Set up the project structure with proper folders
- Install necessary dependencies

### 2. API Integration
- Sign up for a free weather API (e.g., RapidAPI Weather API)
- Create a service file to handle API calls
- Implement functions to fetch:
  - Current weather data for a city
  - Weather forecast (5-day forecast if available)
- Handle API errors gracefully

### 3. Components to Build

#### **SearchBar Component**
- Input field for city name
- Submit button
- Form validation (prevent empty submissions)
- Loading state indicator
- Should call a parent function when a city is searched

#### **WeatherCard Component**
- Display current weather information:
  - City name and country
  - Temperature
  - Weather condition (e.g., "Clear", "Rainy", "Cloudy")
  - Weather description
  - Humidity percentage
  - Wind speed
- Weather icon (use emojis or API-provided icons)
- Responsive card design

#### **Forecast Component** (Optional but Recommended)
- Display 5-day weather forecast
- Show date, temperature, and condition for each day
- Grid or list layout
- Weather icons for each forecast day

#### **App Component (Main)**
- Manage application state:
  - Current weather data
  - Forecast data
  - Loading state
  - Error state
  - Current city
- Handle search functionality
- Display appropriate UI based on state:
  - Welcome message when no search has been made
  - Loading spinner during API calls
  - Error message if API call fails
  - Weather card and forecast when data is available

### 4. Features to Implement

#### Core Features (Required)
- ✅ Search for weather by city name
- ✅ Display current weather information
- ✅ Show loading state while fetching data
- ✅ Display error messages for failed API calls
- ✅ Responsive design (works on mobile and desktop)

#### Bonus Features (Optional)
- 🌟 5-day weather forecast
- 🌟 Auto-detect user location
- 🌟 Save favorite cities
- 🌟 Temperature unit toggle (Celsius/Fahrenheit)
- 🌟 Animated weather icons
- 🌟 Search history
- 🌟 Dark mode toggle

### 5. Styling Requirements
- Create a modern, clean UI
- Use CSS modules or separate CSS files for each component
- Ensure the app is fully responsive
- Add smooth transitions and hover effects
- Use a consistent color scheme
- Make it visually appealing with proper spacing and typography

### 6. File Structure
```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherCard.css
│   │   ├── Forecast.jsx
│   │   └── Forecast.css
│   ├── services/
│   │   └── weatherAPI.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

### 7. Technical Requirements

#### API Service (`weatherAPI.js`)
- Export functions: `getCurrentWeather(city)` and `getWeatherForecast(city, days)`
- Handle API errors with try-catch blocks
- Return properly formatted data
- Include API key configuration (use environment variables)

#### State Management
- Use React hooks appropriately:
  - `useState` for component state
  - `useEffect` for side effects (optional: load default city on mount)

#### Error Handling
- Display user-friendly error messages
- Handle network errors
- Handle invalid city names
- Handle API rate limits (if applicable)

### 8. Testing Checklist
- [ ] Can search for a valid city and see weather data
- [ ] Loading state appears during API calls
- [ ] Error message appears for invalid cities
- [ ] Error message appears for network failures
- [ ] App is responsive on mobile devices
- [ ] All components render correctly
- [ ] No console errors
- [ ] Form validation works (can't submit empty search)

### 9. Submission Guidelines
1. Create a new folder for your project
2. Initialize a Vite React project
3. Build all required components
4. Implement API integration
5. Add styling to make it look professional
6. Test all functionality
7. Ensure code is clean and well-commented

### 10. Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [RapidAPI Weather APIs](https://rapidapi.com/hub)
- [OpenWeatherMap API](https://openweathermap.org/api) (Alternative)

## Tips for Success
1. **Start Simple**: Build the basic search and display functionality first, then add features
2. **Test API First**: Use Postman or browser console to test your API before integrating
3. **Handle Edge Cases**: What happens if the API is down? What if the city doesn't exist?
4. **Mobile First**: Design for mobile first, then enhance for desktop
5. **Read API Documentation**: Understand the response structure before coding
6. **Use Environment Variables**: Never commit API keys to version control

## Example API Response Structure
Your API service should handle different response formats. Common fields include:
- `temperature` or `temp` or `temp_c`
- `condition` or `weather.main`
- `description` or `weather.description`
- `humidity`
- `windSpeed` or `wind.speed`
- `city` or `name`
- `country`

Make your components flexible to handle variations in API responses.

---

**Good luck with your Weather App! 🌤️**

