
const apiKey ="7c31c63867784e50bc2153623232405"
let apiUrl = "http://api.weatherapi.com/v1/current.json?aqi=no"


async function checkWeather(){
        
    var city = document.getElementById("search-city").value;

    let response = await fetch(`${apiUrl}&key=${apiKey}&q=${city}`);

    if(response.status == 400){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);
        
        
        document.querySelector(".city").innerHTML = data["location"]["name"];
        document.querySelector(".temp").innerHTML = Math.round( data["current"]["feelslike_c"]) + "°C";
        document.querySelector(".humidity").innerHTML = data["current"]["humidity"] + "%";
        document.querySelector(".wind").innerHTML = data["current"]["gust_kph"] + " km/h";
    
        document.querySelector(".weather-icon").src = data["current"]["condition"]["icon"];
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}


