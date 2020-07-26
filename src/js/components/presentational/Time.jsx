import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: new Date()
    }
  }
  
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    // var checkTime = (i) => {
    //   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    //   return i;
    // }
    // var h = this.state.hours;
    // var m = this.state.minutes;
    // var s = this.state.seconds;
    // // m = checkTime(m);
    // // s = checkTime(s);
    // let date = new Date();
    // console.log(date.toTimeString())
    // var time = date.getHours() + ":" + date.getMinutes();
    // console.log(time);
    // console.log(h, m, s);

    
    return (
      <div className="time-wrapper">
        <p id="time-stamp">{this.state.date.toLocaleTimeString()}</p>
      </div>

    );
  }
}
