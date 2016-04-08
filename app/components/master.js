import React from 'react';
import { Link } from 'react-router';

import Navbar from './header/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Master extends React.Component {

	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}