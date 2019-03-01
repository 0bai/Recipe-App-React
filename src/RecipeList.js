import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				title: 'Pasta',
				ingredients: [ 'flour', 'water' ],
				instructions: 'Mix the ingredients',
				img: 'https://www.weightlossresources.co.uk/pimg/wlr/f/fusilli-pasta-article.jpg'
			},
			{
				title: 'Milkshake',
				ingredients: [ 'Ice Cream', 'Milk', 'Flavour' ],
				instructions: 'Mix Them Real Good :)',
				img: 'http://www.eatformula.com/wp-content/uploads/2017/03/Second-MilkShake-Recipe-575x428.jpg'
			},
			{
				title: 'Pizza',
				ingredients: [ 'Dough', 'Tomato Sauce', 'Cheese' ],
				instructions: 'Try decorating the cream chilis with juicy teriyaki and coffee, simmered.Salad cream soup is just not the same without butter and sour smooth cracker crumps.Seaweed can be rinseed with instant sausages, also try seasoning the ricotta with white wine.',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'
			}
		]
	};
	static propTypes = {recipes: PropTypes.arrayOf(PropTypes.object).isRequired};
	
	render() {
		return (
			<div className={'list'}>{this.props.recipes.map((r, index) => <Recipe key={index} {...r}/>)}</div>
		);
	}
}

export default RecipeList;