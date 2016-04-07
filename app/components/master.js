import React from 'react';
import { Link } from "react-router";


export default class Master extends React.Component {

	render() {
		return (
			<div className="container">
			  <ul>
			    <li><Link to="/">Home</Link></li>
			    <li><Link to="/projects">Projects</Link></li>
			    <li><Link to="/projects/jagadesh">Project - Jagadesh</Link></li>
			    <li><Link to="/projects/varun">Project - Varun</Link></li>
			  </ul>
			  {this.props.children}
			</div>
		);
	}
}