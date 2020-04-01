import React from 'react';
import sunny from './../assets/sunny.png';
//import moon from './../assets/moon.png';
import cloudy from './../assets/cloudy.png';
import drizzle from "./../assets/drizzle.png";
import showers from "./../assets/showers.png";
import snowy from "./../assets/snowy.png";
import thunder from './../assets/thunder.png';
import stormy from './../assets/stormy.png';

function WeatherApp(props){
    const day = props.date.getDay();
    const date = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getUTCFullYear();
    const displayMonth = month === 0 ? "January" : month === 1 ? "February" : month === 2 ? "March" : month === 3 ? "April" : month === 4 ? "May" : month === 5 ? "June" : month === 6 ? "July" : month === 7 ? "August" : month === 8 ? "September" : month === 9 ? "October" : month === 10 ? "November" : month === 11 ? "December" : "";
    const displayDay = day === 1 ? "Monday" : day === 2 ? "Tuesday" : day === 3 ? "Wednesday" : day === 4 ? "Thursday" : day === 5 ? 'Friday' : day === 6 ? "Saturday" : day === 7 ? "Sunday" : "";
    return(
        <div className="body-warm">
            <div className= {props.weatherData.cod === "200" ? props.weatherData.list[0].main.temp < 0 ? "body-minus" : props.weatherData.list[0].main.temp < 10 ? "body-cold" : props.weatherData.list[0].main.temp < 30 ? "body-warm" : props.weatherData.list[0].main.temp >= 30 ? "body-hot" : "" : ""}>
                <main className="main">
                    <div className="data">
                        <input type="text" 
                            placeholder="Search..." 
                            name="name" 
                            value={props.city} 
                            onChange={props.setState} 
                            onKeyPress={props.handleEvent}
                        />
                        {props.weatherData.cod === "200" ?
                            <React.Fragment>
                                <div className="today">
                                <h1>{props.loading ? "loading..." : props.weatherData.list[0].name}, {props.weatherData.list[0].sys.country}</h1>
                                    <div className="todayDay">
                                        <p>{displayDay} {date} {displayMonth} {year}</p>
                                    </div>
                                </div>
                                <div className="temp">
                                    <div>
                                        <img alt="Condition" src={props.weatherData.cod === "200" ? 
                                            props.weatherData.list[0].weather[0].id >= 200 && props.weatherData.list[0].weather[0].id <= 232 ? thunder : 
                                            props.weatherData.list[0].weather[0].id >= 300 && props.weatherData.list[0].weather[0].id <= 321 ? drizzle :
                                            props.weatherData.list[0].weather[0].id >= 500 && props.weatherData.list[0].weather[0].id <= 531 ? showers :
                                            props.weatherData.list[0].weather[0].id >= 600 && props.weatherData.list[0].weather[0].id <= 622 ? snowy :
                                            props.weatherData.list[0].weather[0].id >= 701 && props.weatherData.list[0].weather[0].id <= 781 ? stormy :
                                            props.weatherData.list[0].clouds.all > 30 ? cloudy :
                                            props.weatherData.list[0].weather[0].id = 800  ? sunny :
                                             ""
                                            : "" } 
                                        />
                                        <h2>{Math.round(props.weatherData.list[0].main.temp)}&#176;c</h2> 
                                    </div>
                                    <div>
                                        <h3><strong>{props.loading ? "loading..." : props.weatherData.list[0].weather[0].main} </strong></h3>
                                        <br/>
                                        <p>Feels like: <strong>{Math.round(props.weatherData.list[0].main.feels_like)}&#176;c</strong> </p>
                                        <p>Humidity: <strong>{props.weatherData.list[0].main.humidity}%</strong></p>
                                        <p>Wind: <strong>{props.weatherData.list[0].wind.speed} km/h</strong></p>
                                    </div>
                                </div>
                            </React.Fragment>
                        : ""}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default WeatherApp;
