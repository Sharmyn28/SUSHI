import React, { Component } from 'react';
import logo from './logo.svg';
import './Carousel.css';
// import {dishes, selectedFood} from './dishes'

import { connect } from 'redux-zero/react';
import {nextAction, previewAction} from './actions-diana';

const InfoDish = ({ image, name, description,price ,nutritional, nutritionalInfo}) => {
	return (
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
	)
}


const Carousel = ({ dishes, selectedFood}) => {
	console.log("disshes",selectedFood)
	return (
		<div className="background-fish">
			<div className="container carousel">
				<div
					id="carousel-example-generic"
					className="carousel slide" data-ride="carousel">
					
					<div>
		<ol className="carousel-indicators">
			<li
				data-target="#carousel-example-generic"
				data-slide-to={selectedFood}
				className="active" />
		</ol>
				{/* Wrapper for slides */ }
				<InfoDish 
		  	image={dishes[selectedFood].image}
				price={dishes[selectedFood].price}
				description={dishes[selectedFood].description}
				nutritional = {dishes[selectedFood].nutritional}
				nutritionalInfo= {dishes[selectedFood].nutritionalInfo}
			/>
		<a
			className="left carousel-control"
			href="#carousel-example-generic"
			role="button"
			data-slide="prev"
			onClick={previewAction}>
			<span
				className="glyphicon glyphicon-chevron-left"
				aria-hidden="true" />
			<span className="sr-only">Previous</span>
		</a>
		<a
			className="right carousel-control"
			href="#carousel-example-generic"
			role="button"
			data-slide="next"
			onClick={nextAction}>
			<span
				className="glyphicon glyphicon-chevron-right"
				aria-hidden="true" />
			<span className="sr-only">Next</span>
		</a>
		</div>
				</div>
			</div>
		</div>
	);

}

const mapToProps = ({dishes, selectedFood}) => ({dishes, selectedFood});
export default connect(mapToProps)(Carousel);