import axios from "axios";

class HelloWorldService 
{


    executeHelloWorldService()
    {
        //console.log("executeHelloWorldService executed");
       return axios.get("http://localhost:8080/hello-world");

     }

     executeHelloWorlBeandService()
     {
         //console.log("executeHelloWorldService executed");
        return axios.get("http://localhost:8080/hello-world-bean");
 
      }
 

      executeHelloWorlPathVariableService(name)
      {

        let username='A';
        let pass='B';
        
       
        let basicAuthHeader = 'Basic ' + window.btoa(username+":"+pass);
          //console.log("executeHelloWorldService executed");
         return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //  ,{
        //          headers : {
        //                authorization: basicAuthHeader
        //            }
        //        }
           );
  
       }
  

}

export default new HelloWorldService();