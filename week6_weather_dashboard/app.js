// Goal is to display the weather details of whatever the user typed in


const form = document.getElementById("form-city"); 
const inputCity = document.getElementById("input-city"); 

const dateTodayEl = document.getElementById("today-city-and-date"); 
const tempTodayEl = document.getElementById("today-temp"); 
const windTodayEl = document.getElementById("today-wind"); 
const humidityTodayEl = document.getElementById("today-humidity"); 
const uvTodayEl = document.getElementById("today-uv"); 

const apiKey = "BYO API";


// when user type in a city name
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    // we want to grab the city name, 
    const city = inputCity.value;
    
    
    // and call the weather dashboard api
    getWeather(city)
        .then(function(weatherData){
            // once we got the result
            // we want to show the result inside our dashboard
            // 2 parts
            // 1. today's forecast
            // temp
            tempTodayEl.textContent = toCelcius(weatherData.current.temp).toFixed(2) + ' C';
            // wind
            windTodayEl.textContent = weatherData.current.wind_speed;
            // humidity
            humidityTodayEl.textContent = weatherData.current.humidity;
            // uv index
            uvTodayEl.textContent = weatherData.current.uvi;

            // 2. 5 days forecasts
            // temp
            // icon
            // wind
            // humidity

            // 5 days forecast
            // uvi of today's weather
        })
        .catch(function(err){
            // handle error

            console.log('eoerrrr');

        })


})

{/* <div class="col col-4 card">
    
    <div class="card-body">
        <h4 class="card-title">2021/09/12</h4>
        <i>Icon</i>
        <p class="card-text">
            <ul>
                <li>Temp: </li>
                <li>Wind: </li>
                <li>Humidity</li>
            </ul>
        </p>
    </div>

</div> */}
function createForecastCard(date, icon, temp, wind, humidity){

}

function getCurrentWeatherApi(city){
    
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    ).then(function(response) {
        return response.json();
    });
}

function getOneCallApi(longitude, latitude){
    return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`
    ).then(function(response){
        return response.json()
    });
}

function toCelcius(kelvin){
    return kelvin - 273.15;
}

function getWeather(city){
    // to retrive all the data we want

    // call the current weather api
    return getCurrentWeatherApi(city)
        .then(function(currentWeatherResponse){
            // // wind
            // const wind = currentWeatherResponse.wind.speed
            // // today's temp
            // const temp = currentWeatherResponse.main.temp

            // // / humidity
            // const humidity = currentWeatherResponse.main.humidity;

            // coord
            const coord = currentWeatherResponse.coord;

        
            // then we use the coord to call oneCall
            return getOneCallApi(coord.lon, coord.lat)
                            

        })

}




