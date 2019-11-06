import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Folder from "../container/Folder.jsx;"
import Calendar from "../presentational/Calendar.jsx";
import Weather from "../presentational/Weather.jsx";
import Time from "../presentational/Time.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.addClasses = this.addClasses.bind(this);
  }
  render() {

    return (
      <main className="container">
        {/* // <header> */}
          {/* im thinking like, calendar and weather on top */}
          
          <Weather />
          <Time />
          <Calendar />
        {/* // </header> */}

        
       </main>
      );
  }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;