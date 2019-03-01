import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<div>
				<div className={'nav'}>
					<div className={'nav-content'}>
						<a href="#" className={'brand link'}>Recipe App</a>
						<div className={'links'}>
							<a href="#" className={'link'}>New Recipe</a>
							<a href="#" className={'link'}>Home</a>
							<a href="#" className={'link'}>About</a>
							<a href="#" className={'link'}>Contact Us</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;