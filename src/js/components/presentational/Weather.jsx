import React, { Component } from "react";

const API_KEY = '55f630c614c9ef35570a0ea5e189ade3';

export default class Calendar extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      class: ''
    };
  }

  

  getWeather = async (e) => {
    // e.preventDefault();
    // console.log(e.target);
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=alexandria,usa&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (data){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
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
        error: "Please enter a City and Country Code",
        class: ''
      });
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const deg = <span>&#176;</span>; //degree symbol
    let temp = Math.floor(this.state.temperature);

    return (
      <section className="weather">
        <p className="city">{this.state.city}</p>
        <p className="temp">{temp}<span>{deg}</span></p>
        <p className="description">{this.state.description}</p>
        
        {/* Output data from calendar api */}
      </section>
    );
  }
}
