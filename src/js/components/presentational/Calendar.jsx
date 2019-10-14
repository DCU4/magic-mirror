import React, { Component } from "react";

const CALENDAR_ID = '695573733195-bcosc8sjla6b248jm2p6guf56m99dcon.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAHIB2qQp3jHsiLjn74eHZFT7gXFlpQYUg';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      events: []
    }
  }
  
  

  // getDate = (e) => {


  // }

  // componentDidMount() {

  //   this.getDate();
  // }

  render() {
    let date = new Date();
    

    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var day = date.getDate();
    var year = date.getFullYear();
    var mon = month[date.getMonth()]

    return (
      <section className="calendar">
        <p className="month">{mon}</p>
        <p className="day">{day}</p>
        <p className="year">{year}</p>

      </section>

    );
  }
}
