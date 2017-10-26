import React, { Component } from 'react';
import './shoppingCart.css';

const ShoppingCart = () => {
	return (
		<section id='pre-content'>
			<div>
				<div id='shop-info'>
					<ul data-role='listview' className='k-widget k-listview'>
						<li className='selected-products-list'>
							<a className='view-selected-items'>
								<img className='currentDish' src='http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/chirashi-sushi.jpg' />
							</a>
							<span className='selected-image-price'>
								<span>1</span>x<span>$21.00</span>
							</span>
						</li>
					</ul>
					<div id='shopping-cart'>
						<h3>your<br />shopping cart</h3>
						<p className='total-price'>$21.00</p>
						<a id='empty-cart'>empty cart</a>
						<a id='checkout'>checkout</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart;