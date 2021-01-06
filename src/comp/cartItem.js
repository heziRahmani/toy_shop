import React from "react"
import "../style/cart.css"


import {useSelector,useDispatch} from "react-redux"
import { doApiPost } from "../services/doApi"


export default function CartItem(props)
{
    let item=props.item

    let dispatch=useDispatch()
    let globalProds=useSelector((state)=>state.allProds)
    let in_stock=useSelector((state)=>state.in_stock)

    const returnToStock=async()=>{
        
      let inStock=Number(item.in_stock)
      inStock++
     
      
     
     let bodyData={
        id:item.id,
       name:item.name,
       price:item.price,
       info:item.info,
       category:item.category,
       img_url:item.img_url,
     in_stock:inStock,
       
    
     
     }
     
     dispatch({type:"in_stock",in_stock:bodyData})
     console.log(bodyData);
     
     let url="https://my-toy-store.herokuapp.com/prods/amount/"
     let data=await doApiPost(url,bodyData)
     .then(data=>{
        console.log(data);
       
     
     })
            dispatch({type:"delFromCart",idDel:item.id})

    }

    return(
        <div className="cart_items">

            <div className="cart_item">
              <div className="cart_prod_name">  <h3 ><span>Game Name:</span> {item.name}</h3></div>
    <div className="cart_prod_price"><h3 ><span>Price:</span> {item.price * item.amount}  <span>Amount:</span> {item.amount}</h3></div>
                <div className="cart_img_box"><img src={item.img_url}/></div>
                <button className="del_btn" onClick={()=>{returnToStock()}}>Remove</button>
                </div>
   
        </div>
    )
}