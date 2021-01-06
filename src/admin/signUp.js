import React,{useEffect, useRef, useState} from "react"
import Navadmin from "./nav_admin"

import "../style/addDel_page.css"
import DelUser from "./delUser"
import AddUser from "./add_user"
import { doApiGetToken } from "../services/doApi"










export default function AddDelUser(params) {
    let[imploys,setimploys]=useState([]) 
    let[resetPage,setResetPage]=useState(0) 

    useEffect(()=>
{
    
    doApiGetToken("https://my-toy-store.herokuapp.com/users")
    .then(data=>{
        console.log(data)
        let temp=data
        setimploys(temp)
        
    })
    setResetPage(resetPage+1)
},[])




    return(

        <div className="signUp_container">
         <Navadmin/>
        <div className="add_del_container">
           <div className="add_del_box"><AddUser/></div>
            <div className="add_del_box"><DelUser/></div>
        </div>
        <div className="users_container">
          


                <h3 className="imploy-list">Imploy List</h3>
            <div className="users_box">
            
                {imploys.map((item,i)=>{
                    return(
                        <h3 key={i} className="users_h3">{item.email}</h3>
                    )
                })}
               
            </div>
        </div>
        </div>
    )
}