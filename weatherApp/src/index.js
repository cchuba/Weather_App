let now = new Date();

let seconds = now.getSeconds();
let milSeconds = now.getMilliseconds();
let date = now.getDate();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let minutes = now.getMinutes();
let hours = now.getHours();
let month = now.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let year = now.getFullYear();

let dateh5 = document.querySelector(".date");
let timeh5 = document.querySelector(".time");
function displayDate() {
  dateh5.innerHTML = `${days[day]}, ${months[month]} ${date}, ${year}`;
  timeh5.innerHTML = `${hours}:${minutes}:${seconds}`;
}

displayDate();

//search

let citySearch = document.querySelector(".searchForm");
let locations = document.querySelector(".currentLocation");
let cityInput = document.querySelector(".search");
let cityText = cityInput.value;

function getUserCity(event) {
  event.preventDefault();
  locations.innerHTML = cityInput.value;
}
citySearch.addEventListener("submit", getUserCity);

let apiKey = "ff4a93d14dc8c81d12ed259ff88a5d9e";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}`;

function displayTemperature(response){
  let currentTemp = response.data.main.temp;
  let curForecast = document.querySelector(".currentForecast");
  curForecast.innerHTML = currentTemp;
}

axios.get(apiURL).then(displayTemperature);


/*
let toFahrenheit = document.querySelector(".fahrenheit");
let toCelsius = document.querySelector(".celsius");
function getTemp(event) {
  event.preventDefault();
  let temperatureInput = prompt("Enter a temperature");
  location.innerHTML = cityInput.value;
}
citySearch.addEventListener("submit", getUserCity);
*/
