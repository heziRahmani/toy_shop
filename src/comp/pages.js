import React, { useEffect,useState} from "react"
import { doApi } from "../services/doApi"
import {Link} from "react-router-dom"
import "../style/shop_product.css"


export default function Pages(props){

let [numOfPages,setNumOfPages]=useState(0)

let url=""
useEffect(()=>{
 url=props.countFrom
 let prodsPerPage=9
 console.log(url);
console.log(props.toUrl);

doApi(url)
.then(data=>{
    console.log(data);
    let num= Math.ceil(data / prodsPerPage)
    setNumOfPages(num)
    console.log(numOfPages)
   
})
    

  
    
},[props])


    return(
        <div className="pages_container">

            {Array.from(Array(numOfPages),(_,i)=><span className="pageLinks" key={i}><Link to={props.toUrl+i} >{i+1}</Link></span>)}
        </div>
    )
}