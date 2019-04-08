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
          class="button btn-dark "
          href="https://fathomless-lake-78876.herokuapp.com/"
          target="_blank"
        >
          Visit our lab
        </a>
        <div className="container-team">
          <div className="team-col border mt-10">
            <div className="m-3">
              <img src={"https://via.placeholder.com/350"} />
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a class="" href="#" target="_blank">more</a>
              </div>
            </div>
          </div>
          <div className="team-col border">
            <div className="m-3">
              <img src={"https://via.placeholder.com/350"} />
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a class="" href="#" target="_blank">more</a>
              </div>
            </div>
          </div>
          <div className="team-col border ml-49 mt-_10">
            <div className="m-3">
              <img src={"https://via.placeholder.com/350"} />
              <div className="content text-left">
                <h5>Wei-Jen Liu</h5>
                <p>北科理組文青</p>
                <a class="" href="#" target="_blank">more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trynow;
