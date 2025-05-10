window.weatherApp.components.createDailyCards = (city, day, index) => {
    return `
      <div class="column is-1">
    <div class="card has-text-centered">
      <div class="card-header-title is-centered"> 
        ${day}
      </div>
      <div class="card-image">
              ${weatherApp.components.createWeatherCodeIcon(weatherApp.dataStore.data[city+'_daily'].daily.weather_code[index])}
      </div>
      <div class="card-footer">
        <div class="card-footer-item">
          Max ${weatherApp.dataStore.data[city+'_daily'].daily.temperature_2m_max[index]}°C
        </div>
        <div class="card-footer-item">
          Min ${weatherApp.dataStore.data[city+'_daily'].daily.temperature_2m_min[index]}°C
        </div>
      </div>
    </div>
  </div>`
}
