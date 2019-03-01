import React, {Component} from 'react';
import './App.css';
import RecipeList from './RecipeList';
import Nav from './Nav';

class App extends Component {
  
  render() {
    return (
		<div className={'App'}>
			<Nav/>
			<RecipeList/>
      </div>

	);
  }
}

export default App;
