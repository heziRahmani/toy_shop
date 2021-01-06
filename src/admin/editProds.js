import React,{useEffect,useState} from "react"
import { doApi, doApiPost, doApiPostToken } from "../services/doApi";
import Navadmin from "./nav_admin";
import {useHistory} from "react-router-dom"

import "../style/editProd.css"



export default function EditProds (props)
{

    let [editprod,setEditProd]=useState({})
    let [editCounter,setEditcounter]=useState(1)

    let editId
    let history=useHistory()

useEffect(async()=>{
    editId=props.match.params.id

console.log(editId);
let url="https://my-toy-store.herokuapp.com/prods/single/"+editId;
await doApi(url)
.then(data=>{
    console.log(data.name);
    
    if(data){
        setEditProd(data)
        console.log(editprod);
    }
    
})

},[props.match,editId])




const sendForm=async (event,prod)=>{
    alert("product chenged")
event.preventDefault()


    let bodyData={
        id:prod._id,
        name:event.target.prod_name.value,
            info:event.target.prod_info.value,
            img_url:event.target.img_url.value,
            price:event.target.price.value,
            category:event.target.cat_name.value,
            in_stock:event.target.in_stock.value

    }




        
        let url="https://my-toy-store.herokuapp.com/prods/update/"
       
        let data=await doApiPostToken(url,bodyData)
        .then(data=>{
           
            history.push("/admin/tableprods")

        })



}




    return(
        <>
         <Navadmin/>
        <div className="edit_form_container">
             
              {editprod.name ? (<div className="edit_form_box">
        <form className="edit_form" onSubmit={(event)=>{sendForm(event,editprod)}}>
           
           
           
            <div className="single_input_box">
            <label className="editLable">product name:</label>
            <input type="text" id="prod_name" className="prod_name_input  editInput" defaultValue={editprod.name}/>
            </div>


            <div className="single_input_box">
            <label className="editLable">product info:</label>
            <textarea type="text" id="prod_info" className="prod_info_input  editInput" defaultValue={editprod.info}/>
            </div>


            <div className="single_input_box">
            <label className="editLable">image url:</label>
            <input type="text" id="img_url" className="img_url_input  editInput" defaultValue={editprod.img_url}/>
            </div>

            {/*  */}
            <div className="single_input_box">
            <label className="editLable">in stock:</label>
            <input type="text" id="in_stock" className="img_url_input  editInput" defaultValue={editprod.in_stock}/>
            </div>


            <div className="single_input_box">
            <label className="editLable">category name:</label>
            <select  id="cat_name" className="prod_cat_name_input  editInput">
                <option value="console" defaultValue={editprod.category}>{editprod.category}</option>
                <option value="console">console</option>
                <option value="console_games">console games</option>
                <option value="console">action figore</option>
                <option value="lego">lego</option>
              

            </select>
            </div>


      

            <div className="single_input_box">
            <label className="editLable">product price:</label>
            <input type="number" id="price" className="prod_price_input  editInput" defaultValue={editprod.price}/>
            </div>
            <button type="botten" className="form_btn">submit</button>
        </form>
        </div>


 ): ""}
                     </div>
                     </>
        
    )
}