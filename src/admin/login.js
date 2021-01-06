import React,{useRef} from "react"
import Navadmin from "./nav_admin"
import {useHistory} from "react-router-dom"
import "../style/login.css"
export default function LogIn(params) {
    






    let history=useHistory()
    

   
    let userInput=useRef()
    let passRef=useRef()

    const submit=(event)=>{
        
      
        event.preventDefault()
        
        let bodyData={
            email:userInput.current.value,
            pass:passRef.current.value,
            
    
        }
        console.log(userInput.current.value);
    
            let url = "https://my-toy-store.herokuapp.com/users/login"
        
            fetch(url, {
            method:"POST",
            body:JSON.stringify(bodyData),
            headers: { 'content-type': "application/json"
            }
            })
            .then(resp => resp.json())
            .then(data => { 
            console.log(data)
            if(data.token){
                localStorage.setItem("token",data.token);
                history.push("/admin/tableprods")
                console.log(data);
            }
            else{
                alert("Worng user or password , try again")
            }
        })
    }





    return(
        <div className="login_container">
        


            <div className="login_info_box">
                <h3 className="login_info"><span>A</span>s an admin, you can manage your stock, add/del, and edit products in addition to the ability to see which product you need to restock.</h3>
                <h3 className="login_info"><span>A</span>dditionally, you can manage your imploy's  (<span className="hire">HIRE</span>/lay off).</h3>
                <h3 className="login_info"><span>A</span>nother thing you can do is manage you'r orders.</h3>
                <h3 className="login_info"><span>C</span>ontact me for a user name and password :)</h3>
            </div>
            <form className="login_form" onSubmit={(e)=>{submit(e)}}>
            <div className="login_input_box">
            <label>User Name:</label>
            <input type="text" ref={userInput} id="admin_login_name " className="login_input"/>
            </div>


            <div className="login_input_box">
            <label>Password:</label>
            <input type="text" ref={passRef} id="login_password" className="login_input "/>
            </div>
            <button type="botten" className="logIn_btn">submit</button>
            </form>
        </div>
    )
}