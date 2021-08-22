// Variables
const today = moment().format('dddd, MMM Do YYYY');

$(".history-btn").on('click', function() {
  const text = $(this).text();
  localStorage.clear();
  searchApi(text);
  saveToHistory(text);
  
});


$('#btn-search').on('click', function() {
  localStorage.clear();
  const searchVal = $('#txt-search').val()
  const validInput = $('<span>').addClass('valid-input').text(`Please enter a valid input`);
  $('.valid-input').remove();
  if(searchVal == "") {
    
    $('.list-group').children().eq(2).append(validInput);
    return;
  }
  saveToHistory(searchVal)
  searchApi(searchVal);
});

// UV API
function uvDisplay(txtSearchEl) {
  const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${txtSearchEl}?unitGroup=us&key=LN5SPL4X8SJDJALJ9THXY4WDC`;

  fetch(request)
    .then(res => res.json()) 


    .then(data => { 
      
      $('.card-uv').empty();
      let uvIndex = $('<p>').addClass('card-uv').text(`UV: ${data.days[0].uvindex}`)
      // console.log(data.days[0].uvindex);
      $('.card-body').append(uvIndex)
      let uvGrade = data.days[0].uvindex;
      let uvClass = $('.card-uv');

      if (uvGrade <= 2) {
        
        uvClass.css('background', "#008000")  ;
      } else if (uvGrade <= 4) {
        
        uvClass.css('background', "#FFFF00");
        uvClass.css('color', "#000");
        
      } else if (uvGrade <= 6) {
        
        uvClass.css('background', "#FFA500");
      } else if (uvGrade <= 8) {
        
        uvClass.css('background', "#AA0000");
      } else if (uvGrade <= 10) {
        
        uvClass.css('background', "#800080");
      } else {
        
      }   
  })

    .catch(function (error) {
      console.error(error);
    });

}




// Generate Cards
function searchApi(txtSearchEl) {
  
  const request = `https://api.openweathermap.org/data/2.5/forecast?q=${txtSearchEl}&units=imperial&appid=904d57a990eb1f14578feeb79ec45ef2`;
  $('#card-weather').css('visibility', 'visible');

  fetch(request)
    .then(res => res.json()) 
    
    .then(data => { 
      // Clearing data before searching again
      $('#card-weather').empty();

      let card = $('<div>').addClass('card-body');
      let cardCity = $('<h2>').addClass('card-city').text(`${data.city.name}`);
      let title = $('<h5>').addClass('card-today').text(today);
      let temp = $('<p>').addClass('card-temp').text(`Temp: ${data.list[0].main.temp}°F`);
      let wind = $('<p>').addClass('card-wind').text(`Wind: ${data.list[0].wind.speed}M/H`);
      let humid = $('<p>').addClass('card-humid').text(`Humid: ${data.list[0].main.humidity}%`);
      let icon = $('<img>').addClass('card-icon').attr({ src: `./Assets/Images/${data.list[0].weather[0].icon}.png`});
      card.append(cardCity, title, temp, wind, humid);
      $('#card-weather').append(card);
      $('.card-city').append(icon);
      

  })

    .catch(function (error) {
      console.error(error);
    });

    secondFetch(txtSearchEl);
}

function secondFetch(txtSearchEl) {
  const request = `https://api.openweathermap.org/data/2.5/forecast?q=${txtSearchEl}&units=imperial&appid=904d57a990eb1f14578feeb79ec45ef2`;
  $('#five-day-forecast').empty();
  $('#card-weather').css('visibility', 'visible');
  $('#five-day-forecast').css('visibility', 'visible');
  $('#card-weather').empty();
  fetch(request)
    .then(res => res.json()) 
    


    .then(data => { 
    
      $('#five-day-forecast').empty();
      let fiveDayP = $('<p>').addClass('fiveDayP').text("5-Day Forecast: ")
      let cardForecastDiv = $('<div>').addClass('d-flex width justify-content-around align-self-start');
      let hrEl = $('<hr>').addClass('').text("")
      $('#card-weather').append(hrEl, fiveDayP);
      
      for ( let x = 0  ; x <= 39 ; x+=8) {
      
      let dateWeather = new Date.parse(data.list[x].dt_txt).toString();
      
      dateWeather = dateWeather.split(' ').slice(1, 4).join(' ');


      let cardForecast = $('<div>').addClass('cards');
      let dateForecast = $('<h5>').addClass('card-today-forecast').text(`${dateWeather}`);
      let tempForecast = $('<p>').addClass('card-temp').text(`Temp: ${data.list[x].main.temp}°F`);
      let windForecast = $('<p>').addClass('card-wind').text(`Wind: ${data.list[x].wind.speed}M/H`);
      let humidForecast = $('<p>').addClass('card-humid').text(`Humidity: ${data.list[x].main.humidity}%`);
      let iconForecast = $('<img>').addClass('card-icon').attr({ src: `./Assets/Images/${data.list[x].weather[0].icon}.png` });

      cardForecast.append(dateForecast,iconForecast, tempForecast, windForecast, humidForecast);
      cardForecastDiv.append(cardForecast);

      $('#card-weather').append(cardForecastDiv);
      
  }
  uvDisplay(txtSearchEl);
})
    .catch(function (error) {
      const validInput = $('<span>').addClass('valid-input').text(`Not A Valid City Please Try Again`);
      $('.list-group').children().eq(2).append(validInput);
      $('#five-day-forecast').css('visibility', 'hidden');
      console.error(error);
    });
    
  }

// Check if search has a valid input
function validInput() {

  let txtSearchEl = document.querySelector('#txt-search');
  txtSearchEl = txtSearchEl.value;
  if (!txtSearchEl) {
    console.error('Please enter a value.')

    return;
  }

  searchApi(txtSearchEl);
  saveToHistory(txtSearchEl);
}

//Save to search to local storage

function saveToHistory(txtSearchEl) {

  let historyLS = JSON.parse(localStorage.getItem("historyLS")) || [];
  let cityEl = txtSearchEl;

  let newHistory = {
    city: cityEl
  };

  historyLS.push(newHistory);
  localStorage.setItem('historyLS',JSON.stringify(historyLS));

}



// Showing the last city when refreshed
function onLoad() {
  $('#card-weather').empty();
  if (localStorage.getItem("historyLS") === null) {
      return;
  };

  let historyLS = JSON.parse(localStorage.getItem("historyLS") || []);
  let cityHistory = historyLS[0].city;
  // console.log(cityHistory);
  searchApi(cityHistory);

}

onLoad();