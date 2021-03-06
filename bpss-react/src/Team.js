import React, { Component } from "react";
// CSS
import "./normalize.css";
import "./skeleton.css";
import "./App.css";

class Trynow extends Component {
  render() {
    return (
      <div className="mt-10">
        <h5>Team</h5>
        <p>
          We had opportunity to work with a number of members from lab 206 and
          we are pround of working together on this project.
        </p>
        <a
          className="button btn-dark "
          href="https://sites.google.com/mail.ntut.edu.tw/desl/home?fbclid=IwAR3BpTjgpF4Prb3N3bm0oVil0CUYapB2hEKLhL1Bavjl1sF3HbZcFsz5dm8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our lab
        </a>
        <div className="container-team">
          <div className="team-col border mt-10">
            <div className="m-3">
              {/* <img src={"https://via.placeholder.com/350"} alt="imgplaceholder" /> */}
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a className="" href="#" target="_blank" rel="noopener noreferrer">more</a>
              </div>
            </div>
          </div>
          <div className="team-col border">
            <div className="m-3">
              {/* <img src={"https://via.placeholder.com/350"} alt="imgplaceholder" /> */}
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a className="" href="#" target="_blank">more</a>
              </div>
            </div>
          </div>
          <div className="team-col border ml-49 mt-_10">
            <div className="m-3">
              {/* <img src={"https://via.placeholder.com/350"} alt="imgplaceholder" /> */}
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a className="" href="#" target="_blank">more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trynow;
