const api = {
    key: "fbad2bd47442fccc555456cdea9de1b0",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  //using browser geolocation on page load
  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;
  
        // API URL
        let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
  `lon=${lon}&units=metric&appid=fbad2bd47442fccc555456cdea9de1b0`;
  
        // Calling the API
        fetch(apiUrl)
          .then((response) => {
            return response.json();
          })
          .then((weather) => {
            console.log(weather);
            let city = document.querySelector('.location .city');
            city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  //          let now = new Date();
  //          let date = document.querySelector('.location .date');
  //          date.innerText = dateBuilder(now);
  
            let temp = document.querySelector('.current .temp');
            temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
            let weather_el = document.querySelector('.current .weather');
            weather_el.innerText = weather.weather[0].main;
  
            let hilow = document.querySelector('.hi-low');
            hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  
          });
      });
    }
  });
  
  
  
  
  //
  ////Search functionality
  //const searchbox = document.querySelector('.search-box');
  //searchbox.addEventListener('keypress', setQuery);
  //
  ////uses enter key to search for city
  //function setQuery(evt) {
  //  if (evt.keyCode == 13) {
  //    getResults(searchbox.value);
  //  }
  //}
  //
  ////fetches the API info based on entry
  //function getResults (query) {
  //  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //    .then(weather => {
  //      return weather.json();
  //    }).then(displayResults);
  //}
  //// Updates the page with the chosen city details
  //function displayResults (weather) {
  //    console.log(weather);
  //  let city = document.querySelector('.location .city');
  //  city.innerText = `${weather.name}, ${weather.sys.country}`;
  //
  //    let now = new Date();
  //  let date = document.querySelector('.location .date');
  //  date.innerText = dateBuilder(now);
  //
  //  let temp = document.querySelector('.current .temp');
  //  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  //
  //  let weather_el = document.querySelector('.current .weather');
  //  weather_el.innerText = weather.weather[0].main;
  //
  //  let hilow = document.querySelector('.hi-low');
  //  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  //}
  //
  //function dateBuilder (d) {
  //  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //
  //  let day = days[d.getDay()];
  //  let date = d.getDate();
  //  let month = months[d.getMonth()];
  //  let year = d.getFullYear();
  //
  //  return `${day} ${date} ${month} ${year}`;
  //}