import React,{useRef} from "react"

import {useHistory} from "react-router-dom"
import { doApiPostToken } from "../services/doApi"
import "../style/addDel_style.css"











export default function AddUser(params) {
    






    let history=useHistory()
    

    

   
    let userInput=useRef()
    let passRef=useRef()

    const submit=(event)=>{
        
      
        event.preventDefault()
        
        let bodyData={
            email:userInput.current.value,
            pass:passRef.current.value,
            
        }


        console.log(bodyData);
    
            let url = "https://my-toy-store.herokuapp.com/users/add"
        
          doApiPostToken(url,bodyData)
           
            .then(data => { 
            console.log(data)
        })
        window.location.reload()
    }





    return(
        <div className="addDel_user_container   ">
            <h3 className="addDel_user_h3">Add User</h3>
            <div className="add_del_box">
            <form className="addDel_user_form" onSubmit={(e)=>{submit(e); alert("user added")}}>
            <div className="addDel_input_box add_input_box">
            <label>user name:</label>
            <input type="text" ref={userInput} id="admin_login_name " className="login_input add_input"/>
            </div>


            <div className="login_input_box">
            <label>password:</label>
            <input type="text" ref={passRef} id="login_password" className="login_input "/>
            </div>
            <button type="botten" className="addDel_user_btn">submit</button>
            </form></div>
   
        </div>
    )
}