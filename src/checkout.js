import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import Footer from './footer';
import Header from './header';
import ShoppingCart from './shoppingCart';

const Checkout = ({ dishes }) => {
    // const Listdishs=dishes.map((item,index)=>{
    //     return( 
    //     <table>
    //     <thead>
    //      <tr>
    //       <th>Item</th>
    //       <th>Quantity</th>
    //       <th>Price</th>
    //     </tr>                           
    //     </thead>
    //     <tbody>
    //         <tr>
    //          <td>
    //              <div class="cart-image-wrapper">
    //              <img src={dishes.image}/></div> 
    //              <span class="product-name" data-bind="text: item.name">{dishes.name}</span>
    //          </td>
    //              <td><input type="number" class="inputnumber k-widget k-numerictextbox"  name="lastname"/></td>           
    //          <td>
    //              <p class="table-price" data-bind="text: itemPrice">{dishes.price}</p><p></p>
    //          </td>
    //         </tr>
    //     </tbody>
    //    </table>
    // );
    // });
    // primera vista
    return (
        <section id="content" class="style" >
            <div>
                <div id="checkout-top-image"></div>
                <div id="details-checkout">
                    <h1>Order Details</h1>
                    {/* { Listdishs} */}
                    <p id="total-checkout"><em>total:</em><span data-bind="text: totalPrice">$4.00</span></p>
                    <a class="cancel-order" href="#" data-bind="click: emptyCart">cancel order</a>
                    <button class="order-now" data-bind="click: proceed">order now!</button>
                </div>
                <div id="checkout-bottom-image"></div>
            </div>                
                
           {/* <tr> <td><span class="k-widget k-numerictextbox" style=""><span class="k-numeric-wrap k-state-default"><input type="text" class="k-formatted-value k-input" title="5.00" tabindex="0" role="spinbutton" aria-valuemin="0" aria-valuemax="10" aria-disabled="false" aria-valuenow="5" style="display: inline-block;"/><input type="text" data-role="numerictextbox" data-min="0" data-max="10" data-bind="value: quantity" role="spinbutton" class="k-input" aria-valuemin="0" aria-valuemax="10" aria-disabled="false" aria-valuenow="5" style="display: none;"/><span class="k-icon k-i-warning" style="display: none;"></span><span class="k-select"><span unselectable="on" class="k-link k-link-increase" aria-label="Increase value" title="Increase value"><span unselectable="on" class="k-icon k-i-arrow-60-up"></span></span><span unselectable="on" class="k-link k-link-decrease" aria-label="Decrease value" title="Decrease value"><span unselectable="on" class="k-icon k-i-arrow-60-down"></span></span></span></span></span></td></tr> */}
      </section>
    )
}

const CheckoutView = () => {
    return (
        <div id='application' >
            <div>
                <div id='wrapper'>
                    <Header />
                    <div id='main-section'>
                        {/*<ShoppingCart dishes={dishes} />*/}
                        <Checkout />
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default CheckoutView;
