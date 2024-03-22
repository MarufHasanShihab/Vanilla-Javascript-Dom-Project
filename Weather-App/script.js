const apikey = "28fd15358cdecbc1a1dfef36771acef";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`)
    var data = await response.json();
    console.log(data)
}

checkWeather();