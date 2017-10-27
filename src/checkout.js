import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom';
import {connect } from "redux-zero/react";
import Footer from './footer';
import Header from './header';
import {shopDishes} from './dishes';
import ShoppingCart from './shoppingCart';

const Checkout = ({shopDishes}) => {
    const Listdishs=shopDishes.map((item,index)=>{
        return( 
        <table>
        <thead>
         <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>                           
        </thead>
        <tbody>
            <tr>
             <td>
                 <div class="cart-image-wrapper">
                 <img src={item.image}/></div> 
                 {/* <span class="product-name" data-bind="text: item.name">{item.name}</span> */}
             </td>
                 <td><input type="number" class="inputnumber k-widget k-numerictextbox"  name="lastname"/></td>           
             <td>
                 <p class="table-price" data-bind="text: itemPrice">{item.price}</p><p></p>
             </td>
            </tr>
        </tbody>
       </table>
    );
    });
    // primera vista
    return (
        <section id="content" class="style" >
            <div>
                <div id="checkout-top-image"></div>
                <div id="details-checkout">
                    <h1>Order Details</h1>
                    { Listdishs}
                    <p id="total-checkout"><em>total:</em><span data-bind="text: totalPrice">$4.00</span></p>
                    <a class="cancel-order" href="#" data-bind="click: emptyCart">cancel order</a>
                    <button class="order-now" data-bind="click: proceed"><NavLink to={"/home"}>order now! </NavLink> </button>
                </div>
                <div id="checkout-bottom-image"></div>
            </div>           
            </section>
    )          
    
}


const CheckoutView = ({shopDishes}) => {
    return (
        <div id='application' >
            <div>
                <div id='wrapper'>
                    <Header shopDishes={shopDishes}/>
                    <div id='main-section'>
                        <ShoppingCart shopDishes={shopDishes} />
                        <Checkout shopDishes={shopDishes} />
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

//export default CheckoutView;
const mapToProps = ({shopDishes}) => ({shopDishes});
export default connect(mapToProps)(CheckoutView);