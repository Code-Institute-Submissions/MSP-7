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
					weather_el.innerText = geoweather.weather[0].main;
					let weatherBackground = weather_el.textContent;
					console.log(weatherBackground);

					let hilow = document.querySelector('.hi-low');
					hilow.innerText = `${Math.round(geoweather.main.temp_min)}°c / ${Math.round(geoweather.main.temp_max)}°c`;
					// The following instructions changes the background/joke depending on the weather report response from the API

					// Thunderstorm background and quote 
					if (weatherBackground == "Thunderstorm") {
						document.body.style.backgroundColor = 'grey';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/grey.svg")`;
						document.getElementById("joke-text").innerHTML = "What kind of shorts do clouds wear? \n Thunderwear!";
					}
					// Rain background and quote	  
					else if (weatherBackground == "Rain") {
						document.body.style.backgroundColor = 'grey';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/grey.svg")`;
						document.getElementById("joke-text").innerHTML = "How does a spy avoid the rain? \n He goes undercover.";
					}
					// Drizzle background and quote        
					else if (weatherBackground == "Drizzle") {
						document.body.style.backgroundColor = 'green';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/green.svg")`;
						document.getElementById("joke-text").innerHTML = "What do you call a bear caught out in the rain? \n A drizzily bear.";
					}
					// Snow background and quote	  
					else if (weatherBackground == "Snow") {
						document.body.style.backgroundColor = 'pink';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/pink.svg")`;
						document.getElementById("joke-text").innerHTML = "The snowstorm arrived at a fortuitous moment. \n It was white on time.";
					}
					// Sunny background and quote
					else if (weatherBackground == "Clear") {
						document.body.style.backgroundColor = 'yellow';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/yellow.svg")`;
						document.getElementById("joke-text").innerHTML = "It was so hot the other day that even the mosquitoes were dropping like flies.";
					}
					// Cloud background and quote
					else if (weatherBackground == "Clouds") {
						document.body.style.backgroundColor = 'blue';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/blue.svg")`;
						document.getElementById("joke-text").innerHTML = "Why did the cloud stay at home? \n It was feeling under the weather.";
					}
					// Haze background and quote
					else if (weatherBackground == "Haze") {
						document.body.style.backgroundColor = 'purple';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/purple.svg")`;
						document.getElementById("joke-text").innerHTML = "If your mind is clouded or in a fog you may have mist some opportunities.";
					}
					// Fog background and quote
					else if (weatherBackground == "Fog") {
						document.body.style.backgroundColor = 'red';
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/red.svg")`;
						document.getElementById("joke-text").innerHTML = "If your mind is clouded or in a fog you may have mist some opportunities.";
					}
					// a default for any unknown terms not specified in the current API documentation
					else {
						document.body.style.backgroundColor = "dark grey";
						document.body.style.backgroundImage = `url("../assets/images/backgrounds/default.svg")`;
						document.getElementById("joke-text").innerHTML = "Weather forecast for tonight: dark.";
					}
				});
		});
	}
});


// The below code enables the user to use the enter key to submit the information entered into the search bar
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchbox.value);
	}
}

// The below code enables the user to use the left mouse click on the button to submit the information entered into the search bar
const searchbutton = document.querySelector('.search-button');
searchbutton.addEventListener('click', setMouseQuery);

function setMouseQuery(evt) {
	if (evt.which == 1) {
		getResults(searchbox.value);
	}
}

// The below fetchs the information via API based on the searchbar entry
function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
		.then(apiData => {
			return apiData.json();
		}).then(displayResults);

	// The following instructions breakdown the API response and populate the information onto the GUI
	function displayResults(apiData) {
		console.log(apiData);

		if (apiData.cod == "200") {

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

			// The following instructions changes the background/joke depending on the weather report response from the API

			// Thunderstorm background and quote 
			if (weatherBackground == "Thunderstorm") {
				document.body.style.backgroundColor = 'grey';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/grey.svg")`;
				document.getElementById("joke-text").innerHTML = "What kind of shorts do clouds wear? \n Thunderwear!";
			}
			// Rain background and quote	  
			else if (weatherBackground == "Rain") {
				document.body.style.backgroundColor = 'grey';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/grey.svg")`;
				document.getElementById("joke-text").innerHTML = "How does a spy avoid the rain? \n He goes undercover.";
			}
			// Drizzle background and quote        
			else if (weatherBackground == "Drizzle") {
				document.body.style.backgroundColor = 'green';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/green.svg")`;
				document.getElementById("joke-text").innerHTML = "What do you call a bear caught out in the rain? \n A drizzily bear.";
			}
			// Snow background and quote	  
			else if (weatherBackground == "Snow") {
				document.body.style.backgroundColor = 'pink';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/pink.svg")`;
				document.getElementById("joke-text").innerHTML = "The snowstorm arrived at a fortuitous moment. \n It was white on time.";
			}
			// Sunny background and quote
			else if (weatherBackground == "Clear") {
				document.body.style.backgroundColor = 'yellow';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/yellow.svg")`;
				document.getElementById("joke-text").innerHTML = "It was so hot the other day that even the mosquitoes were dropping like flies.";
			}
			// Cloud background and quote
			else if (weatherBackground == "Clouds") {
				document.body.style.backgroundColor = 'blue';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/blue.svg")`;
				document.getElementById("joke-text").innerHTML = "Why did the cloud stay at home? \n It was feeling under the weather.";
			}
			// Haze background and quote
			else if (weatherBackground == "Haze") {
				document.body.style.backgroundColor = 'purple';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/purple.svg")`;
				document.getElementById("joke-text").innerHTML = "If your mind is clouded or in a fog you may have mist some opportunities.";
			}
			// Fog background and quote
			else if (weatherBackground == "Fog") {
				document.body.style.backgroundColor = 'red';
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/red.svg")`;
				document.getElementById("joke-text").innerHTML = "If your mind is clouded or in a fog you may have mist some opportunities.";
			}
			// a default for any unknown terms not specified in the current API documentation
			else {
				document.body.style.backgroundColor = "dark grey";
				document.body.style.backgroundImage = `url("../assets/images/backgrounds/default.svg")`;
				document.getElementById("joke-text").innerHTML = "Weather forecast for tonight: dark.";
			}
		} else {
			alert("Have you entered a valid location? ie Dublin, IE");
		}
	}
}
// The below date builder code was obtained directly from Tyler Potts (link as noted in the READ.ME document)
function dateBuilder(d) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`;
}