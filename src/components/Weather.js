import  React from "react";

const Weather = (props) => (
        <div className="weather__info">
        {
        props.country&& props.city &&<p className="weather__key"> Location :
                <span className="weather_value"> {props.city},{props.country}</span>
                </p>
        }
        {
        props.temperature&&<p className="weather__key"> Temperature :
                <span className="weather_value"> {props.temperature}</span>
                </p>
        } 
        {
        props.humidity&&<p className="weather__key"> Humidity :
                <span className="weather_value"> {props.humidity}</span>
                </p>
        }
        {
        props.description&&<p className="weather__key"> Conditions :
                <span className="weather_value"> {props.description}</span>
                </p>
        }
        {
        props.error&&<p className="weather__error">
                <span>{props.error}</span>
                </p>
        }
        </div>
);
export default Weather;