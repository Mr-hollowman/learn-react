// const App=document.createElement('h1')
// h1.textContent="This is an imperative way to program"
// h1.className='header'
// document.getElementById('root').append(h1)
// export default App;
// import React from "react";
// import "./App.css"
// import EnhancedComponent from './highOrd'

// class App extends React.Component {
// render() {
// 	// Call the props from originalComponent
// 	return <h1>{this.props.name}</h1>
// }
// }

// // Passed the originalcomponent
// export default EnhancedComponent(App);
import React, { Component } from 'react';
import Example from './protype/example';

class App extends Component {
	constructor(){
		super();
		this.state={name:'kavi'}
	}
	render() {
		return (
			<div>
				<Example selva={this.state.name}></Example>
			</div>
		);
	}
}

export default App;