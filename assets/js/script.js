var selectedCityEl = document.querySelector("#searchedCity")
var selectedCityInfoEl = document.querySelector("#selectedCityResults");
var citySearchEl = document.querySelector("#selectedCity");
var searchEl = document.querySelector("#search");
var forcastCardsEl = document.querySelector("#5dayForcastCards");
var previousCitiesEl = document.querySelector("#saveCities");

//create a variable to to get the user's input city search results
var getCityInfo = function(city) {
    fetch("api.openweathermap.org/data/2.5/weather?id={city ID}"&"appid={API key}"")
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayCityInfo(data, data.nam, data.weather[0].icon);
                getForcast(data.coord.lat, data.coord.lon);
            });
        } else {
            alert("Error: City " + response.statusText + "! Please enter the name of the city.");
            }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather");
    });
}