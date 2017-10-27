import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { NavLink } from 'react-router-dom';
/* import {Redirect, NavLink} from 'react-router-dom';*/
import { addDishes, moveSlides } from './actions'
import './App.css';

const Lista_Dishes = ({ image, name, price, index, moveSlides }) => {
  return (
    <li className="products">
      <a className="view-details" onClick={moveSlides} href='#carousel'>
        <img className="main-image" src={image} />
        <strong>{name}</strong>
        <span className="price">
          <span>$</span>
          <span>{price}</span>
        </span>
      </a>
      {/* <NavLink className="btn btn-button title" to={playList.ruta}>{playList.title}</NavLink > */}
      <button className="add-to-cart" onClick={() => addDishes(index)}>Add to cart</button>
    </li>
  );
}
const Home = ({ dishes }) => {

  const listaComponent = dishes.map((item, index) => {
    return <Lista_Dishes
      key={index}
      image={item.image}
      name={item.name}
      price={item.price}
      index={index}
      moveSlides={()=> moveSlides(index)}
    />
  })
  return (<section id="content">
    <div>
      <ul className="k-widget k-listview">
        {listaComponent}
      </ul>
    </div>
  </section>)
}

/*const mapToProps = ({dishes}) => ({dishes});
export default connect(mapToProps)(Home);*/
export default Home;
