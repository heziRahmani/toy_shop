import React from "react"
import {Link} from "react-router-dom"
import "../style/shop_product.css"




export default function Prodacs_nav(props)
{



    return(
        <div >
            
            <div className="product_nav_container">
            <div className="product_list_box">
                <ul className="product_list">
                    <li className="product_list_item"><Link className="product_list_link" to="/prods" >All</Link></li>
                    <li className="product_list_item"><Link className="product_list_link" to="/cat/console">Console</Link></li>
                    <li className="product_list_item"><Link className="product_list_link" to="/cat/console_games">Consol Games</Link></li>
                    
                    <li className="product_list_item"><Link className="product_list_link" to="/cat/action_figures" >Action Figures</Link></li>
                    <li className="product_list_item"><Link className="product_list_link" to="/cat/lego" >Lego</Link></li>
                </ul>
            </div>
        
</div>


        </div>
    )
}