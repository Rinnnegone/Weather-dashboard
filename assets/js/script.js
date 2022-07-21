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



// Date and Time
dateEL.textContent = moment().format("dddd, MMM, DD, YYYY, h:mm a");

// Listens to user clicking the button; sends user input to searchCity
function searchBtn() {
  // preventDefault(); //prevents 
  // console.log(getCity);
  // console.log(getCity.value);
  var city = getCity.value;
  // var cityFive = getCity.value;
  
  searchCity(city);
  // fiveDayForecast(cityFive);

}


//function to get API data
function searchCity(city) {
 
    fetch(baseUrl + city + apiKey)
      .then(function(response){
          return response.json();
      })
      .then(function(data){
      
  
          var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
           fetch(url)
           .then(function(response){
             return response.json();
           })
           .then(function(data){
            console.log(data.list[0]);
            //  console.log(data.list[0].weather[0].icon);
             console.log(data.list.length);

             var dateFive2 = document.getElementById("dateFiveDay2");
              // var iconFive = document.getElementById("iconFiveDay");
             var tempLoHiFive2 = document.getElementById("tempLoHiFiveFiveDay2");
             var tempFive2 = document.getElementById("tempFiveDay2");
             var windFive2 = document.getElementById("windFiveDay2");
             var humidityFive2 = document.getElementById("humidityFiveDay2");
             
            var dateFive3 = document.getElementById("dateFiveDay3");
            // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive3 = document.getElementById("tempLoHiFiveFiveDay3");
            var tempFive3 = document.getElementById("tempFiveDay3");
            var windFive3 = document.getElementById("windFiveDay3");
            var humidityFive3 = document.getElementById("humidityFiveDay3");
                
            var dateFive4 = document.getElementById("dateFiveDay4");
              // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive4 = document.getElementById("tempLoHiFiveFiveDay4");
            var tempFive4 = document.getElementById("tempFiveDay4");
            var windFive4 = document.getElementById("windFiveDay4");
            var humidityFive4 = document.getElementById("humidityFiveDay4");

            var dateFive5 = document.getElementById("dateFiveDay5");
            // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive5 = document.getElementById("tempLoHiFiveFiveDay5");
            var tempFive5 = document.getElementById("tempFiveDay5");
            var windFive5 = document.getElementById("windFiveDay5");
            var humidityFive5 = document.getElementById("humidityFiveDay5");
                
            var dateFive6 = document.getElementById("dateFiveDay6");
              // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive6 = document.getElementById("tempLoHiFiveFiveDay6");
            var tempFive6 = document.getElementById("tempFiveDay6");
            var windFive6 = document.getElementById("windFiveDay6");
            var humidityFive6 = document.getElementById("humidityFiveDay6");
           
              for (var i = 0; i < data.list.length; i++) {  
               tempFive2.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive2.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive2.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive2.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive3.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive3.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive3.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive3.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive4.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive4.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive4.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive4.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive5.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive5.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive5.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive5.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive6.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive6.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive6.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive6.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);
              };
            })
   
         // Displaying the data results to their respective html elements
      
        chosenCityEl.textContent = data.name;
        tempEl.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
        tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
        windEl.textContent = "Wind: " + data.wind.speed + "mph";
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
        uvEl.textContent ="UVIndex:"; 
       


      })
    
  
        .catch(function(error){
          console.log(error);
        })     
};