console.log("js loaded!!")



function searchWeather(){
  let currentLocation = document.getElementById('location_id').value;


fetch(`http://api.weatherapi.com/v1/forecast.json?key=89afedd00f684cd08a695828251611&q=${currentLocation}&days=1&aqi=no&alerts=no`)
.then(res => res.json())
.then(data => {
document.getElementById("main_status_image").src="https:"+ data.current.condition.icon;
document.getElementById("city_name").innerText=data.location.name;
document.getElementById("country_name").innerText=data.location.country;
document.getElementById("main_temparature").innerText=data.current.temp_c;
document.getElementById("sub_main_temparature").innerText=data.current.temp_c;
document.getElementById("temparature_feel_like").innerText=data.current.feelslike_c;
document.getElementById("status").innerText=data.current.condition.text;

const dateString = data.current.last_updated;
const date = new Date(dateString);

const newDate = date.toLocaleDateString('en-US',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'

});
document.getElementById("date").innerText=newDate;
document.getElementById("sun_rise_time").innerText=data.forecast.forecastday[0].astro.sunrise;
document.getElementById("sun_set_time").innerText=data.forecast.forecastday[0].astro.sunset;
document.getElementById("wind_speed_value").innerText=data.current.wind_kph;
document.getElementById("humidity_value").innerText=data.current.humidity;
document.getElementById("cloud_cover_value").innerText=data.current.cloud;
document.getElementById("uv_index_value").innerText=data.current.uv;
document.getElementById("pressure_number").innerText=data.current.pressure_mb;
document.getElementById("visibility_number").innerText=data.current.vis_km;


});

}

searchWeather();