import React,{Component} from "react"

import {useSelector,useDispatch} from "react-redux"
import { doApiPost } from "../services/doApi"




export default function ProdeItem (props)
{
   let cartItems=useSelector((state)=>state.cartAr)
   let in_stock=useSelector((state)=>state.in_stock)
  let dispatch=useDispatch()
    let item=props.item


    const addToCart=async()=>{
 let inStock=Number(item.in_stock)
 inStock--


let bodyData={
  name:item.name,
  price:item.price,

  info:item.info,
  category:item.category,
  img_url:item.img_url,
  id:item._id,
in_stock:inStock,
  

}

dispatch({type:"in_stock",in_stock:bodyData})
console.log(item.in_stock--);

      let cartProdItem={
        name:item.name,
        price:item.price,
        info:item.info,
        img_url:item.img_url,
        category:item.category,
        id:item._id,
      in_stock:item.in_stock,
        amount:1
      }

      dispatch({type:"addToCart",cartProd:cartProdItem})
     


     
    
    
         
         let url="https://my-toy-store.herokuapp.com/prods/update/"
         let data=await doApiPost(url,bodyData)
        .then(data=>{
            console.log(data);
           
    
        })



    }
   



    return(

        
        <div className="item_card">
        <img className="prod_img" src={item.img_url}/>
         <h2 className="prod_name" >{item.name}</h2>
    <p className="prod_info">{item.info}</p>
      <div className="prod_card_bottom">
      <h3 className="prod_price">price: {item.price}</h3>
      <button className="prod_card_btn" onClick={addToCart} defaultValue="more info">add to cart</button>
      </div>
    </div>
    )
} 