import React,{useEffect} from "react"
import {Link,useHistory} from "react-router-dom"

import "../style/shopNav.css"




export default function Nav(props)
{

    let userSearch=React.useRef(null)
let history=useHistory()

useEffect(()=>{
console.log(userSearch.current);



})
const search=()=>{
    console.log(userSearch.current.value)
   history.push("/search/"+userSearch.current.value)
}





    return(
        <div className="nav_container">
            <nav>
                <div className="nav_list_container">
                    <ul className="nav_list">
                        <li className="nav_list_item"><Link className="nav_list_link" to="/">HOME</Link></li>
                        <li className="nav_list_item"><Link className="nav_list_link" to="/prods">PRODUCT'S</Link></li>
                        <li className="nav_list_item"><Link className="nav_list_link" to="/admin_login">LOG IN ADMIN</Link></li>
                        
                    </ul>
<div className="nav_img_box">
                    <img  className="nav_img" src="https://dypdvfcjkqkg2.cloudfront.net/original/6620747-4073.jpg" />
                    </div>
                </div>
            <div className="nav_search">
                <input className="search_input" type="text" defaultValue="      Enter Game Name" ref={userSearch}/>
                <input className="search_btn" type="button" defaultValue="Search" onClick={search}/>
            </div>
                
            </nav>
        </div>
    )
}