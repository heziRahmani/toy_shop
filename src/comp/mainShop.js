import React,{useState} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import AddProds from "../admin/add_prods"
import EditProds from "../admin/editProds"
import LogIn from "../admin/login"
import Navadmin from "../admin/nav_admin"
import table_prods from "../admin/table_prods"
import Cart from "./cart"



import LendingPage from "./landingPage"
import Prodacs from "./product"
import Footer from "./shopFooter"
import Nav from "./shop_nav"


import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { storeReducer } from "./reducer/reducer"
import SignUp from "../admin/signUp"
import PayPal from "../App"
import App from "../App"
import DelUser from "../admin/delUser"
import Shipment from "../admin/shipment_pag"
import Orders from "../admin/orders"


let store=createStore(storeReducer)







export default function Main_shop (props)
{

    const [prodSearch,setProdSearch]=useState("")


    const setSearch=(prod)=>{


       setProdSearch(prod)
        console.log(prodSearch);
    }


    


    return(
        <div>
          
        <Router>
        <Nav setSearch={setSearch}/>
            <Switch>
                <Provider store={store}>
                    <Cart/>
            <Route exact path="/" component={LendingPage}/>
            <Route exact path="/prods"    render={(props)=>(
                <Prodacs  prodSearch={prodSearch} />
            )}  />
            <Route exact path="/cat/:category" component={Prodacs}/>
            <Route exact path="/cat/:category/:catPageNum" component={Prodacs}/>
            <Route exact path="/search/:prodName" component={Prodacs}/>
            <Route exact path="/prods/page/:pagNum" component={Prodacs}/>
           

            <Route exact path="/payment" component={PayPal}/>
            <Route exact path="/shipment" component={Shipment}/>
            
           
           
            
           
            <Route exact path="/admin_login" component={LogIn}/>
            <Route exact path="/admin/signup" component={SignUp}/>
            
            <Route exact path="/admin/del" component={DelUser}/>
            <Route exact path="/admin/addprods" component={AddProds}/>
            <Route exact path="/admin" component={Navadmin}/>
            <Route exact path="/admin/tableprods" component={table_prods}/>
            <Route exact path="/admin/editprods/:id" component={EditProds}/>
            <Route exact path="/admin/orders" component={Orders}/>
            
           
    </Provider>
            </Switch>
        </Router>
     
 <Footer/>
    
        </div>
    )
}