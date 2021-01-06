import "./paypal.css"
import React, { useState, useRef, useEffect} from 'react';
import CartItem from '../cartItem';
import {useSelector,useDispatch} from "react-redux"  
import {useHistory} from "react-router-dom"


function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  let dispatch=useDispatch()
  let total=useSelector((state)=>state.total)

  
 


  let history=useHistory()

  useEffect(() => {
    console.log(total);
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
             
                amount: {
                  currency_code: 'ILS',
                  value: product.totalAmount
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
         
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.total,total]);

  if (paidFor) {
 history.push("/shipment")
 dispatch({type:"showCart",show:false})

    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
      </div>
    );
  }

  return (
    <div className="pay_box_container">
    <div  >
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
    
      <div ref={paypalRef} className="payPalBox"/>
    </div>
    </div>
  );
}

function App(props) {

  let dispatch=useDispatch()
  let total=useSelector((state)=>state.total)
  let payPal=useSelector((state)=>state.showPayPal)
  
 let item=props.item
 dispatch({type:"order",order:item}) 
 
  
  console.log(item);
  
  
  console.log(total);
  console.log(payPal);
  const product = {
    totalAmount:total
  }

  return (
    <div className="App">
      <CartItem  item={item}/>
     
      {(payPal)?<Product product={product} />:""}
      
    </div>
  );
}

export default App;