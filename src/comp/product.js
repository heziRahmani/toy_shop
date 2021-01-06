import React,{useEffect,useState} from "react"

import "../style/shop_product.css"
import Prodacs_nav from "./prods_nav"

import {doApi} from "../services/doApi"
import ProdeItem from "./prod_item"

import Pages from "./pages"
import {useSelector,useDispatch} from "react-redux"







export default function Prodacs(props)
{
    let dispatch=useDispatch()
    let reduxProds=useSelector((state)=>state.allProds)


   
    const [_url,set_url]=useState("https://my-toy-store.herokuapp.com/prods")
    let [countFromUrl,setCountFrom] = useState("")
    let [toUrl,setToUrl] = useState("")
 

useEffect(()=>{
    
    set_url("https://my-toy-store.herokuapp.com/prods/page/0")
    setCountFrom("https://my-toy-store.herokuapp.com/prods/countprods")
    setToUrl("/prods/page/")

 if(props.match){

    // שם מוצר
        if (props.match.params.prodName)
    {
        let search=props.match.params.prodName
        set_url("https://my-toy-store.herokuapp.com/prods/search/?q="+search)
        
    }

    // כול המוצרים לפי דפים
else if(props.match.params.pagNum){
    let pagNum=props.match.params.pagNum
    set_url("https://my-toy-store.herokuapp.com/prods/page/"+pagNum)
    
}

else if(props.match.params.category){
    let cat=props.match.params.category
    set_url("https://my-toy-store.herokuapp.com/prods/cat/"+cat)
   
    setCountFrom("https://my-toy-store.herokuapp.com/prods/catcount/"+cat)
    setToUrl("/cat/"+cat+"/")
    
 
    
    if(props.match.params.catPageNum){
      set_url("https://my-toy-store.herokuapp.com/prods/cat/"+cat+"?page="+props.match.params.catPageNum)
    }
  }


}

    console.log(countFromUrl);
    console.log(toUrl);




doApi(_url)
.then(data=>{
    
    dispatch({type:"allProds",prods:data.data})
    console.log(reduxProds);
})



},[_url,props.location,props.match])






let showCart=useSelector((state)=>state.showCart)







    return(
        <div className="product_container" onClick={()=>{if(showCart){dispatch({type:"showCart",show:false})}}}>
  
     <Prodacs_nav/>
     <div className="products_box">
{reduxProds.map((item)=>{
    return(
      <ProdeItem key={item._id} item={item} />
       
    )
})}
            </div>
            <Pages countFrom={countFromUrl} toUrl={toUrl}/>
    

        </div>
    )
}