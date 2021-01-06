import React, { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"  
import { useHistory } from "react-router-dom"

import "../style/shipment_pag.css"



export default function Shipment(props)
{

    
    let [ordersArry,setOrdersArry]=useState([{}])
    let clientOrder=useSelector((state)=>state.order)
let [shipment,setSipment]=useState({})
let cartProds=useSelector((state)=>state.cartAr)
let showCart=useSelector((state)=>state.showCart)
let dispatch=useDispatch()



let temp=[{}]
let history=useHistory()


console.log(cartProds);
  


useEffect(()=>
{

    
     temp.push(clientOrder)  
   
    setOrdersArry(temp)

   

},[])

const submit=(event)=>{
   
    event.preventDefault()
    


    let bodyData={
        address:event.target.shipment_address.value,
        phone:event.target.shipment_phone.value,
        full_name:event.target.shipment_client_name.value,
        shipment:event.target.shipment_shipment.value,
        order:cartProds,
        

    }
    console.log(bodyData);

    let url = "https://my-toy-store.herokuapp.com/shipment/add"
    fetch(url, {
      method:"POST",
      body:JSON.stringify(bodyData),
      headers: { 'content-type': "application/json",
      
     }
    })
    .then(resp => resp.json())
    .then(data => { 
      
      if(data){
  
        console.log(data);
      }
      else{
        alert("Worng user or password , try again")
      }
    })
history.push("/")
dispatch({type:"clearCart",clear:[]})
dispatch({type:"showCart",show:false})

}






    return(

        <div  className="shipment_container" onClick={()=>{if(showCart){dispatch({type:"showCart",show:false})}}}>
            
           
         

            <form  onSubmit={submit} className="shipment_form">
            <div className="shipment_single_input_box">
            <label>Address:</label>
            <input type="text" id="shipment_address" className="prod_name_input"/>
            </div>


            <div className="shipment_single_input_box">
            <label>Phone Number:</label>
            <input type="text" id="shipment_phone" className="prod_info_input"/>
            </div>


            <div className="shipment_single_input_box">
            <label>Full Name:</label>
            <input type="text" id="shipment_client_name" className="prod_info_input"/>
            </div>


            <div className="shipment_single_input_box">
            <label>Shipment:</label>
            <select  id="shipment_shipment" className="prod_info_input">
                <option value="console">FedEx</option>
                <option value="console_games">UPS</option>
                <option value="console">post office</option>
                
              

            </select>            </div>

         

            <button type="botten" className="add_form_btn">submit</button>

            </form>
        </div>
    )
}

