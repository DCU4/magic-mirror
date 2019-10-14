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
  
  authInited = gapiPromise.then(function(){
    gapi.auth2.init({
        client_id: CALENDAR_ID
      });
  })

  getCalendar = async (e) => {


    // const api_call = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}&key=${API_KEY}`, {
    //   headers : {
    //     'Authorization': 'Oauth ${CALENDAR_ID}'
    //   }
    // });
    // const data = await api_call.json();
    // console.log(data);
    // if (data){
    //   this.setState({
    //     // calendar: data.main.temp,
    //     class: undefined,
    //   });
    // } else {
    //   this.setState({
    //     // calendar: undefined,
    //     class: undefined,

    //   });
    // }


    let that = this;
  function start() {

    gapi.client.init({
      'apiKey': API_KEY
    }).then(function() {
      return gapi.client.request({
        'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
      })
    }).then( (response) => {
      let events = response.result.items
      that.setState({
        events
      }, ()=>{
        console.log(that.state.events);
      })
    }, function(reason) {
      console.log(reason);
    });
  }
  window.gapi.load('client', start)
  }

  componentDidMount() {

    this.getCalendar();
  }

  render() {

    // if (!this.props || this.props.note == undefined) {
    //   return null; //You can change here to put a customized loading spinner
    // }

    return (
      <section>
        {/* <p>Calendar
        id
695573733195-bcosc8sjla6b248jm2p6guf56m99dcon.apps.googleusercontent.com

secret
kBLZL5b45eUjEbH1-oT1kPb7

api key = AIzaSyAHIB2qQp3jHsiLjn74eHZFT7gXFlpQYUg
        </p> */}
      {/* Output data for weather from api */}
      </section>

    );
  }
}
