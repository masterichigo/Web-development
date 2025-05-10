window.weatherApp.components.createWeatherCard = (city) => {
  return `

  <a href="/cityFocus/?city=${city}" class="column is-1">
    <div class="card has-text-centered">
      <header class="card-header-title is-centered"> 
        <p class="is-capitalized">${city}</p>
        <input type="checkbox" id="fave-${city}" class="checkbox"/>
      </header>
      <div class="card-image">
      ${weatherApp.components.createWeatherCodeIcon(weatherApp.dataStore.data[city+'_daily'].daily.weather_code[0])}
      </div>
      <div class="card-footer">
        <div class="card-footer-item">
          Max ${weatherApp.dataStore.data[city+'_daily'].daily.temperature_2m_max[0]}°C
        </div>
        <div class="card-footer-item">
          Min ${weatherApp.dataStore.data[city+'_daily'].daily.temperature_2m_min[0]}°C
        </div>
      </div>
    </div>
  </a>`
}

