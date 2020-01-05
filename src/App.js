import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a4feeee8a5b986648b66f16a7e34560c";



class App extends React.Component {
  state = {
    temperature : undefined,
    humidity    : undefined,
    description : undefined,
    city        : undefined,
    country     : undefined,
    error       : undefined
    
  }
  getWeather = async (e) => {
 
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      e.preventDefault();
      const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      if (data.cod !== '404') {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        country: data.sys.country,
        city: data.name,
        description: data.weather[0].description,
        error : "" 
      });
    }
    else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        country: undefined,
        city: undefined,
        description: undefined,
        error : "Please enter a value" 
      });   
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                    <Weather 
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    country={this.state.country}
                    city={this.state.city}
                    description={this.state.description}
                    error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

}
export default App;