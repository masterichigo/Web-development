const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get('city');
document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById("time");
    let now = dayjs();
    for (let i = 0; i <7; i++) {
        if(now.format("dddd")===dayjs().format("dddd")) {
            time.innerHTML += weatherApp.components.createDailyCards(city,'Today',i);
        }
        else {
            time.innerHTML += weatherApp.components.createDailyCards(city,now.format("dddd"),i);
        }
        now = now.add(1, 'day');
    }
    
    const title = document.querySelector(".title"); 
    title.innerHTML = city+ ' Today';    
    
    const current = document.getElementById("current");
    current.innerHTML = weatherApp.components.createNowCard(city,parseInt(dayjs().format("HH")));
    
    const max = document.getElementById("max");
    max.innerHTML = weatherApp.components.createMaxCard(city);
});