import React, { Component } from 'react';
import logo from './logo.svg';
import './Carousel.css';
import {dishes} from 'dishes'

const ShoppingCart = ({dishes}) => {
	const dishesList = dishes.map((dish, index)=>{
		return(
			<InfoDish
				key={index}
				image={dish.image}
				price={dish.price}
				description={dish.description}
				nutritional = {dish.nutritional}
				nutritionalInfo= {dish.nutritionalInfo}/>
		)
	})
}

const InfoDish = ({ id, image, name, description,price ,nutritional, nutritionalInfo}) => {
	return (
		<div>
		<ol className="carousel-indicators">
			<ul>{dishesList}</ul>
			<li
				data-target="#carousel-example-generic"
				data-slide-to={id}
				className="active" />
		</ol>
				{/* Wrapper for slides */ }
	<div
		className="carousel-inner text-center"
		role="listbox">
		<div className="item active">
			<div className="col-lg-3 pull-left">
				<img src={image} />
			</div>
			<div className="col-lg-6">
				<h2>{name}<br />
				</h2>
				<p>{description}</p>
				<hr />
				<div className="row">
					<div className="col-lg-6">
						{price}
								</div>
					<div className="col-lg-6">
						<a
							className="btn btn-info pull-right"
							href="/article/show/sed-vel-lectus/9">
							<i className="fa fa-long-arrow-right">
								+ADD TO CART
											</i>
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 pull-right">
				<h5>{nutritional}</h5>
				<ul>
					<li> {nutritionalInfo}</li>
				</ul>
			</div>
		</div>
	</div>
		<a
			className="left carousel-control"
			href="#carousel-example-generic"
			role="button"
			data-slide="prev">
			<span
				className="glyphicon glyphicon-chevron-left"
				aria-hidden="true" />
			<span className="sr-only">Previous</span>
		</a>
		<a
			className="right carousel-control"
			href="#carousel-example-generic"
			role="button"
			data-slide="next">
			<span
				className="glyphicon glyphicon-chevron-right"
				aria-hidden="true" />
			<span className="sr-only">Next</span>
		</a>
		</div>
	)
}


const Carousel = ({ dishes }) => {
	return (
		<div className="background-fish">
			<div className="container carousel">
				<div
					id="carousel-example-generic"
					className="carousel slide" data-ride="carousel">
				</div>
			</div>
		</div>
	);
}

export default Carousel;