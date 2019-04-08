import React, { Component } from 'react';
// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'

import key from './key.svg'
import blockchain from './bitcoins.svg'
import tools from './tools.svg'
import json from './json-file.svg'

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      papers: 0
    }
  }
  async componentDidMount() {
    await fetch('https://fathomless-lake-78876.herokuapp.com/blockchains')
      .then(response => response.json())
      .then(data => {
        let blockHeight = data.length
        this.setState({ height: blockHeight })
      });
    await fetch('https://fathomless-lake-78876.herokuapp.com/blocks')
      .then(response => response.json())
      .then(data => {
        let paperHeight = data.length
        this.setState({ papers: paperHeight })
      });
  }
  render() {
    return (
      <div className="mt-10">
        <div class="row">
          <div class="two columns"><h5>Intro.</h5></div>
          <div class="ten columns">
            <p>
              How to ensure that all co-authors have agreed the submission of a research work to a conference or journal is an important issue?
            <br />
              How to ensure that reviewers and journal editors cannot plagiarize the submissions under review is also an important issue?
            <br />
              In this work, we shall focus on common academic ethic rules, and propose a blockchain-based system to detect or prevent from the violations of academic ethical rules. To verify the feasibility and efficacy of the proposed system, a prototype system is under implementation as well.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="two columns"><strong>{this.state.height}</strong><br /> Blocks</div>
          <div class="ten columns">
            <div class="row">
              <div class="one-half column">
                <img src={key} className="intro-logo" alt="RSA" />
                <br />
                <strong>RSA algroithm</strong>
                <p>Use RSA encryption to ensure personal data</p>
              </div>
              <div class="one-half column">
                <img src={blockchain} className="intro-logo" alt="RSA" />
                <br />
                <strong>Blockchain</strong>
                <p>Blockchain-based system to detect or prevent from the violations of academic ethical rules</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="two columns"><strong>{this.state.height}</strong><br /> Papers</div>
          <div class="ten columns">
            <div class="row">
              <div class="one-half column">
                <img src={tools} className="intro-logo" alt="RSA" />
                <br />
                <strong>Relayer-cli</strong>
                <p>Custom cli tool to send or receive papers</p>
              </div>
              <div class="one-half column">
                <img src={json} className="intro-logo" alt="RSA" />
                <br />
                <strong>Open Repo</strong>
                <p>All blockchain are opened! You can visit from
                <a href="https://fathomless-lake-78876.herokuapp.com/blockchains" target="_blank"> Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;