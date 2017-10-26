import React, { Component } from 'react';
import logo from './logo.svg';
import './Carousel.css';
// import {dishes} from 'dishes'

class Carousel extends Component {
	render() {
		return (
			<div className="background-fish">
			<div className="container carousel">
				<div
					id="carousel-example-generic"
					className="carousel slide"
					data-ride="carousel">
					{/* Indicators */}
					<ol className="carousel-indicators">
						<li
							data-target="#carousel-example-generic"
							data-slide-to={0}
							className="active" />
						<li
							data-target="#carousel-example-generic"
							data-slide-to={1} />
						<li
							data-target="#carousel-example-generic"
							data-slide-to={2} />
					</ol>
					{/* Wrapper for slides */}
					<div
						className="carousel-inner text-center"
						role="listbox">
						<div className="item active">
							<div className="col-lg-3 pull-left">
								<img src="http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/sashimi-salad.jpg" />
							</div>
							<div className="col-lg-6">
								<h2>Organic greens topped with fresh sashimi, wasabi soy vinaigrette.<br />
								</h2>
								<p>
									Organic greens topped with fresh sashimi, wasabi soy vinaigrette.
                </p>
								<hr/>
								<div className="row">
									<div className="col-lg-6">
											$ 12.00
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
								<h5>Nutritional Information</h5>
								<ul>
									<li> Protein: 2.9156 </li>
									<li> Fat (total): 2.4396 </li>
									<li> Carbohydrate: 2.4396 </li>
								</ul>
							</div>
						</div>
						<div className="item">
							<div className="col-lg-3 pull-left">
								<img src="http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/sashimi-salad.jpg" />
							</div>
							<div className="col-lg-6">
								<h2>Organic greens topped with fresh sashimi, wasabi soy vinaigrette.<br />
								</h2>
								<p>
									Organic greens topped with fresh sashimi, wasabi soy vinaigrette.
                </p>
								<hr/>
								<div className="row">
									<div className="col-lg-6">
											$ 12.00
									</div>
									<div className="col-lg-6">
											<a
											className="btn btn-info pull-right"
											href="/article/show/sed-vel-lectus/9">
												<i className="fa fa-long-arrow-right">
												</i>
											</a>
									</div>
								</div>
							</div>
							<div className="col-lg-3 pull-right">
								<h5>Nutritional Information</h5>
								<ul>
									<li> Protein: 2.9156 </li>
									<li> Fat (total): 2.4396 </li>
									<li> Carbohydrate: 2.4396 </li>
								</ul>
							</div>
						</div>
						<div className="item">
							<div className="col-lg-3 pull-left">
								<img src="http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/sashimi-salad.jpg" />
							</div>
							<div className="col-lg-6">
								<h2>Organic greens topped with fresh sashimi, wasabi soy vinaigrette.<br />
								</h2>
								<p>
									Organic greens topped with fresh sashimi, wasabi soy vinaigrette.
                </p>
								<hr/>
								<div className="row">
									<div className="col-lg-6">
											$ 12.00
									</div>
									<div className="col-lg-6">
											<a
											className="btn btn-info pull-right"
											href="/article/show/sed-vel-lectus/9">
												<i className="fa fa-long-arrow-right">
												</i>
											</a>
									</div>
								</div>
							</div>
							<div className="col-lg-3 pull-right">
								<h5>Nutritional Information</h5>
								<ul>
									<li> Protein: 2.9156 </li>
									<li> Fat (total): 2.4396 </li>
									<li> Carbohydrate: 2.4396 </li>
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
			</div>
		</div>

		);
	}
}

export default Carousel;