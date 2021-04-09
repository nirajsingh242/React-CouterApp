import axios from "axios";

class TodoDataServiceService 
{

      retrieveAllTodosService(username)
      {
          //console.log("retrieveAllTodosService executed");http://localhost:8080/users/username/todos
         return axios.get(`http://localhost:8080/users/${username}/todos`);
  
       }
  

       deleteTodo(username,id)
       {
           //console.log("deleteTodo executed");http://localhost:8080/users/username/todos/id
          return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
   
        }


        getTodoById(username,id)
        {
            //console.log("deleteTodo executed");http://localhost:8080/users/username/todos/id
           return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
    
         }


         updateTodo(username,id,todo)
         {
             //console.log("updateTodo executed");http://localhost:8080/users/username/todos/id
            return axios.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
     
          }

          
         addTodo(username,todo)
         {
             //console.log("updateTodo executed");http://localhost:8080/users/username/todos/id
            return axios.post(`http://localhost:8080/users/${username}/todos`,todo);
     
          }
  

}
export default new TodoDataServiceService();