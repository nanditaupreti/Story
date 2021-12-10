import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getAccessToken = (req:any) => {
    
    return req ? req.headers.cookie.split('; ').map((a:any) => {
        let arr = a.split('=');
        return {key: arr[0], val: arr[1]}
    }).find((a:any) => a.key == 'accessToken').val : ''
}
export const getMyStoreDetails = () =>{
    var config = {
      method: 'GET',
      // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
      headers: {
        'Authorization': 'authToken',
        'Content-Type': 'application/json',
        accesstoken: cookies.get('accessToken')
      }
    };
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getMyStoreDetails`, config)
    .then(response =>
      // {console.log(response);}
      {return response.json()}
      ).catch(error =>{
      console.log("Error in gettinMyDetails: ",error);
    });
}
export const getStoreAddDetails = (id:any) =>{

  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  return fetch(`http://saloonplus.com:8000/api_v1/store/getStoreAddSettings?storeId=${id}`, config)
  .then(response =>
    {return response.json()}
    ).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

}

export const getCurrencyDetails = () =>{

  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  return fetch(`http://saloonplus.com:4000/api_v1/admin/general/getCurrencies`, config)
  .then(response =>
    {return response.json()}
    ).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

}

export const getDemographics = () =>{

  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  return fetch(`http://saloonplus.com:4000/api_v1/admin/general/getDemorgraphics`, config)
  .then(response =>
    {return response.json()}
    ).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

}

export const editAddressById = (id:any,obj:any) =>{
    var config = {
      method: 'PUT',
      // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
      headers: {
        'Authorization': 'authToken',
        'Content-Type': 'application/json',
        accesstoken: cookies.get('accessToken')
        
      },
      "body": JSON.stringify(obj)
      
    };
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/editAddressById?id=${id}`, config)
    .then(response =>
      {return response.json()}
      ).catch(error =>{
      console.log("Error in gettinMyDetails: ",error);
    });
}
export const editStoreAddSettings = (obj:any) =>{
  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: {
      'Authorization': 'authToken',
      'Content-Type': 'application/json',
      accesstoken: cookies.get('accessToken')
      
    },
    "body": JSON.stringify(obj)
    
  };
  return fetch(`http://saloonplus.com:8000/api_v1/store//editStoreAddSettings`, config)
  .then(response =>
    {return response.json()}
    ).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });
}


export const getMyAddresslist = (req = null) => {
    console.log(cookies.get('accessToken'));
    
    return fetch(`${process.env.api_url}/profile/user/getMyAddresslist`, {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'authToken',
            accesstoken: req ? getAccessToken(req) : cookies.get('accessToken')
        }
    })
    .then(response => {
        const resp = response.json();
        console.log(resp)
        return resp
        // return response.json()
    })
}

// export const addAddress = (payload:object) => {
//     let _options = {...options, body: JSON.stringify(payload)}

//     return fetch(`${process.env.api_url}/addAddress`, _options)
//     .then(response => response.json())
// }