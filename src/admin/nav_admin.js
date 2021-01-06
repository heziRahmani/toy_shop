import React from "react"
import {Link,useHistory} from "react-router-dom"

import "../style/admin_nav.css"
import Auth from "./auth"



export default function Navadmin(props)
{



    let history = useHistory()
    const logOut = () => {
      localStorage.removeItem("token");
      history.push("/");
    }




    return(
        <div>
          
            <nav className="admin_nav">
                <div className="nav_admin_list_container">
                    <ul className="nav_admin_list">
                        
                        <li className="nav_admin_list_item"><Link className="nav_list_link" to="/admin/addprods">Add Product's</Link></li>
                        <li className="nav_admin_list_item"><Link className="nav_list_link" to="/admin/tableprods">Table Prodes</Link></li>
                        <li className="nav_admin_list_item"><Link className="nav_list_link" to="/admin/signup">Add/Del User</Link></li>
                        <li className="nav_admin_list_item"><Link className="nav_list_link" to="/admin/orders">Orders</Link></li>
                        <Link to="#" onClick={logOut}>log out</Link>
                    </ul>
                    
                </div>
                <Auth/>
            </nav>
            
        </div>
    )
}