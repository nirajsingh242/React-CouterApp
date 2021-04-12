import axios from "axios";

import  {USER_SESSION_ATTRIBUTE__NAME , API_URL } from '../../Constants.js'

class AuthenticationService{

//basic auth token    
    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`, 
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }



    createBasicAuthToken(username,password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    registerSccessfullLogin(username,password)
{
    sessionStorage.setItem(USER_SESSION_ATTRIBUTE__NAME,username);
    console.log("Authenticated "+username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username,password));
}



logout()
{
    sessionStorage.removeItem(USER_SESSION_ATTRIBUTE__NAME);
    console.log("sssion cleared");
}

isUserLoggedIn()
{
    let user=sessionStorage.getItem(USER_SESSION_ATTRIBUTE__NAME);
    if(user===null)
    {
        return false;
    }

    return true;
}

getLoggedInUser()
{
    let user=sessionStorage.getItem(USER_SESSION_ATTRIBUTE__NAME);
    if(user===null)
    {
        return '';
    }

    return user;
}

setupAxiosInterceptors(basicAuthHeader) {

    axios.interceptors.request.use(
        (config) => {
            if(this.isUserLoggedIn()) {
                config.headers.authorization = basicAuthHeader
               
            }
            return config
        }
    )
}


//Jwt Authentication

executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, 
        {
            username,
            password

        })
}

createJwtAuthToken(token) {
    console.log('Bearer ' +token)
    return 'Bearer ' +token 
}


setupAxiosInterceptorsForJwt(token) {

    axios.interceptors.request.use(
        (config) => {
            if(this.isUserLoggedIn()) {
                config.headers.authorization = token
               
            }
            return config
        }
    )
}


registerSccessfullLoginForJwt(username,token)
{
    sessionStorage.setItem(USER_SESSION_ATTRIBUTE__NAME,username);
    console.log("Authenticated "+username);
    this.setupAxiosInterceptorsForJwt(this.createJwtAuthToken(token));
}



}

export default new AuthenticationService();//As we need to export instance of it