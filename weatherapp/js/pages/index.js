document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById("time");
    const button = document.querySelector(".hero-foot");
    const urlParams = new URLSearchParams(window.location.search);
    const onlyFavourites = urlParams.get('onlyFavourites') === 'true';
    weatherApp.dataStore.cityName.forEach((city) => {
        if(onlyFavourites) {
        const isFavourite = localStorage.getItem(city) === 'true';
        button.innerHTML = `
            <div class="container">
                <a href="/" class="button is-primary is-inverted">
                    <span>Show All Cities</span>
                </a>
            </div>    
            `;
        if(isFavourite) {
            time.innerHTML += weatherApp.components.createWeatherCard(city);
         
        } 
      
        
        } else {
            time.innerHTML += weatherApp.components.createWeatherCard(city);
            button.innerHTML = `
            <div class="container">
                <a href="/?onlyFavourites=true" class="button is-primary is-inverted">
                    <span>Show Only Favorites</span>
                </a>
            </div>    
            `;
        }
    });

    if(time.innerHTML === '') {
        
        noFavHTML = `
            <div class="container">
                <p class="title"> No Favourites</p>
            </div>
        `;
        time.insertAdjacentHTML('afterend', noFavHTML);
    }
    
    
    document.querySelectorAll("[id^=fave-]").forEach(checkbox => {
        checkbox.addEventListener('click', (event) => {
            const cityName = event.target.id.replace('fave-','');
            const isFavourite =  event.target.checked;
            localStorage.setItem(cityName, isFavourite);
        })

    });
    document.querySelectorAll("[id^=fave-]").forEach(checkbox => {
            const cityName = checkbox.id.replace('fave-','');
            const isFavourite = localStorage.getItem(cityName) === 'true';
            checkbox.checked = isFavourite;
        });
});