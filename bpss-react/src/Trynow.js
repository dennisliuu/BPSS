import React, { Component } from 'react';
// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'
import undraw_creative_experiment from './undraw_creative_experiment.svg'

class Trynow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      organization: '',
      phone: '',
      email: '',
      abstraction: '',
      orcid: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      name: event.target.name,
      organization: event.target.organization,
      phone: event.target.phone,
      email: event.target.email,
      abstraction: event.target.abstraction,
      orcid: event.target.orcid
    });
  }

  handleSubmit(event) {
    alert('Hi ' + this.state.orcid + ' ,your post is submitted!');
    event.preventDefault();
    fetch('https://fathomless-lake-78876.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
        name: this.state.name,
        organization: this.state.organization,
        phone: this.state.phone,
        email: this.state.email,
        abstraction: this.state.abstraction,
        orcid: this.state.orcid
      })
    })
  }
  render() {
    return (
      <div className="mt-10">
        <h5>Try now!</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label>Name</label>
              <input className="u-full-width" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="six columns">
              <label>Organization</label>
              <input className="u-full-width" type="text" placeholder="Organization" value={this.state.organization} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label>Phone</label>
              <input className="u-full-width" type="tel" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
            </div>
            <div className="six columns">
              <label>Email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
          <label>Abstraction</label>
          <input className="u-full-width" type="text" placeholder="About this post" value={this.state.abstraction} onChange={this.handleChange} />
          <label>ORCID</label>
          <input className="u-full-width" type="text" placeholder="About this post" value={this.state.orcid} onChange={this.handleChange} />
          <input className="button btn-dark u-pull-right" type="submit" value="Submit"></input>
        </form>
        <p>Nothing to read. Just give it a free try.</p>
        <a className="button btn-dark" href="https://fathomless-lake-78876.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here to go &nbsp;<i className="fas fa-chevron-right"></i></a>
        <img src={undraw_creative_experiment} className="try-logo" alt="logo" />
      </div>
    )
  }
}

export default Trynow;