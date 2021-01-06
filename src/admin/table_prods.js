import React,{useEffect,useState} from "react"
import Navadmin from "./nav_admin"
import "../services/doApi"
import { doApi, doApiGetToken, doApiPostToken } from "../services/doApi"
import "../style/admin_style.css"
import {useHistory} from "react-router-dom"

export default function TableProds (props)
{
    let [prodes,setProdes]=useState([])
    let [apiReset,setApiReset]=useState(0)
    let history=useHistory()
    
   
    useEffect(()=>{


        let _url="https://my-toy-store.herokuapp.com/prods"
doApi(_url)
.then(data=>{
    console.log(data.data);
    
    sortProd(data.data)

})
console.log(prodes);


    },[apiReset,history])


const sortProd=(data)=>{

let tempArrey=data
let sorted=tempArrey.sort((a,b)=>a.in_stock>b.in_stock?1:-1)


setProdes(tempArrey)

console.log(sorted);

}





    const delProd=async(id)=>{
    console.log(id);


    let delComf=global.confirm("are you sure you womt to delite the product?")
    if(delComf)
    {
        alert("the priduct will be delited")
        let url="https://my-toy-store.herokuapp.com/prods/del"
      
        let data=await doApiPostToken(url,{del:id})
       console.log(data);
    
       setApiReset(apiReset+1)
    }

   

  
}



    return(
        <div className="table_prods_container">
            <Navadmin/>
        <table className="admin_table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>info</th>
                    <th>category</th>
                    <th>img_url</th>
                    <th>price</th>
                    <th>in stock</th>
                    <th>del</th>
                    <th>edit</th>
                </tr>
            </thead>
            <tbody className="tabel_body">
               {prodes.map((item,i)=>{
                    return(
                        <tr key={item._id}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.info}</td>
                    <td>{item.category}</td>
                  
                    <td><img src={item.img_url} className="admin_table_img"/></td>
                    <td>{item.price}</td>
                    {item.in_stock<10?<td style={{background:" rgba(223, 23, 66, 0.767)"}}>{item.in_stock}</td>:<td style={{background:"rgb(214, 99, 99,0)"}}>{item.in_stock}</td>}
                    
                    <td><button className="btn_tabel_prods" onClick={()=>{delProd(item._id)}}>del</button></td>
                    <td><button className="btn_tabel_prods" onClick={(event)=>{history.push("/admin/editprods/"+item._id)}}>edit</button></td>
                </tr>
                    )
               })}
            </tbody>
        </table>
      
        </div>
    )
}