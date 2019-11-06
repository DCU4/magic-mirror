import React, { Component } from "react";

const API_KEY = '55f630c614c9ef35570a0ea5e189ade3';

export default class Calendar extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      showMoreWeather:false,
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      temp: undefined,
      pressure: undefined,
      temp_max: undefined,
      temp_min: undefined,
      error: undefined,
      
      class: ''
    };
  }

  

  getWeather = async (e) => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=alexandria,usa&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (data){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        error: undefined,
        class:'submitted showing '
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        humidity: data.main.humidity,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        error: "Please enter a City and Country Code",
        class: ''
      });
    }
  }


  handleShowWeather = () => {
    // let showMoreWeather = this.state.showMoreWeather;
    // console.log(this.state.showMoreWeather);
    this.setState({
      showMoreWeather: !this.state.showMoreWeather ? true : false
    });

  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const deg = <sup>&#176;</sup>; //degree symbol
    let temp = Math.floor(this.state.temperature);
    let showMoreWeather = this.state.showMoreWeather;

    return (
      <main>
        
{!showMoreWeather ? (
  <section className="weather-info" onClick={this.handleShowWeather} onTouchStart={this.handleShowWeather}>
  <p className="city">{this.state.city}</p>
  <p className="temp">{temp}{deg}</p>
  <p className="description">{this.state.description}</p>
  
</section>

) : (

  <section className="more-weather-info" onClick={this.handleShowWeather} onTouchStart={this.handleShowWeather}>
  <p className="humidity">Humidity: {this.state.humidity}%</p>
  <p className="temp-max">Max Temp: {this.state.temp_max}{deg}</p>
  <p className="temp-min">Min Temp: {this.state.temp_min}{deg}</p>
</section>
)}
     


    
    
      </main>
      
    );
  }
}
