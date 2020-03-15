import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import anime from 'animejs';
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
		this.DOM = document.getElementById('splash-container');
		this.DOM.number = this.DOM.querySelector('#number');
		charming(this.DOM.number)
		this.DOM.number = Array.from(this.DOM.number.querySelectorAll('span')).sort(() => 0.5 - Math.random());
		this.DOM.number.forEach(letter => letter.dataset.initial = letter.innerHTML);

		// console.log(this.DOM.number);
		
		// console.log(this.DOM.number[0]);
		randomizeLetters(this.DOM.number);
	}

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
						<h1 id="number">718</h1>
						<div id="splashpage-content">
							<Row>
								<Col lg={10}>
									<h1 id="splash-text"><span id="business-title">In The Streets Industries</span> is creative design and technology by Malcolm Gourdine.</h1>
								</Col>
							</Row>
							<Row>
								<Col sm={10}>
									<h2 style={{textAlign: 'right', paddingBottom: '60px', fontFamily: 'Faune'}}>
										Scroll down to see some of my works
									</h2>
								</Col>
							</Row>
							<Row>
								<Col lg={6}>
									<div className="contact">
										<p id="contact-title">Contact</p>
										<p>malcolmgourdine@gmail.com</p>
										<p>347 742 9627</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="contact">
										<p id="contact-title">Social Media</p>
										<p>Instagram</p>
										<p>Flickr</p>
									</div>
								</Col>
							</Row>
						</div>
						{/* <div className="media-links">
							<p id="media-link-1">New York – Brooklyn</p>
							<p id="media-link-2">github</p>
							<p id="media-link-3">Instagram</p>
						</div> */}
					</Container>
				</div>
				<div id="placeholder"></div>
			</div>
		);
	};
};

export default Home;