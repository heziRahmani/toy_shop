

export const doApi = async (_url) => {
  let resp = await fetch(_url,{
    method: "GET",
    headers: {
      'content-type': "application/json",
    'Accept': 'application/json'
  }
  });
  let data = await resp.json();
 
  return data;
}





export const doApiPost = async (_url, _body) => {
  let resp = await fetch(_url, {
      method: "POST",
      body: JSON.stringify(_body),
      headers: {
          'content-type': "application/json",
          'Accept': 'application/json'
      }
  })
  let data = await resp.json()
  console.log("service say:" ,data)
  return data;
}




export const doApiPostPaypal = async () => {

  let _url="https://api-m.sandbox.paypal.com/v1/oauth2/token "
  let resp = await fetch(_url, {
      method: "GET",
      headers: {
          'content-type': "application/json",
          
         
          "Authorization": 
      }
  })
  let data = await resp.json()
  console.log("paypal" ,data)
  return data;
}







export const doApiPostToken = async (_url, _body) => {
  let resp = await fetch(_url, {
      method: "POST",
      body: JSON.stringify(_body),
      headers: {
        'content-type': "application/json",
        'Accept': 'application/json',
          'x-auth-token':localStorage["token"]
      }
  })
  let data = await resp.json()
  console.log("service say:" ,data)
  return data;
}

export const doApiGetToken = async (_url, _body) => {
  let resp = await fetch(_url, {
      method: "GET",
      body: JSON.stringify(_body),
      headers: {
        'content-type': "application/json",
        'Accept': 'application/json',
          'x-auth-token':localStorage["token"]
      }
  })
  let data = await resp.json()
  console.log("service say:" ,data)
  return data;
}












































// export const doApi=async(_url)=>
// {
//     let resp=await fetch(_url)
//     let data=await resp.json()
    // let dataArray=Object.entries(data.rates)
    // console.log(data);
    // console.log(dataArray);
//     return data
// }

// export const doApiPost=async (_url,_body)=>{


//      await fetch(_url, {
//         method:"POST",
//         body:JSON.stringify(_body),
//         headers: { 'content-type': "application/json"
//        }
//       })
//       .then(resp => resp.json())
//       .then(data => { 
//         console.log(data)
//        return data;
//   })
// }