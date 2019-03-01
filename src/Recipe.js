import React, {Component} from "react";

class Recipe extends Component {
	render() {
		const {title, img, inst} = this.props;
		const ingr = this.props.ingr.map((ing, i) => <li key={i}>{ing}</li>);
		return (
			<div className={'card'}>
				<div className={'card-img'}>
					<img src={img} alt={title}/>
				</div>
				<div className={'card-content'}>
					<h3 className={'title'}>{title}</h3>
					<h4>Ingredients:</h4>
					<ul>
						{ingr}
					</ul>
					<h4>Instructions:</h4>
					<p>{inst}</p>
				</div>
			</div>
		);
	}
}