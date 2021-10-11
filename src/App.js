import React, { Compoment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



class App extends Compoment {
	
	constructor(){
		super()
		this.state = {
			robots : robots,
			searchfeild: ''
		}
	}

	onSearchChange(event){
		console.log(event.target.value);
	}

	render() {
		
		return(
			<div className='tc'>
				<h1> ROBO FRIENDS </h1>
				<SearchBox onSearchChange='this.onSearchChange' />
				 <CardList robots={this.state.robots} />
			</div>
		);
	}

	
}

export default App;