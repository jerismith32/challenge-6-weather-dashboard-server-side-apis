var selectedCityEl = document.querySelector("#searchedCity")
var selectedCityInfoEl = document.querySelector("#selectedCityResults");
var citySearchEl = document.querySelector("#selectedCity");
var searchEl = document.querySelector("#search");
var forcastCardsEl = document.querySelector("#fiveDayForcastCards");
var previousCitiesEl = document.querySelector("#saveCities");

//create a variable to to get the user's input city search results
var getCityInfo = function(event) {
    event.preventDefault();
    //console.log(selectedCityEl.value);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCityEl.value + "&appid=dbe6ca1b8a6bcfd6901337d5aff1d79a")
    .then(function(response) {
       //console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayCityInfo(data);
                getUVIndex(data.coord.lat, data.coord.lon);
               // getForcast(data.coord.lat, data.coord.lon);
            });
        } else {
            alert("Error: City " + response.statusText + "! Please enter the name of the city.");
            }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather");
    });
}

searchEl.addEventListener('submit', getCityInfo);

function displayCityInfo (data) {
    citySearchEl.innerHTML = data.name

}

function getUVIndex (lat, lon) {
    //console.log(lat);
    //console.log(lon);
    fetch("https://api.openweathermap.org/data/2.5/onecall?&lat="+ lat + "&lon=" + lon + "&appid=dbe6ca1b8a6bcfd6901337d5aff1d79a")
    .then(function(response) {
        //console.log(response);
        response.json().then(function(data) {
            console.log(data);
        })
    })
}