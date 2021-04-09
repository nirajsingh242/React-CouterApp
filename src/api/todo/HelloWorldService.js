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
          //console.log("executeHelloWorldService executed");
         return axios.get(`http://localhost:8080/hello-world/path-variable//${name}`);
  
       }
  

}

export default new HelloWorldService();