import React, { Component } from 'react';

// CSS
import './normalize.css'
import './skeleton.css'
import './App.css'
// SVG
import undraw_connected_world from './undraw_connected_world.svg'

class Landing extends Component {
	render() {
		return (
			<div className="landing">
				<div className="container">
					<nav className="navbar pt-1">
						<ul className="navbar-list">
							<li className="navbar-item">
								<p className="navbar-link nav-brand" href="#">BPASS</p>
							</li>
							<li className="navbar-item">
								<a className="navbar-link" href="#trynow">Try now!</a>
							</li>
							<li className="navbar-item">
								<a className="navbar-link" href="#intro">Intro</a>
							</li>
							<li className="navbar-item">
								<a className="navbar-link" href="#blocktable">Blocktable</a>
							</li>
							<li className="navbar-item">
								<a className="navbar-link" href="#team">Team</a>
							</li>
							<li className="navbar-item">
								<a className="navbar-link" href="#more">More</a>
							</li>
							<li className="navbar-item u-pull-right">
								<a className="navbar-link nav-github" href="#"><i className="fab fa-github"></i></a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="container">
					<div className="row">
						<div className="one column mt-10">
							<div className="circle bg-dark">
								<i className="fas fa-lock color-w"></i>
							</div>
							<br />
							<div className="circle bg-white">
								<i className="fas fa-lock-open up-down"></i>
							</div>
						</div>
						<div className="six columns mt-10">
							<h2>Blockchain-based <br /> paper submission system</h2>
							<h6>Innovation, <strong><u>Blockchain</u></strong>, Encryption</h6>
						</div>
						<div className="five columns">
							<img src={undraw_connected_world} className="bitcoin-logo" alt="bitcoin" />
						</div>
					</div>
				</div>
				<div className="container-Spon bg-dark">
					<div className="bg-white spon-col">&#9400; Dennis 2019</div>
					<div className="bg-white spon-col"><i className="far fa-hand-point-down arrowBounce"></i> <a className="scroll-link" href="#trynow">Scroll down</a></div>
					<div className="bg-dark color-w spon-col">Sponsor</div>
					<div className="bg-dark color-w spon-col">Sponsor</div>
					<div className="bg-dark color-w spon-col">Sponsor</div>
					<div className="bg-dark color-w spon-col">Sponsor</div>
				</div>
			</div>
		)
	}
}

export default Landing;