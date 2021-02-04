// 8419454c18ba40345f6c6460ccf842ad
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var searchValue = "Philadelphia";

function weatherAPICall(searchValue) {
  // function to call API
  fetch(
    ("http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8419454c18ba40345f6c6460ccf842ad&units=imperial")
  )
  .then(function (response) {
   
    return response.json();
    })
    .then(function (data) {
      console.log(data.city.coord);
      console.log(data.list[3]);

    });
  }
  // call function
  weatherAPICall(searchValue);
  
// create another function (getCityName) that gets value from input element in html, ie if i type philadelphia in html, js must take thisvalue
// store it in a variable, 
// run the weatherAPICall function, t
// attach an onclick event to this button, this on click event should run getCityName function