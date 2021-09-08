//Pulling over elements from html
//section here has elements from left bar of website
var citySearchBar = document.querySelector("#citySearchBar");
var citySearchBarButton = document.querySelector("#citySearchBarButton");
var AustinButton = document.querySelector("#AustinButton");
var ChicagoButton = document.querySelector("#ChicagoButton");
var NewYorkButton = document.querySelector("#NewYorkButton");
var OrlandoButton = document.querySelector("#OrlandoButton");
var SanFranciscoButton = document.querySelector("#SanFranciscoButton");
var SeattleButton = document.querySelector("#SeattleButton");
var DenverButton = document.querySelector("#DenverButton");
var AtlantaButton = document.querySelector("#AtlantaButton");
var currentCity = document.querySelector("#currentCity");
var currentCityDate = document.querySelector("#currentCityDate");
var currentCityWeather = document.querySelector("#currentCityWeather")
var currentCityTemp = document.querySelector("#currentCityTemp");
var currentCityWind = document.querySelector("#currentCityWind");
var currentCityHumidity = document.querySelector("#currentCityHumidity");
var currentCityUVI = document.querySelector("#currentCityUVI");

//html elements for next day of selected city
var day1 = document.querySelector("#day1");
var day1date = document.querySelector("#day1date")
var day1weather = document.querySelector("#day1weather");
var day1temp = document.querySelector("#day1temp");
var day1wind = document.querySelector("#day1wind");
var day1humidity = document.querySelector("#day1humidity");

var day2 = document.querySelector("#day2");
var day2date = document.querySelector("#day2date")
var day2weather = document.querySelector("#day2weather");
var day2temp = document.querySelector("#day2temp");
var day2wind = document.querySelector("#day2wind");
var day2humidity = document.querySelector("#day2humidity");

var day3 = document.querySelector("#day3");
var day3date = document.querySelector("#day3date")
var day3weather = document.querySelector("#day3weather");
var day3temp = document.querySelector("#day3temp");
var day3wind = document.querySelector("#day3wind");
var day3humidity = document.querySelector("#day3humidity");

var day4 = document.querySelector("#day4");
var day4date = document.querySelector("#day4date")
var day4weather = document.querySelector("#day4weather");
var day4temp = document.querySelector("#day4temp");
var day4wind = document.querySelector("#day4wind");
var day4humidity = document.querySelector("#day4humidity");

var day5 = document.querySelector("#day5");
var day5date = document.querySelector("#day5date")
var day5weather = document.querySelector("#day5weather");
var day5temp = document.querySelector("#day5temp");
var day5wind = document.querySelector("#day5wind");
var day5humidity = document.querySelector("#day5humidity");

// Function displays the current day and the next 5 days
function displayDay() {
  $("#currentCityDate").text(moment().format("[(]M/D/YYYY[)]"));
  $("#day1date").text(moment().add(1,"days").format("M/D/YYYY"));
  $("#day2date").text(moment().add(2,"days").format("M/D/YYYY"));
  $("#day3date").text(moment().add(3,"days").format("M/D/YYYY"));
  $("#day4date").text(moment().add(4,"days").format("M/D/YYYY"));
  $("#day5date").text(moment().add(5,"days").format("M/D/YYYY"));
}
setInterval(displayDay, 1000);

// get next five days
var epochCurrent = Math.round((new Date()).getTime() / 1000);
var epochNeg1 = epochCurrent - (86400 * 1)
var epochNeg2 = epochCurrent - (86400 * 2)
var epochNeg3 = epochCurrent - (86400 * 3)
var epochNeg4 = epochCurrent - (86400 * 4)
var epochNeg5 = epochCurrent - (86400 * 5)

// Request url for each city
var requestUrlAustin = "https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc";
var requestUrlChicago = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlNewYork = 'https://api.openweathermap.org/data/2.5/weather?q=New+York+City&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlOrlando = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlSanFrancisco = 'https://api.openweathermap.org/data/2.5/weather?q=San+Francisco&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlSeattle = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlDenver = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlAtlanta = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'

// Now that everything is set up we can grab our information for each city
// Austin
function showResponseAustin(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  fetch(requestUrlAustin)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //gets the lat and lon
      var lon = data.coord.lon;
      var lat = data.coord.lat;
    fetch(requestUrlAustin2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
    });

    fetch(requestUrlAustinNeg1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });
  });
}

// Chicago
function showResponseChicago(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlChicago)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlChicago2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlChicagoNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlChicagoNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlChicagoNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlChicagoNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlChicagoNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlChicago2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlChicagoNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlChicagoNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlChicagoNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlChicagoNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlChicagoNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// New York
function showResponseNewYork(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlNewYork)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlNewYork2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlNewYorkNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlNewYorkNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlNewYorkNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlNewYorkNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlNewYorkNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlNewYork2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlNewYorkNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlNewYorkNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlNewYorkNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlNewYorkNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlNewYorkNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// Orlando
function showResponseOrlando(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlOrlando)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlOrlando2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlOrlandoNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlOrlandoNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlOrlandoNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlOrlandoNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlOrlandoNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlOrlando2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlOrlandoNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlOrlandoNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlOrlandoNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlOrlandoNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlOrlandoNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// San Francisco
function showResponseSanFrancisco(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlSanFrancisco)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlSanFrancisco2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSanFranciscoNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSanFranciscoNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSanFranciscoNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSanFranciscoNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSanFranciscoNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlSanFrancisco2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlSanFranciscoNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSanFranciscoNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSanFranciscoNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSanFranciscoNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSanFranciscoNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// Seattle
function showResponseSeattle(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlSeattle)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlSeattle2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSeattleNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSeattleNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSeattleNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSeattleNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSeattleNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlSeattle2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlSeattleNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSeattleNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSeattleNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSeattleNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSeattleNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// Denver
function showResponseDenver(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlDenver)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlDenver2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlDenverNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlDenverNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlDenverNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlDenverNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlDenverNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlDenver2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlDenverNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlDenverNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlDenverNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlDenverNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlDenverNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// Atlanta
function showResponseAtlanta(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlAtlanta)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlAtlanta2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlAtlantaNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlAtlantaNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlAtlantaNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlAtlantaNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlAtlantaNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
     //writes out the results for the UVI for the current day
      fetch(requestUrlAtlanta2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlAtlantaNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlAtlantaNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlAtlantaNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlAtlantaNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlAtlantaNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

// Search any of the cities
function showResponseSearched(event) {
  // Prevent default action
  event.preventDefault();

  linkInput = citySearchBar.value

  var requestUrlSearched = "https://api.openweathermap.org/data/2.5/weather?q="+linkInput+"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7"

  // Browser Fetch Method for each of the buttons
  //writes out most of the main data currently for the city
  fetch(requestUrlSearched)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {


      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //lat and lon for next api input
      var lon = data.coord.lon;
      var lat = data.coord.lat;


      var requestUrlSearched2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSearchedNeg1 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg1 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSearchedNeg2 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg2 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSearchedNeg3 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg3 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSearchedNeg4 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg4 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
      var requestUrlSearchedNeg5 = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +lat +"&lon=" +lon + "&units=imperial&dt=" + epochNeg5 + "&appid=55838ae1992975e39fe364d4c0e5deb7";
    
      //writes out the results for the UVI for the current day
      fetch(requestUrlSearched2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
        });

        fetch(requestUrlSearchedNeg1)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSearchedNeg2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSearchedNeg3)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSearchedNeg4)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });

        fetch(requestUrlSearchedNeg5)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
          day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
          day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
          day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
        });
    });
}

AustinButton.addEventListener("click", showResponseAustin);
ChicagoButton.addEventListener("click", showResponseChicago);
NewYorkButton.addEventListener("click", showResponseNewYork);
OrlandoButton.addEventListener("click", showResponseOrlando);
SanFranciscoButton.addEventListener("click", showResponseSanFrancisco);
SeattleButton.addEventListener("click", showResponseSeattle);
DenverButton.addEventListener("click", showResponseDenver);
AtlantaButton.addEventListener("click", showResponseAtlanta);
citySearchBarButton.addEventListener("click", showResponseSearched);