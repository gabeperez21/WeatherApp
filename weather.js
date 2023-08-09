let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");

// API ID
const api = ;

// City name
const cityName = "Boston";

// API URL
const base = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`;

// Calling the API
fetch(base)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    temperature.textContent = Math.floor(data.main.temp) + "°F";
    summary.textContent = data.weather[0].description;
    loc.textContent = data.name + "," + data.sys.country;

    let icon1 = data.weather[0].icon;
    // Constructing the URL for the weather icon
    let iconUrl = `https://openweathermap.org/img/wn/${icon1}@2x.png`;

    // Setting the image src to the icon URL
    icon.innerHTML = `<img src="${iconUrl}" class="iconImage" style= 'height:10rem'/>`;
  });
