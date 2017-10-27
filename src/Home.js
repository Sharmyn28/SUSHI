import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
/* import {Redirect, NavLink} from 'react-router-dom';*/
import './App.css';

const Home = ( {dishes}) =>  {
  return (<section id="main-section">
    <div>
      <ul className="k-widget k-listview">
        {
          dishes.map((item, index)=>{
            return(
              <li key={index} className="products">
                <a className="view-details">
                  <img className="main-image" src={item.image}/>
                  <strong>{item.name}</strong>
                  <span className="price">
  	                <span>$</span>
    	              <span>{item.price}</span>
                  </span>
                </a>
                {/* <NavLink className="btn btn-button title" to={playList.ruta}>{playList.title}</NavLink > */}
                <button className="add-to-cart">Add to cart</button>
              </li>
            );
          })
      	}
      </ul>
    </div>
  </section>)
}
  
/*const mapToProps = ({dishes}) => ({dishes});
export default connect(mapToProps)(Home);*/
export default Home;
  