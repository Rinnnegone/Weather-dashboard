var getCity = document.getElementById("userCityInput");
var apiKey = "&appid=f23b6b04e25cca30210187f4912be875&units=imperial";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var chosenCityEl= document.getElementById("chosenCity");
var dateEL = document.getElementById("date");
var tempEl= document.getElementById("temp");
var tempLoHiEl= document.getElementById("tempLoHi");
var windEl= document.getElementById("wind");
var humidityEl= document.getElementById("humidity");
var uvEl= document.getElementById("uvIndex");
var img = document.getElementById("icon");

//date and time
dateEL.El.textContent = moment().format("dddd, MMM, DD, YYYY, h:mm a")

//button listener, search for city
function searchBtn(){

    var city = getCity.value;

    searchCity(city);

}

//gets Api
function searchCity(city) {

    fetch(baseUrl + city + apiKey)
       .then(function (response){
        return response.json();
       })

       .then(function(data){


        var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}'
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.list[0]);
            console.log(data.list.length);
            
            var dateFive2 = document.getElementById("dateFiveDay2");
            var tempLoHiFive2 = document.getElementById("tempLoHiFiveday2");
            
        })
       })
};
