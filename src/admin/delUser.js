import React,{useRef} from "react"
import Navadmin from "./nav_admin"
import {useHistory} from "react-router-dom"
import "../style/addDel_style.css"










export default function DelUser(params) {
    






    let history=useHistory()
    

   
    let userInput=useRef()
    let passRef=useRef()

    const submit=(event)=>{
        
      
        event.preventDefault()
        
        let bodyData={
            del:userInput.current.value
            
        }

console.log(localStorage.token);
        console.log(bodyData);
    
            let url = "https://my-toy-store.herokuapp.com/users/del"
        
            fetch(url, {
            method:"POST",
            body:JSON.stringify(bodyData),
            headers: { 'content-type': "application/json",
                        'x-auth-token':localStorage.token
            }
            })
            .then(resp => resp.json())
            .then(data => { 
            console.log(data)
            
        })
        window.location.reload()
    }





    return(
        <div className="addDel_user_container">
            <h3 className="addDel_user_h3">Delit User</h3>
            <form className="addDel_user_form" onSubmit={(e)=>{submit(e); alert("user remuved")}}>
            <div className="addDel_input_box">
            <label>user name:</label>
            <input type="text" ref={userInput} id="admin_login_name " className="login_input"/>
            </div>


           
            <button type="botten" className="addDel_user_btn del_btn">submit</button>
            </form>
        </div>
    )
}