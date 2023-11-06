const API = "0baf0dab3ca4e1359t8bb81651943o3d" ;
const apiUrl= "https://api.shecodes.io/weather/v1/forecast?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBox = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){ 
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML = Mathround(data.main.temp) + "&degF";
  document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";}

  if(data.weather[0].main== " Day Clouds"){
    weatherIcon.src = "Pictures/xln6kdfh.png"
  }
  else if(data.weather[0].main == "Clear Sunny") {
    weatherIcon.src = "Pictures/rgxs1sb9.png"
}
else if(data.weather[0].main == "Clear Dark") {
    weatherIcon.src = "Pictures/v9q2wq60.png"
}
else if(data.weather[0].main == "Day Wind") {
    weatherIcon.src = "Pictures/y2ctkjdq.png"
}
else if(data.weather[0].main == "Night Wind") {
    weatherIcon.src = "Pictures/zaf6lqpb.png"
}
else if(data.weather[0].main == "Day Snow") {
    weatherIcon.src = "Pictures/kp4gh57w.png"
}
else if(data.weather[0].main == "Night Snow") {
    weatherIcon.src = "Pictures/6q8aiq0i.png"
}
else if(data.weather[0].main == "Day Thunderstorm") {
    weatherIcon.src = "Pictures/1jv93qmg.png"
}
else if(data.weather[0].main == "Night Thunderstorm") {
    weatherIcon.src = "Pictures/8kjxong.png"
}

else if(data.weather[0].main == "Day Rain") {
    weatherIcon.src = "Pictures/t1v2memj.png"
}
else if(data.weather[0].main == "Day Sun Rain") {
    weatherIcon.src = "Pictures/qu5pgg7v.png"
}
else if(data.weather[0].main == "Night Rain") {
    weatherIcon.src = "Pictures/bkm5glwo.png"
}
else if(data.weather[0].main == "Night Sun Rain") {
    weatherIcon.src = "Pictures/qrd3vgpm.png"
}
else if(data.weather[0].main == "Day cloudy") {
    weatherIcon.src = "Pictures/bunjrakw.png"
}
else if(data.weather[0].main == "Night cloudy") {
    weatherIcon.src = "Pictures/84irhhgq.png"
}

document.querySelector(".weather").computedStyleMap.display = block

searchBTN.addEventListener("click",()=>{
checkWeather(searchBox.value); 
})

const dayEl = document.querySelector(".default_day");
const dateEl = document.querySelector(".default_date");
const btnEl = document.querySelector(".btn_search");
const inputEl = document.querySelector(".input_field");

const iconsContainer = document.querySelector(".icons");
const dayInfoEl = document.querySelector(".day_info");
const listContentEl = document.querySelector(".list_content ul");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// display the day
const day = new Date();
const dayName = days[day.getDay()];
dayEl.textContent = dayName;

// display date
let month = day.toLocaleString("default", { month: "long" });
let date = day.getDate();
let year = day.getFullYear();

console.log();
dateEl.textContent = date + " " + month + " " + year;

// add event
btnEl.addEventListener("click", (e) => {
  e.preventDefault();

  // check empty value
  if (inputEl.value !== "") {
    const Search = inputEl.value;
    inputEl.value = "";
    findLocation(Search);
  } else {
    console.log("Please Enter City or Country Name");
  }
});

async function findLocation(name) {
  iconsContainer.innerHTML = "";
  dayInfoEl.innerHTML = "";
  listContentEl.innerHTML = "";
  try {
    const API_URL = `https://api.shecodes.io/weather/v1/current?france&appid=0baf0dab3ca4e1359t8bb81651943o3d`;
    const data = await fetch(API_URL);
    const result = await data.json();
    console.log(result);

    if (result.cod !== "404") {
      // display image content
      const ImageContent = displayImageContent(result);

      // display right side content
      const rightSide = rightSideContent(result);

      // forecast function
      displayForeCast(result.coord.lat, result.coord.lon);

      setTimeout(() => {
        iconsContainer.insertAdjacentHTML("afterbegin", ImageContent);
        iconsContainer.classList.add("fadeIn");
        dayInfoEl.insertAdjacentHTML("afterbegin", rightSide);
      }, 1500);
    } else {
      const message = `<h2 class="weather_temp">${result.cod}</h2>
      <h3 class="cloudtxt">${result.message}</h3>`;
      iconsContainer.insertAdjacentHTML("afterbegin", message);
    }
  } catch (error) {}
}

// display image content and temp
function displayImageContent(data) {
  return `<img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@4x.png" alt="" />
    <h2 class="weather_temp">${Math.round(data.main.temp - 275.15)}°C</h2>
    <h3 class="cloudtxt">${data.weather[0].description}</h3>`;
}

// display the right side content
function rightSideContent(result) {
  return `<div class="content">
          <p class="title">NAME</p>
          <span class="value">${result.name}</span>
        </div>
        <div class="content">
          <p class="title">TEMP</p>
          <span class="value">${Math.round(result.main.temp - 275.15)}°C</span>
        </div>
        <div class="content">
          <p class="title">HUMIDITY</p>
          <span class="value">${result.main.humidity}%</span>
        </div>
        <div class="content">
          <p class="title">WIND SPEED</p>
          <span class="value">${result.wind.speed} Km/h</span>
        </div>`;
}

async function displayForeCast(lat, long) {
  const ForeCast_API = `https://api.shecodes.io/weather/v1/current?france&appid=0baf0dab3ca4e1359t8bb81651943o3d`;
  const data = await fetch(ForeCast_API);
  const result = await data.json();
  // filter the forecast
  const uniqeForeCastDays = [];
  const daysForecast = result.list.filter((forecast) => {
    const forecastDate = new Date(forecast.dt_txt).getDate();
    if (!uniqeForeCastDays.includes(forecastDate)) {
      return uniqeForeCastDays.push(forecastDate);
    }
  });
  console.log(daysForecast);

  daysForecast.forEach((content, indx) => {
    if (indx <= 3) {
      listContentEl.insertAdjacentHTML("afterbegin", forecast(content));
    }
  });
}

// forecast html element data
function forecast(frContent) {
  const day = new Date(frContent.dt_txt);
  const dayName = days[day.getDay()];
  const splitDay = dayName.split("", 3);
  const joinDay = splitDay.join("");

  // console.log(dayName);

  return `<li>
  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png${
    frContent.weather[0].icon
  }@2x.png" />
  <span>${joinDay}</span>
  <span class="day_temp">${Math.round(frContent.main.temp - 7.7)}°C</span>
</li>`;
}


