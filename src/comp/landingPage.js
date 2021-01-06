import React from "react"
import "../style/landing_page.css"
import ShopHeader from "./header"
import {useSelector,useDispatch} from "react-redux"



export default function LendingPage (props)
{


 
  let showCart=useSelector((state)=>state.showCart)
  let dispatch=useDispatch()
  











    return(
        <div className="lendingPage_container"  onClick={()=>{if(showCart){dispatch({type:"showCart",show:false})}}}>
            
      <ShopHeader/>

      <div className="lendinPage_products">









        {/* card 1 */}
      <div className="item_card landindPage_card">
        <img className="prod_img" src="https://gmedia.playstation.com/is/image/SIEPDC/godfall-standard-edition-store-art-01-ps5-en-21aug20?$native$"/>
         <h2 className="prod_name" >godfall</h2>
      <div className="prod_card_bottom">
      <h3 className="prod_price">price: 60$</h3>
      </div>
    </div>



          {/* card 2 */}
          <div className="item_card landindPage_card">
        <img className="prod_img" src="https://cdn.mos.cms.futurecdn.net/MVEPDkmNHwy4UKoFT8n9XP-1200-80.jpg"/>
         <h2 className="prod_name" >playstation 5</h2>
    <p className="prod_info">תשלום זה הינו מקדמה בלבד, והוא נותן לכם את האפשרות להיות  ראשונים שירכשו את הקונסולה הבאה מיד בהגיעה לישראל.</p>
      <div className="prod_card_bottom">
      <h3 className="prod_price">price: 200$</h3>
      </div>
    </div>


          {/* card 3 */}
          <div className="item_card landindPage_card">
        <img className="prod_img" src="https://www.hasbro.com/common/productimages/en_US/99E762225E444CA79E4D9D44AC723766/F1BC67C51ECF44FF98E22D77A458B6FD.jpg"/>
         <h2 className="prod_name" >G.I. Joe Classified Series Snake Eyes</h2>
      <div className="prod_card_bottom">
      <h3 className="prod_price">price: 200$</h3>
      </div>
    </div>



      </div>
        </div>
        
    )
}