import React, { useEffect, useState } from "react";
import { doApi, doApiGetToken, doApiPostToken } from "../services/doApi";
import "../style/orders_pag.css";
import Navadmin from "./nav_admin";
import { useSelector, useDispatch } from "react-redux";
import SingelOrder from "./order";


export default function Orders(props) {
  let cartProds = useSelector((state) => state.cartAr);
  let [orders, setOrders] = useState([]);
  let [seeOrder, setSeeOrder] = useState(false);
  
  let [apiReset,setApiReset]=useState(0)
  let temp = [];
  let temp2 = [];

 

 

  useEffect(() => {
    let _url = "https://my-toy-store.herokuapp.com/shipment";
    doApiGetToken(_url).then((data) => {
     
         
        temp = data;
     
        setOrders(temp);
          
        temp.map((item) => {
          
            temp2.push(item.order);
     
      
      });
    });
  }, [apiReset]);



  const delOrder=async(id)=>{
    console.log(id);

   
    let delComf=global.confirm("are you sure you womt to delite the product?")
    if(delComf)
    {
        alert("the priduct will be delited")
        let url="https://my-toy-store.herokuapp.com/shipment/del"
        
        let data=await doApiPostToken(url,{del:id})
       console.log(data);
    
       setApiReset(apiReset+1)
    }

   

  
}


  console.log(seeOrder);
  return (
    <>
    <Navadmin />
    <div className="orders_container2">
      
    

    
        
          {orders.map((item, i) => {
            return (
              <div key={i}  className="order_box">
                  <div className="order_item">
                <h3 className="order_num">{i + 1}</h3>
                </div>
                <div className="order_item">
                <h3>{item.full_name}</h3>
                </div>
                <div className="order_item">
                <h3>{item.phone}</h3>
                </div>
                <div className="order_item">
                <h3>{item.address}</h3>
                </div>
             
                
                <div className="order_item">
                <h3>{item.date}</h3>
                </div>
                <div className="order_item">
                {item.order.map((val, i) => {
                 
                    return (
                      <>
                        <h3 key={i}>{val.name}</h3>
                        
                  
                    </>
                       
                      );
                
                 
                 
                
                })}
                </div>

<div className="order_item_btn ">
                <h3><button className="btn_tabel_prods" onClick={()=>{delOrder(item._id)}}>del</button></h3>
                </div>
                 
              </div>
              
            );
          })}
        </div>
      




      



    
    
    </> );

}
