import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

class Home extends React.Component {
	render() {
		return(
			<div>
				<div id="splash-container">
					<Container fluid={true}>
						<p id="number">555&!</p>
						<div id="homepage-text">
							<Row>
								<Col lg={10}>
									<h1 id="splash-text"><span id="business-title">In the Streets Industries</span><br/> is creative design and technology by Malcolm Gourdine.</h1>
								</Col>
							</Row>

							<Row>
								<Col sm={{ offset: 2, span: 8 }}>
									<h2 style={{textAlign: 'center', paddingBottom: '60px'}}>Scroll down to see some of my works</h2>
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
										<p id="contact-title">Contact</p>
										<p>malcolmgourdine@gmail.com</p>
										<p>347 742 9627</p>
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