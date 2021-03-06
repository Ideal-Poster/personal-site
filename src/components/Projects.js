import React from 'react';
import './Projects.css';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import projectsAPI from '../api';
import anime from 'animejs';

class Projects extends React.Component {

	componentDidMount() {
		anime({
			targets: '.projects-banner',
			translateX: '-100%',
			duration: '18000',
			easing: 'linear',
			loop: true
		});
	}
	
	render() {
		const projects = projectsAPI.projects;
		return(
			<div id="projects-page">
				<Row>
					<Col sm={12}>
						<h1 className="projects-banner projects-banner-extension">Works. Works. Works. Works. Works. Works. Works. Works.&nbsp;</h1>
						<h1 className="projects-banner">Works. Works. Works. Works. Works. Works. Works. Works.&nbsp;</h1>
					</Col>
				</Row>
				<div id="projects-container">
					{
						projects.map(project => (
							<div className="project-container">
								<Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
									<Row>
										<h3 className="project-title">{ project.title }</h3>
									</Row>
									<Row>
										<div className="project-img-container">
											<img className="project-img" src={ require(`../assets/img/${project.img}`) } alt=""/>
										</div>
									</Row>
									<Row>
										{
											project.herokuMessage &&
											<p className="heroku-message">{ project.herokuMessage }</p>
										}
										<p className="project-description">{ project.description }
											<a href={`${project.link}`}
												target="_blank" 
												rel="noopener noreferrer"
												className="project-link">
													&nbsp; { project.linkText }
											</a>
										</p>
									</Row>
								</Col>
							</div>
						))
					}
				</div>
			</div>
		);
	};
};

export default Projects;