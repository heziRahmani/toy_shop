import React from "react"
import "../style/add_prods.css"
import Navadmin from "./nav_admin";
import {useHistory} from "react-router-dom"


export default function AddProds (props){

    let history=useHistory()
    

   
   







const submit=(event)=>{

    event.preventDefault()
   
    console.log(event.target.cat_name.value);
    
 
    let bodyData={
        name:event.target.prod_name.value,
        info:event.target.prod_info.value,
        img_url:event.target.img_url.value,
        price:event.target.price.value,
        category:event.target.cat_name.value,
        in_stock:event.target.in_stock.value

    }
    console.log(bodyData);

    let url = "https://my-toy-store.herokuapp.com/prods/add"

    fetch(url, {
      method:"POST",
      body:JSON.stringify(bodyData),
      headers: { 'content-type': "application/json",
      'x-auth-token':localStorage["token"]
     }
    })
    .then(resp => resp.json())
    .then(data => { 
      console.log(data)
      if(data){
        history.push("/admin/tableprods")
        console.log(data);
      }
      else{
        alert("Worng user or password , try again")
      }
    })
}


    return(
        <>
        <Navadmin/>
        <div className="add_form_container">
            
        <form onSubmit={submit}  className="add_prod_form">
            <div className="add_single_input_box">
            <label>product name:</label>
            <input type="text" id="prod_name" className="prod_name_input"/>
            </div>


            <div className="add_single_input_box">
            <label>product info:</label>
            <textarea type="text" id="prod_info" className="prod_info_input"/>
            </div>


            <div className="add_single_input_box">
            <label>image url:</label>
            <input type="text" id="img_url" className="img_url_input"/>
            </div>
            
            <div className="add_single_input_box">
            <label>in stock:</label>
            <input type="text" id="in_stock" className="in_stock_input"/>
            </div>



            <div className="add_single_input_box">
            <label>category name:</label>
            <select  id="cat_name" className="prod_cat_name_input">
                <option value="console">console</option>
                <option value="console_games">console games</option>
                <option value="console">action figore</option>
                <option value="lego">lego</option>
              

            </select>
            </div>


            

            <div className="add_single_input_box">
            <label>product price:</label>
            <input type="number" id="price" className="prod_price_input"/>
            </div>
            <button type="botten" className="add_form_btn">submit</button>
        </form>
        </div>
        </>
    )
}