import React, { Component } from 'react';
import './header.css';

const Header = () => {
	return (
		<div id='header'>
			<h1 className='logo sushi-logo'>
				<a href='#/'> </a>
			</h1>
			<a id='cart-info'>Shopping cart
				<span> 
					<span>1</span>
				</span>
			</a>
		</div>
	)
}

export default Header;