const initState= {
allProds:[],
cartAr:[],
counter:156,
showCart:false,
showPayPal:false,
total:0,
in_stock:{},
order:[{}]




}


export const storeReducer=(state=initState,action)=>
{



if(action.type === "allProds")
{
return {...state,allProds:action.prods}
}


else if(action.type === "showCartProds")
{
    
return {...state,cartAr:action.cartItems}
}

else if(action.type === "addToCart")
{
   
return {...state,cartAr:checkProds(state,action),showCart:true}
}


else if(action.type === "clearCart")
{
   
return {...state,cartAr:action.clear}
}


else if(action.type === "delFromCart")
{
    let tempAr=state.cartAr.filter(item=>{
        return (item.id != action.idDel)
    })
return {...state,cartAr:tempAr}
}


else if(action.type === "showCart")
{
return {...state,showCart:action.show}
}


else if(action.type === "order")
{
return {...state,order:action.order}
}


else if(action.type === "in_stock")
{
return {...state,in_stock:action.in_stock}
}



else if(action.type === "showPayPal")
{
return {...state,showPayPal:action.showPayPal}
}


else if(action.type === "total")
{
return {...state,total:action.totalAmount}
}


else{
    return state
}
}



const checkProds=(state,action)=>
{
    let inCart=false
    let tempAr=[...state.cartAr]
    tempAr.forEach(item=>{
        if(item.id === action.cartProd.id)
        {
            item.amount++;
            inCart=true
        }
        
    })
if(!inCart)
{
    tempAr.push(action.cartProd)
}
    return tempAr
}