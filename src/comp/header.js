import React from "react"
import "../style/header.css"
import Strip from "./headerStrip"


export default function ShopHeader (props)
{




    return(
        <div className="header_container">
            <div className=".header_title">
            <h2 className="strip_header">TOY SHOP</h2>
                <h3 className="strip_sub_header">Find your next hobby;)</h3> </div>

            <Strip/>
        </div>
    )
}