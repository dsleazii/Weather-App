const apiKey = "0baf0dab3ca4e1359t8bb81651943o3d";
const apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric`;

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(
   apiUrl +
      city +
      `&key=${apiKey}`);
  var data = await response.json(); 

  console.log(data);

  {document.querySelector(".city").innerHTML = data.city;
  document.querySelector(".temp").innerHTML =
    Math.round(data.temperature.current) + "&deg;F";
  document.querySelector(".humidity").innerHTML =
    data.temperature.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.condition.description == " Day Clouds") {
    weatherIcon.src = "Pictures/xln6kdfh.png";
  } else if (data.condition.description == "Clear Sunny") {
    weatherIcon.src = "Pictures/rgxs1sb9.png";
  } else if (data.condition.description == "Clear Dark") {
    weatherIcon.src = "Pictures/v9q2wq60.png";
  } else if (data.condition.description == "Day Wind") {
    weatherIcon.src = "Pictures/y2ctkjdq.png";
  } else if (data.condition.description == "Night Wind") {
    weatherIcon.src = "Pictures/zaf6lqpb.png";
  } else if (data.condition.description == "Day Snow") {
    weatherIcon.src = "Pictures/kp4gh57w.png";
  } else if (data.condition.description == "Night Snow") {
    weatherIcon.src = "Pictures/6q8aiq0i.png";
  } else if (data.condition.description == "Day Thunderstorm") {
    weatherIcon.src = "Pictures/1jv93qmg.png";
  } else if (data.condition.description == "Night Thunderstorm") {
    weatherIcon.src = "Pictures/8kjxong.png";
  } else if (data.condition.description == "Day Rain") {
    weatherIcon.src = "Pictures/t1v2memj.png";
  } else if (data.condition.description == "Day Sun Rain") {
    weatherIcon.src = "Pictures/qu5pgg7v.png";
  } else if (data.condition.description == "Night Rain") {
    weatherIcon.src = "Pictures/bkm5glwo.png";
  } else if (data.condition.description == "Night Sun Rain") {
    weatherIcon.src = "Pictures/qrd3vgpm.png";
  } else if (data.condition.description == "Day cloudy") {
    weatherIcon.src = "Pictures/bunjrakw.png";
  } else if (data.condition.description == "Night cloudy") {
    weatherIcon.src = "Pictures/84irhhgq.png";
  }
}};

function updateWeather(resonse) {
 let temperatureElement = document.querySelector("#temperature");
 let temperature = response.data.temperature.current;
 let cityElement = document.querySelector("#city");

 cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);}

function searchCity(city){
  let apiKey = "0baf0dab3ca4e1359t8bb81651943o3d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric`;
axios.get(apiUrl).then(updateWeather);}
  
  function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  checkWeather(searchInput.value);
}

searchCity(searchInput.value);

function getForecast(city){
  let apiKey = "0baf0dab3ca4e1359t8bb81651943o3d";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric";
    axios(apiUrl).then(displayForeCast);}
    
  


function displayForeCast(response) {
console.log(response.data);

let days = ["Tues", "Wed", "Thrus", "Fri", "Sat"];
let forecastHTML = "";

days.forEach(function (day) {
forecastHTML =
  forecastHTML +
  ` <div class="list_content" id="forecast">
            <div class= "weather-forecast-date" > ${day}</div>
            <div class= "weather-forecast-icon" img src= "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png" >🌤️</div>
            <div class= "weather-forecast-temperatures" ></div>
            <div class= "weather-forecast-temperature" >
              <strong>23&deg;F</strong>
            </div>
            
              
      

`; }); 
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);

searchInput("London");
getForecast("London");
searchCity("London");