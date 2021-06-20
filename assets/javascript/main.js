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

  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(apiData => {
     return apiData.json();
  })
  .then(displayResults);


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

  // The following instructions changes the background depending on the weather report response from the API

    // Thunderstorm background  
    if (weatherBackground == "Thunderstorm") {
      document.body.style.backgroundColor = 'rgb(' + [75,68,81].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/thunderstorm.PNG")`;
    }
      // Rain background	  
    else if (weatherBackground == "Rain") {
      document.body.style.backgroundColor = 'rgb(' + [79,145,162].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/rain.PNG")`;
    }
    else if (weatherBackground == "Drizzle") {
      document.body.style.backgroundColor = 'rgb(' + [79,145,162].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/rain.PNG")`;
    }
      // Snow background	  
    else if (weatherBackground == "Snow") {
      document.body.style.backgroundColor = 'rgb(' + [89,207,250].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/rain.PNG")`;
    }
      // Sunny background
    else if (weatherBackground == "Clear") {
      document.body.style.backgroundColor = 'rgb(' + [255,213,58].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/sun.PNG")`;
    }
      // Cloud background
    else if (weatherBackground == "Clouds") {
      document.body.style.backgroundColor = 'rgb(' + [0,125,186].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/cloud.PNG")`;
    }  
    // Haze/ Fog background
    else if (weatherBackground == "Haze") {
      document.body.style.backgroundColor = 'rgb(' + [86,139,187].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/mist-fog.PNG")`;
    }
    else if (weatherBackground == "Fog") {
      document.body.style.backgroundColor = 'rgb(' + [86,139,187].join(',') + ')';
      document.body.style.backgroundImage = `url("../assets/images/backgrounds/mist-fog.PNG")`;
    }
      // a default for any unknown terms not specified in the current API documentation
      else {
        document.body.style.backgroundColor = "black";
    }
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