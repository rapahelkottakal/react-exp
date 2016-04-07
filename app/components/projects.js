import React from 'react';


export default class About extends React.Component {

	render() {
		return (
			<div>
			  <h2>Projects</h2>
			  {this.props.children}
			</div>
		);
	}
}