import React, { Component, useState } from 'react';
import cstore from "./cart/cartStore";
import './cart.css'
import { Link } from 'react-router-dom';

function cart(clist){
    
  
  if(clist.prod == undefined || clist.prod.length==0){
    return(
        <div className="cart-empty">
            <h2>You have not added any products to the cart yet !</h2>
            <p>Please go through our E-shop and add products to this cart.</p>
            <Link to={"/"} style={{textDecoration:'none'}}><button className="btn">Back</button></Link>
        </div>
    );
  }  


return(
    <div className="cart">
        <h3>E-Cart</h3>
        <p>You have {cstore.getState().prod.length} items waiting in your cart </p>
        <div className="Products">
            
                {clist.prod.map((item) => {return(
                
                
                    <div className="Item" key={item.id}>
                    
                        <img src =  {item.url}  alt = {item.name} className="Img" />
                    
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        { item.price}
                        </h6>
                        <button className='btn' onClick={() =>
                            cstore.dispatch({
                                type: "DEL",
                                payload: {
                                id: item.id,
                                },
                            })}
                            > delete</button>
                    </div>
                )})}
        </div>
    </div>


)}
export default cart