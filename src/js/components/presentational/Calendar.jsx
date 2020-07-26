import React, { Component } from "react";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      day: '',
      year: '',
      month: '',
      calendar: []
    }
  }


  getCalendar = async () => {

    const api_key = 'AIzaSyAHIB2qQp3jHsiLjn74eHZFT7gXFlpQYUg'
    // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=alexandria,usa&appid=${API_KEY}&units=imperial`);
    // const data = await api_call.json();
  }

  getToday = () => {
    let date = new Date();
    var month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    this.setState({
      day:  date.getDate(),
      year: date.getFullYear(),
      month: month[date.getMonth()]
    })
  }
  
  componentDidMount() {
    // this.getCalendar();
    this.getToday();
  }
  render() {

    return (
      <div className="calendar-wrapper">
        <p className="month">{this.state.month}</p>
        <p className="day">{this.state.day}</p>
        <p className="year">{this.state.year}</p>
      </div>

    );
  }
}
