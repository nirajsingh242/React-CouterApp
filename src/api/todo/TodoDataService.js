import axios from "axios";
import  {USER_SESSION_ATTRIBUTE__NAME , API_URL } from '../../Constants.js'
class TodoDataServiceService 
{

      retrieveAllTodosService(username)
      {
          //console.log("retrieveAllTodosService executed");http://localhost:8080/users/username/todos
         return axios.get(`${API_URL}/users/${username}/todos`);
  
       }
  

       deleteTodo(username,id)
       {
           //console.log("deleteTodo executed");http://localhost:8080/users/username/todos/id
          return axios.delete(`${API_URL}/users/${username}/todos/${id}`);
   
        }


        getTodoById(username,id)
        {
            //console.log("deleteTodo executed");http://localhost:8080/users/username/todos/id
           return axios.get(`${API_URL}/users/${username}/todos/${id}`);
    
         }


         updateTodo(username,id,todo)
         {
             //console.log("updateTodo executed");http://localhost:8080/users/username/todos/id
            return axios.put(`${API_URL}/users/${username}/todos/${id}`,todo);
     
          }

          
         addTodo(username,todo)
         {
             //console.log("updateTodo executed");http://localhost:8080/users/username/todos/id
            return axios.post(`${API_URL}/users/${username}/todos`,todo);
     
          }
  

}
export default new TodoDataServiceService();