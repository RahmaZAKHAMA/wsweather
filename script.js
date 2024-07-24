async function fetchWeather(){
const weatherlocation = document.getElementById('city').value;
console.log(weatherlocation);
const weatherkey = "6479b22c959e5cb312973a208d9070f5";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${weatherlocation}&appid=${weatherkey}`;
try {
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    UpdateWeather(data);
} catch (error) {
    console.log(error);
}
}

const UpdateWeather=(data)=>{
const city=data.name;
const temperature=data.main.temp;
const description=data.weather[0].description;
console.log(city, temperature, description);
document.getElementById("weather").style.display=`block`;
document.getElementById("location").innerText = `Weather in:${city}`;

document.getElementById("temperature").innerText = `Temperature:${temperature}`;

document.getElementById("description").innerText = `Description:${description}`;
const icon =data.weather[0].icon;
document.getElementById(
  "icon"
).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

