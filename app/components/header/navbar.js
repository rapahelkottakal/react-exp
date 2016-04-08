import React from 'react';
import { Link } from 'react-router';

import 'normalize.css/normalize.css';


export default class Navbar extends React.Component {

	render() {
		return (
			<div className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">
					  <li><Link to="/">Home</Link></li>
					  <li><Link to="/projects">Projects</Link></li>
					  <li><Link to="/projects/jagadesh">Project - Jagadesh</Link></li>
					  <li><Link to="/projects/varun">Project - Varun</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}