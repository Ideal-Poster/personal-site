import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import anime from 'animejs';
import CircleType from 'circletype';

import charming from 'charming';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons"

library.add(faLongArrowAltDown)


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// Equation of a line (y = mx + b ).
const lineEq = (y2, y1, x2, x1, currentVal) => {
	const m = (y2 - y1) / (x2 - x1);
	const b = y1 - m * x1;
	return m * currentVal + b;
};

const chars = ['-','+','1','2','3','4','5','6','7','8','9'];
const charsTotal = chars.length;

const randomizeLetters = (letters) => {
	return new Promise((resolve, reject) => {
		const lettersTotal = letters.length;
		let cnt = 0;

		letters.forEach((letter, i) => { 
			let loopTimeout;
			
			const loop = async () => {
				letter.innerHTML = await chars[getRandomInt(0,charsTotal-1)];
				loopTimeout = await setTimeout(loop, getRandomInt(50,400));
			};

			loop();

			const timeout = setTimeout(() => {
				clearTimeout(loopTimeout);
				letter.style.opacity = 1;
				letter.innerHTML = letter.dataset.initial;
				++cnt;
				if ( cnt === lettersTotal ) resolve();
			}, i*lineEq(200,0,8,500,lettersTotal) + 2000);
		});
	});
};

class Home extends React.Component {

	constructor() {
		super();
		this.init();
	}

	componentDidMount() {
		anime({
			targets: '.splashpage-banner',
			translateX: 'calc(-100% - 18px)',
			duration: '18000',
			easing: 'linear',
			loop: true
		});

		// Instantiate `CircleType` with an HTML element.
		// const circleType = new CircleType(document.getElementById('scroll-down'));
		// Set the text radius and direction. Note: setter methods are chainable.
		// circleType.radius(86).dir(1);
	}

	// componentDidMount() {
	// 	this.DOM = document.getElementById('splash-container');
	// 	this.DOM.number = this.DOM.querySelector('#number');
	// 	charming(this.DOM.number)
	// 	this.DOM.number = Array.from(this.DOM.number.querySelectorAll('span')).sort(() => 0.5 - Math.random());
	// 	this.DOM.number.forEach(letter => letter.dataset.initial = letter.innerHTML);

	// 	// console.log(this.DOM.number);
		
	// 	// console.log(this.DOM.number[0]);
	// 	randomizeLetters(this.DOM.number);
	// }

	init() {
		window.addEventListener('scroll', () => {
			const a = (document.documentElement.scrollHeight - window.pageYOffset) -  window.innerHeight;
			const b = window.innerHeight;
			anime({
				targets: '#splashpage-content',
				opacity: a/b,
				duration: 0.1
			})
		});
	}

	render() {
		return(
			<div>
				<div id="splash-container">
					<Container fluid={true}>
						<div id="splashpage-content">
							<Row>
								<h1 className="splashpage-banner splashpage-banner-extension">In The Streets Industries. In The Streets Industries.</h1>
								<h1 className="splashpage-banner">In The Streets Industries. In The Streets Industries.</h1>
							</Row>
							<Row>
								<Col sm={12}>
									<h3 id="splash-text">Creative design and technology by Malcolm Gourine</h3>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<div className="contact">
										<p>Contact</p>
										<p>malcolmgourdine@gmail.com</p>
										<p>347 742 9627</p>
									</div>
								</Col>
								<Col md={6}>
									<div className="contact">
										<p>Social Media</p>
										<p>Instagram</p>
										<p>Flickr</p>
									</div>
								</Col>
							</Row>
							<p id="scroll-down">Scroll down to see some of my works</p>
						</div>
					</Container>
				</div>
			</div>
		);
	};
};

export default Home;