const API = "0baf0dab3ca4e1359t8bb81651943o3d" ;
const apiUrl= "https://api.shecodes.io/weather/v1/current?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBox = document.querySelector(".search button");

async function checkWeather(city){ 
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML = Mathround(data.main.temp) + "&degF";
  document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBTN.addEventListener("click",()=>{
checkWeather(searchBox.value); 
})


