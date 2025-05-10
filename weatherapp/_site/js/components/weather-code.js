window.weatherApp.components.createWeatherCodeIcon = (weatherCode,description) => {
    
    let icon = '';
    let sky = ''; 
    const clear = [0, 1];
    const rain = [51,53,55,56,57,61, 63, 65, 66, 67, 80, 81, 82];
    const snow = [71, 73, 75, 77, 85, 86];
    const fog = [45, 48];

    switch (weatherCode) {
        case clear.find((code) => code === weatherCode):
            icon = 'sun.png';
            sky = 'Clear';
            break;
        case 2:
            icon = 'partly_cloudy.png';
            sky = 'Partly cloudy';
            break;
        case 3:
            icon = 'cloud.png';
            sky = 'Overcast';
            break;
        case rain.find((code) => code === weatherCode):
            icon = 'rain.png';
            sky = 'Rain';
            break;
        case snow.find(code => code === weatherCode):
            icon = 'snow.png';
            sky = 'Snow';
            break;
        case 95:
            icon = 'storm.png';
            sky = 'Thunderstorm';
            break;
        case fog.find(code => code === weatherCode):
            icon = 'fog.png';
            sky = 'Fog';
            break;  
        default:
            icon = 'sun.png';
            sky = 'unknown';
    }
    if (description==='') {
        return sky;
    }
    else {return `<img src="/images/${icon}" alt="Weather Icon" >`;}
}