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
      fullname: '',
      organization: '',
      phone: '',
      email: '',
      abstraction: '',
      orcid: '',
      paper_txt: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleOrganizationChange = this.handleOrganizationChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAbstractionChange = this.handleAbstractionChange.bind(this);
    this.handleOrcidChange = this.handleOrcidChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ 
      fullname: event.target.value
    })
  }
  handleOrganizationChange(event) {
    this.setState({ 
      organization: event.target.value
    })
  }
  handlePhoneChange(event) {
    this.setState({ 
      phone: event.target.value
    })
  }
  handleEmailChange(event) {
    this.setState({ 
      email: event.target.value
    })
  }
  handleAbstractionChange(event) {
    this.setState({ 
      abstraction: event.target.value
    })
  }
  handleOrcidChange(event) {
    this.setState({ 
      orcid: event.target.value
    })
  }
  handleFileChange(event) {
    this.setState({
      paper_txt: 'hi'
    })
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
        fullname: this.state.fullname,
        org: this.state.organization,
        tel: this.state.phone,
        email: this.state.email,
        abstract: this.state.abstraction,
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
              <label>Full name: {this.state.fullname}</label>
              <input className="u-full-width" type="text" placeholder="Full Name" value={this.state.fullname} onChange={this.handleNameChange} />
            </div>
            <div className="six columns">
              <label>Organization</label>
              <input className="u-full-width" type="text" placeholder="Organization" value={this.state.organization} onChange={this.handleOrganizationChange} />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label>Phone</label>
              <input className="u-full-width" type="tel" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange} />
            </div>
            <div className="six columns">
              <label>Email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
          </div>
          <label>Abstraction</label>
          <input className="u-full-width" type="text" placeholder="About this post" value={this.state.abstraction} onChange={this.handleAbstractionChange} />
          <label>ORCID</label>
          <input className="u-full-width" type="text" placeholder="Your ORCID" value={this.state.orcid} onChange={this.handleOrcidChange} />
          <label>File</label>
          <input className="u-full-width" type="file" onChange={this.handleFileChange} />
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