/*jshint esversion: 6 */
/* API site details for reference*/
const api = {
  key: "fbad2bd47442fccc555456cdea9de1b0",
  base: "https://api.openweathermap.org/data/2.5/"
};

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
   .then(apiData => {
     return apiData.json();
   }).then(displayResults);
}

// The following instructions breakdown the API response and populate the information onto the GUI
function displayResults (apiData) {
  console.log(apiData);

  let city = document.querySelector('.location .city');
  city.innerText = `${apiData.name}, ${apiData.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(apiData.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = apiData.weather[0].main;
  let weatherBackground = weather_el.textContent;
  console.log(weatherBackground);

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(apiData.main.temp_min)}°c / ${Math.round(apiData.main.temp_max)}°c`;

  // The following instructions changes the background   depending on the weather report

  switch(weatherBackground) {
    // Thunderstorm background
    case 'Thunderstorm':
      document.body.style.backgroundColor = "dark grey";
      //document.body.style.backgroundImage = 
        break;
    // Drizzle background
    case 'Drizzle':
      document.body.style.backgroundColor = "light grey";
        break;
    // Rain background
    case 'Rain':
      document.body.style.backgroundColor = "grey";
        break;
    // Snow background
    case 'Snow':
      document.body.style.backgroundColor = "white";
        break;
    // Sunny background
    case 'Clear':
      document.body.style.backgroundColor = "yellow";
        break;
    // Cloud background
    case 'Cloud':
      document.body.style.backgroundColor = "orange";
        break;
    //Haze background
    case 'Haze':
      document.body.style.backgroundColor = "maroon";
        break;
    // Fog background
    case 'Fog':
      document.body.style.backgroundColor = "lime";
        break;
    // Tornado background
    case 'tornado':
      document.body.style.backgroundColor = "navy";
        break;
    // a default for any unknown terms not specified in the current API documentation
    default:
      document.body.style.backgroundColor = "black";
        break;
}};

function dateBuilder (d) {
 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`;
}