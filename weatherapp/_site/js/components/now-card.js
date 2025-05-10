window.weatherApp.components.createNowCard = (city, time) => {
  return `
  <div class="column is-4">
    <div class="card has-text-centered">
      <div class="card-header-title is-centered"> 
        Conditions right now
        </div>
        <p>${weatherApp.components.createWeatherCodeIcon(weatherApp.dataStore.data[city+'_hourly'].hourly.weather_code[time],'')}</p>
      <p>
      Temperature : ${weatherApp.dataStore.data[city+'_hourly'].hourly.temperature_2m[time]}°C
      </p>
      <p>Wind Speed : ${weatherApp.dataStore.data[city+'_hourly'].hourly.wind_speed_10m[time]} km/h</p>
      <p>Feels like : ${weatherApp.dataStore.data[city+'_hourly'].hourly.apparent_temperature[time]}°C
    </div>
    <div>`
}    

window.weatherApp.components.createMaxCard = (city) => {
    return `
    <div class="column is-2">
    <div class="card has-text-centered">
    <div class="card-header-title is-centered"> 
        Max Wind Speed
    </div>
      <p class = "card-content">
      ${weatherApp.dataStore.data[city+'_daily'].daily.wind_speed_10m_max[0]} km/h
      </p>
    </div>
    </div>
    <div class="column is-2">
    <div class="card has-text-centered">
      <div class="card-header-title is-centered"> 
        Max Temp
        </div>
      <p class = "card-content">
      ${weatherApp.dataStore.data[city+'_daily'].daily.temperature_2m_max[0]}°C
      </p>
    </div>
    </div>`
}