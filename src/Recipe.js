import React, {Component} from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

class Recipe extends Component {
	
	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	};
	
	render() {
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, i) => <li key={i}>{ing}</li>);
		return (
			<div className={'card'}>
				<div className={'card-img'}>
					<img src={img} alt={title}/>
				</div>
				<div className={'card-content'}>
					<h3 className={'title'}>{title}</h3>
					<h4>Ingredients:</h4>
					<ul>
						{ingredients}
					</ul>
					<h4>Instructions:</h4>
					<p>{instructions}</p>
				</div>
			</div>
		);
	}
}

export default Recipe;