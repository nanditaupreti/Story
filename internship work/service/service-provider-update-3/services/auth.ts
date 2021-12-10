import Cookies from 'universal-cookie';
const cookies = new Cookies();

const options = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'authToken',
    },
    body: ''
}
export const verifyPhoneOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': cookies.get("accessToken")
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addPhoneNumberToAccount`, options as RequestInit)
    .then(response => response.json())
}
export const verifyEmailOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': cookies.get('accessToken')
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addEmailToAccount`, options as RequestInit)
    .then(response => response.json())
}
export const login = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/storelogin`, _options)
    .then(response => response.json())
}


export const signup = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/user/addUser`, _options)
    .then(response => response.json())
}

export const sendPhoneOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/authentication/sendPhoneOTP`, _options)
    .then(response => response.json())
}

export const sendEmailOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/authentication/sendEmailOTP`, _options)
    .then(response => response.json())
}

export const verifyOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`${process.env.api_url}/profile/user/addPhoneNumberToAccount`, options as RequestInit)
    .then(response => response.json())
}



export const validateEmail = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    return fetch(`${process.env.api_url}/profile/user/emailAvailability`, _options)
    .then(response => response.json())
}

export const validateUserName = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/user/userNameAvailability`, _options)
    .then(response => response.json())
}

export const validatePhoneNumber = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/user/phoneNumberAvailability`, _options)
    .then(response => response.json())
}

export const changePasswordWithOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/profile/user/changePasswordWithOTP`, _options)
    .then(response => response.json())
}