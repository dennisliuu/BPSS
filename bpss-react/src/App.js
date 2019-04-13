import React, { Component } from 'react';
// CSS
import './App.css';
import './normalize.css'
import './skeleton.css'

// JS
import Landing from './Landing'
import Trynow from './Trynow'
import Intro from './Intro'
import Blocktable from './Blocktable'
import Team from './Team'
import More from './More'

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="button backtop slideUP" href="#"><i className="fas fa-arrow-up"></i></a>
        <Landing />
        <div className="container-sm" id="trynow">
          <Trynow />
        </div>
        <div className="container-sm" id="intro">
          <Intro />
        </div>
        <div className="container-sm" id="blocktable">
          <Blocktable />
        </div>
        <div className="container-sm overflow-h" id="team">
          <Team />
        </div>
        <div className="container" id="more">
          <More />
        </div>
      </div >
    );
  }
}

export default App;
