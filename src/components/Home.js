import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import anime from 'animejs';

class Home extends React.Component {

	constructor() {
		super();
		this.init();
	}

	componentDidMount() {
		anime({
			targets: '.splashpage-banner',
			translateX: 'calc(-100% - 20px)',
			duration: '18000',
			easing: 'linear',
			loop: true
		});
	}

	init() {
		window.addEventListener('scroll', () => {
			const a = window.innerHeight - window.pageYOffset;
			const b = window.innerHeight;
			if((a/b) > 0) {
				anime({
					targets: '#splashpage-content',
					opacity: a/b,
					duration: 0.1
				});
			}			
		});
	}

	render() {
		return(
			<div>
				<div id="splash-container">
					<Container fluid={true}>
						<div id="splashpage-content">
								<div id="splashpage-banner-container">
									<h1 className="splashpage-banner splashpage-banner-extension">In The Streets Industries.</h1>
									<h1 className="splashpage-banner">In The Streets Industries. In The Streets Industries.</h1>
								</div>
							<Row>
								<Col sm={12}>
									<h3 id="splash-text">Creative design and technology by Malcolm Gourine</h3>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<div className="contact">
										<p>Contact</p>
										<a href="mailto:malcolmgourdine@gmail.com">malcolmgourdine@gmail.com</a>
										<p>+ 347 752 0627</p>
									</div>
								</Col>
								<Col md={6}>
									<div className="contact">
										<p>Social Media</p>
										<a href="https://www.instagram.com/ideal_poster/">Instagram</a> <br/>
										<a href="https://github.com/ideal-poster">Github</a>
									</div>
								</Col>
							</Row>
							<h3 id="scroll-down">Scroll down to see some of my works</h3>
						</div>
					</Container>
				</div>
			</div>
		);
	};
};

export default Home;