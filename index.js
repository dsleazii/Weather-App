const API = "0baf0dab3ca4e1359t8bb81651943o3d";
const apiUrl = "https://api.shecodes.io/weather/v1/forecast?units=metric&q=";

const searchformElement = document.querySelector("#searchBox");
const searchformElement = document.querySelector("#search-form-input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Mathround(data.main.temp) + "&degF";
  document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

if (data.weather[0].main == " Day Clouds") {
  weatherIcon.src = "Pictures/xln6kdfh.png";
} else if (data.weather[0].main == "Clear Sunny") {
  weatherIcon.src = "Pictures/rgxs1sb9.png";
} else if (data.weather[0].main == "Clear Dark") {
  weatherIcon.src = "Pictures/v9q2wq60.png";
} else if (data.weather[0].main == "Day Wind") {
  weatherIcon.src = "Pictures/y2ctkjdq.png";
} else if (data.weather[0].main == "Night Wind") {
  weatherIcon.src = "Pictures/zaf6lqpb.png";
} else if (data.weather[0].main == "Day Snow") {
  weatherIcon.src = "Pictures/kp4gh57w.png";
} else if (data.weather[0].main == "Night Snow") {
  weatherIcon.src = "Pictures/6q8aiq0i.png";
} else if (data.weather[0].main == "Day Thunderstorm") {
  weatherIcon.src = "Pictures/1jv93qmg.png";
} else if (data.weather[0].main == "Night Thunderstorm") {
  weatherIcon.src = "Pictures/8kjxong.png";
} else if (data.weather[0].main == "Day Rain") {
  weatherIcon.src = "Pictures/t1v2memj.png";
} else if (data.weather[0].main == "Day Sun Rain") {
  weatherIcon.src = "Pictures/qu5pgg7v.png";
} else if (data.weather[0].main == "Night Rain") {
  weatherIcon.src = "Pictures/bkm5glwo.png";
} else if (data.weather[0].main == "Night Sun Rain") {
  weatherIcon.src = "Pictures/qrd3vgpm.png";
} else if (data.weather[0].main == "Day cloudy") {
  weatherIcon.src = "Pictures/bunjrakw.png";
} else if (data.weather[0].main == "Night cloudy") {
  weatherIcon.src = "Pictures/84irhhgq.png";
}

document.querySelector(".weather").computedStyleMap.display = block;

searchBTN.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-from-input");
  console.log(searchInput.value);
}

let searchfromElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
