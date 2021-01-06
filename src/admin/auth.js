import React, { useEffect } from 'react';

function Auth(props){

  useEffect(() => {
    let url = "https://my-toy-store.herokuapp.com/users/checkTokenen";
    if(localStorage["token"]){
      
        fetch(url,{
        
        headers: {'x-auth-token':localStorage["token"]}
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.message !== "ok"){
          
          document.location.href = "/admin_login"
        }
        
      })
    }
    else{
   
      document.location.href = "/"
    }

  },[localStorage["token"]])

  return(
    <div></div> 
  )
}

export default Auth