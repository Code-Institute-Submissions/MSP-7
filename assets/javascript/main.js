/*jshint esversion: 6 */
/* API site details for reference*/
const api = {
  key: "fbad2bd47442fccc555456cdea9de1b0",
  base: "https://api.openweathermap.org/data/2.5/"
};
let weatherIcon = [];

// The first function below refers entirely to the Geolocation based API call and response. Search functionality handled separately 
// Determining the Users geolocation on page load
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;

      // API URL for geolocation parameters on page load
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` + `lon=${longitude}&units=metric&appid=fbad2bd47442fccc555456cdea9de1b0`;

      // Calling the API and updating the GUI
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((geoweather) => {
          console.log(geoweather);
          let city = document.querySelector('.location .city');
          city.innerText = `${geoweather.name}, ${geoweather.sys.country}`;

          let now = new Date();
          let date = document.querySelector('.location .date');
          date.innerText = dateBuilder(now);

          let temp = document.querySelector('.current .temp');
          temp.innerHTML = `${Math.round(geoweather.main.temp)}<span>°c</span>`;

          let weather_el = document.querySelector('.current .weather');
          weather_el.innerText = geoweather.weather[0].description;

          let hilow = document.querySelector('.hi-low');
          hilow.innerText = `${Math.round(geoweather.main.temp_min)}°c / ${Math.round(geoweather.main.temp_max)}°c`;
        });
    });
  }
});


// The below is for the "Search functionality" and to enable using the enter key to submit location
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

// The below is for the "Search functionality" and to enable using the left mouse click on the search button to submit location
const searchbutton = document.querySelector('.search-button');
  searchbutton.addEventListener('click', setMouseQuery);
  
function setMouseQuery(evt) {
if (evt.which == 1) {
      getResults(searchbox.value);
  }
}

// The below fetchs the information via API based on the searchbar entry
function getResults (query) {
 fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(weather => {
     return weather.json();
   }).then(displayResults);
};


// The following instructions breakdown the API response and populate the information onto the GUI
function displayResults (weather) {
  console.log(weather);

  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].description;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

  // The following instructions changes the background depending on the weather report
  let weatherIcon = weather_el.textContent;
  console.log(weatherIcon);  
  
  switch(weatherIcon) {
    case 'clear sky':
      document.body.style.backgroundColor = "blue";
        break;
    case 'broken clouds':
      document.body.style.backgroundColor = "pink";
        break;
    case 'scattered clouds':
      document.body.style.backgroundColor = "pink";
        break;
    default:
      document.body.style.backgroundColor = "green";
        break;
}

  // if (weatherIcon = "clear sky") {
  //   document.body.style.backgroundColor = "blue";
  // } else if (weatherIcon = "broken clouds") {
  //   document.body.style.backgroundColor = "pink";
  // } else if (weatherIcon = "scattered clouds") {
  //   document.body.style.backgroundColor = "green";
  // } else if (weatherIcon = "snow") {
  //   document.body.style.backgroundColor = "purple";
  // } else if(weatherIcon = "few clouds") {
  //   document.body.style.backgroundColor = "yellow";
  // }

};

function dateBuilder (d) {
 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`;
}