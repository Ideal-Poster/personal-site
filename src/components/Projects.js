import React from 'react';
import './Projects.css';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import projectsAPI from '../api';




class Projects extends React.Component {
    render() {
			const projects = projectsAPI.projects;
			return(
				<div id="projects-page">
					<Row>
						<Col sm={12}>
							<h1 className="banner banner-1">Works. Works. Works. Works. Works. Works. Works. Works.</h1>
							<h1 className="banner banner-2">Works. Works. Works. Works. Works. Works. Works. Works.</h1>

						</Col>
					</Row>
					<Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
						<Row style={{ textAlign: 'center' }}>
							<h2>{ projects[0].title }</h2>
						</Row>
						<Row>
							{/* <Col style={{ textAlign: 'center' }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}> */}
							<img className="project__img" src={ require(`../assets/img/${projects[0].img}`) } alt=""/>
						</Row>
					</Col>
				</div>
			);
		};
};

export default Projects;