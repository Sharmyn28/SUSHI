import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shoppingCart';
import Header from './header';
import dishes from './dishes'
import Home from './Home'
import { connect } from 'redux-zero/react';

const App = ({dishes}) => {
  return (
    <div id='application' >
      <div>
        <div id='wrapper'>
          <Header />
          <div id='main-section'>
            <ShoppingCart dishes={dishes} />
            <Home dishes={dishes} />
          </div>
        </div>
      </div>
    </div >
  );
}

//export default App;
const mapToProps = ({ dishes }) => ({ dishes });
export default connect(mapToProps)(App);