import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
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
    //              <span class="product-name" data-bind="text: item.name">Seaweed salad</span>
    //          </td>
    //              
    //          <td>
    //              <p class="table-price" data-bind="text: itemPrice">$17.00</p><p></p>
    //          </td>
    
    //         </tr>
    //     </tbody>
    //    </table>
    
    // );
    // });
    // primera vista
     return (
        <div id="aplication">
        <div>
         <div id="wraper">
            <div id="header">
                    <h1 class="logo"><a href="#/"></a></h1>
                    <a id="cart-info" href="#">Shopping Cart<span><span data-bind="text: cart.contentsCount">1</span> items</span></a>
            </div>
            {/* <p data-bind="visible: cart.cleared" style="display: none;"> Thank you for your order!</p> */}
            <div id="main-section">
                    <section id="pre-content"></section>
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
                    </section>
            </div>
            <div id="footer">
                    <p>Learn more about Kendo UI<sup>®</sup> SPA at <a href="http://docs.telerik.com/kendo-ui/getting-started/framework/spa/overview">docs.telerik.com/kendo-ui</a>.</p>
                    
                    <p>Copyright © 2017, Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    </div>
    )
  
}

export default Checkout;
