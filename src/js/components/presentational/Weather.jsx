import React, { Component } from "react";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ""
    }
  }

  // deleteNote = del => {

  //   let id = this.props.id;
  //   if (!this.props || id == undefined) {
  //     return null; //You can change here to put a customized loading spinner
  //   }
  //   let url = 'https://localhost:8080' + id;
  //   // let url = "https://dc-notes.herokuapp.com/" + id + "/?_method=DELETE";
  //   fetch(url, {
  //     method: "POST",
  //     mode: "no-cors", // no-cors, cors, *same-origin
  //     // credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     }
  //   })
  //   .then(res => res.json())
  //   .catch(function(error) {
  //     console.error("Error:", error);
  //   }).then(this.setState({
  //     delete: !this.state.delete ? true : false
  //   }));
    
  // }


  render() {

    if (!this.props || this.props.note == undefined) {
      return null; //You can change here to put a customized loading spinner
    }

    return (
      <section>
      {/* Output data for weather from api */}
      </section>

    );
  }
}
