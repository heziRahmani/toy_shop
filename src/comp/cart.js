import React, { useEffect, useState,useRef } from "react"
import "../style/cart.css"

import {useSelector,useDispatch} from "react-redux"
// import CartItem from "./cartItem"
import App from "./paypal/paypal"

export default function Cart (props)
{
    let total=0
 let dispatch=useDispatch()
 let cartProds=useSelector((state)=>state.cartAr)
 let showCart=useSelector((state)=>state.showCart)
 let showPayPal=useSelector((state)=>state.showPayPal)
   
 let openCart=useRef()
    
    
    let payPalRef=useRef()
useEffect(()=>
{
    console.log(showPayPal);
})





    
 

    return(
        
        <div className="cart_main_container">
          
          <button className="btn_cart" onClick={()=>{dispatch({type:"showCart",show:!showCart})}}><i className="fas fa-shopping-cart"></i></button>
        <h3 className={`btn_cart_h3 btn_cart_h3_open ${showCart?"":"btn_cart_h3_show"}`} ref={openCart}>Open Cart</h3>
        <h3 className={`btn_cart_h3 btn_cart_h3_close  ${showCart?"btn_cart_h3_show":""}`} >Close Cart</h3>
         
       {(showCart)?(<div className="cart_container">
        
       
        <h2 className="cart_h2">You'r Games</h2>
        
        {cartProds.forEach(item => {
                total+=Number(item.price * item.amount)
                dispatch({type:"total",totalAmount:total})
                 
            })}
                      <button className="btn_pay_pal" onClick={()=>{dispatch({type:"showPayPal",showPayPal:!showPayPal})}}><i class="fab fa-cc-paypal"></i></button>
                      <h3 className={`btn_paypal_h3 btn_paypal_h3_open ${(showPayPal)?"":"btn_paypal_h3_show"}`} >pay</h3>
        <h3 className={`btn_paypal_h3 btn_paypal_h3_close  ${showPayPal&&cartProds?"btn_paypal_h3_show":""}`} >back to Cart</h3>
        <i class="fas fa-sort-down"></i>
                <div className="total_amount"><h3>Total Amount: {total}</h3></div> 
        <div className="cart_prod_box">
                {cartProds.map((item,i)=>
                    {
                        
                        return(<App key={i} item={item}/>)
                    })}
             
            
            </div>
           

       </div>
       
       ):("")}
            
            
       
                    
        </div>
    )
}