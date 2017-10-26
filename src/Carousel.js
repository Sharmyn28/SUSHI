import React, { Component } from 'react';
import logo from './logo.svg';
import './Carousel.css';
// import {dishes} from 'dishes'

class Carousel extends Component {
	render() {
		return (
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
							<div className="col-lg-3 pull-right">
								<img src="http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/sashimi-salad.jpg" />
							</div>
							<div className="col-lg-6">
								<h2>Organic greens topped with fresh sashimi, wasabi soy vinaigrette.<br />
								</h2>
								<p>
								Organic greens topped with fresh sashimi, wasabi soy vinaigrette.
                </p>
								<a
									className="btn btn-info pull-right"
									href="/article/show/sed-vel-lectus/9">
									<i className="fa fa-long-arrow-right">
										+ADD TO CART
									</i>
								</a>
							</div>
							<div className="col-lg-3">
								<h5>nutritional Info</h5>
								<ul>
									<li></li>
								</ul>
						</div>
						<div className="item">
							<div className="col-lg-8 pull-right">
								<img src="http://lorempixel.com/g/750/350/cats" />
							</div>
							<div className="col-lg-4">
								<h2>
									Proin porta auctor nisi<br />
									<small>
										by Merovingio in Jun 22, 2017 at
                    00:34
</small>
								</h2>
								<p>
									Proin porta auctor nisi in interdum. Praesent a accumsan neque. Quisque ut nulla ac libero egestas tristique. Nunc venenatis elit lorem, ut viverra neque rhoncus a. Proin erat risus, pharetra vitae elementum eget, accumsan ornare mauris.
                  Praesent...
                </p>
								<a
									className="btn btn-info pull-right"
									href="/article/show/sed-vel-lectus/9">
									<i className="fa fa-long-arrow-right">
									</i>
								</a>
							</div>
						</div>
						<div className="item">
							<div className="col-lg-8 pull-right">
								<img src="http://lorempixel.com/g/750/350/fashion" />
							</div>
							<div className="col-lg-4">
								<h2>
									Aenean sodales<br />
									<small>
										by Merovingio in Jun 22, 2017 at
                    00:33
</small>
								</h2>
								<p>
									Aenean sodales, leo eu euismod tincidunt, felis odio aliquam velit,
                  quis porta lorem erat eget erat. Aliquam porta libero erat, sed aliquet est
                  sollicitudin a. Curabitur nec tellus in eros egestas venenatis ac sed nisl. In consectetur nisl eget...
                </p>
								<a
									className="btn btn-info pull-right"
									href="/article/show/sed-vel-lectus/9">
									<i className="fa fa-long-arrow-right">
									</i>
								</a>
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

		);
	}
}

export default Carousel;