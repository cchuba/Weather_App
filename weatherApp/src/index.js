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
let h1 = document.querySelector("h1");

function getUserCity(event) {
  let apiKey = "ff4a93d14dc8c81d12ed259ff88a5d9e";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;
  event.preventDefault();
  locations.innerHTML = cityInput.value;
  axios.get(apiURL).then(displayTemperature);
}
citySearch.addEventListener("submit", getUserCity);


function displayTemperature(response){
  let currentTemp = response.data.main.temp;
  let curForecast = document.querySelector(".currentForecast");
  curForecast.innerHTML = currentTemp;
}

function showGreeting() {
            if (hours < 12){
              
            h1.innerHTML = `Good Morning!`;
            }else if(hours >= 12 && hours < 18){
            h1.innerHTML = `Good Afternoon!`;
            } else if(hours >= 18 && hours<= 23){
            h1.innerHTML = `Good Evening!`;
            }else{
              
            h1.innerHTML = `Greetings!`;
            }
          
        }
showGreeting();



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

// Link to my GitHub:
// https://github.com/cchuba/Weather_App/tree/main/weatherApp