import React, { Component } from "react";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }


  getQuote = async () => {

    const headers = {
      // "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
      // "x-rapidapi-key": "520b6e900fmshd462807b7457b2bp156dc0jsnb5139512062f"
    }
    const url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'
    const api_call = await fetch(`${url}`, {
      "method": "GET",
      "headers": headers
    });

    const data = await api_call.json();
    console.log(data);
    
    if (data.statusCode == 200) {
      let quote = data.quote.quoteText;
      let author = data.quote.quoteAuthor;
      this.setState({
        quote: quote,
        author: author
      })
    }
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.getQuote(),
    //   5000
    // );
    this.getQuote()
  }
  componentWillUnmount() {
    // clearInterval(this.timerID);
  }
  render() {

    return (
      <div className="quote-wrapper">
        <p className="quote">{this.state.quote != '' ? `"${this.state.quote}"` : ''}</p>
        <p className="author">{this.state.author != '' ? `- ${this.state.author}` : ''}</p>
      </div>

    );
  }
}
