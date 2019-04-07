import React, { Component } from 'react';
// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'
import undraw_creative_experiment from './undraw_creative_experiment.svg'

class Trynow extends Component {
    render() {
      return (
        <div className="mt-10">
          <h5>Try now!</h5>
          <p>Nothing to read. Just give it a free try.</p>
          <a class="button" href="https://fathomless-lake-78876.herokuapp.com/" target="_blank">Here to go <i class="fas fa-chevron-right"></i></a>
          <img src={undraw_creative_experiment} className="try-logo" alt="logo" />
        </div>
      )
    }
  }
  
  export default Trynow;