import React, { Component } from 'react';
// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'
import undraw_creative_experiment from './undraw_creative_experiment.svg'

class Trynow extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetch('https://fathomless-lake-78876.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.value
      })
    })
  }
  render() {
    return (
      <div className="mt-10">
        <h5>Try now!</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Your email</label>
          <input className="u-full-width" type="email" placeholder="test@mailbox.com" value={this.state.value} onChange={this.handleChange} />
          <input className="button btn-dark" type="submit" value="Submit"></input>
        </form>
        <p>Nothing to read. Just give it a free try.</p>
        <a className="button btn-dark" href="https://fathomless-lake-78876.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here to go &nbsp;<i className="fas fa-chevron-right"></i></a>
        <img src={undraw_creative_experiment} className="try-logo" alt="logo" />
      </div>
    )
  }
}

export default Trynow;