import React, { Component } from 'react'
import './TodoApp.css';
import './bootstrap.css';
import TodoDataServiceService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment'

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // { id: 1, description: 'learning React by Saatvik Sir', completed: false, targetDate: new Date() },
                // { id: 2, description: 'learning SpringBoot Saatvik Sir', completed: false, targetDate: new Date() },
                // { id: 3, description: 'learning SQL by Dhir Sir', completed: false, targetDate: new Date() },
                //  { id: 4, description: 'learning CSS (Self)', completed: false, targetDate: new Date() }
        ],
        message:null
        }
    }
    updateTodo=(id)=>
    {
       console.log("todo id is "+id);
       this.props.history.push(`/todos/${id}`);
    }
   addTodo=()=>
   {
    
    this.props.history.push("/todos/-1");
    
   }

    deleteTodo=(id)=>
    {
        let username=AuthenticationService.getLoggedInUser();
        console.log(username+ " with id as "+id);
        TodoDataServiceService.deleteTodo(username,id)
        .then(response => {this.setState({message:`Delete of user with ${id} is successful`})
        this.refreshTodos()})
        .catch(error=> this.setState({message:`Delete of user with ${id} is unsuccessful`}))

    }

    componentDidMount()//get executed after first render
    {
        console.log("componentDidMount");
        this.refreshTodos();
        
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps,nextState)//decides whther update state to render or not
    {
        //console.log(nextProps);
        //console.log(nextState);
        console.log("shouldComponentUpdate");
        return true;
    }

    refreshTodos=()=>
    {
        let username=AuthenticationService.getLoggedInUser();
       
        TodoDataServiceService.retrieveAllTodosService(username)
        .then(response => this.setState(
            {
                    todos:response.data
            })
            );


    }

    render() {
        console.log("render");
        return (
            <>
                
                <div className="container">
                <div className='TodoListComponent'> Todo List</div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed ?</th>
                                <th>update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(

                                    todo =>
                                        <tr key={todo.id}>{/*solves issue of console unique key*/}
                                            {/* <td>{todo.id}</td> */}
                                            <td >{todo.description}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{todo.completed.toString()}</td>
                                            <td><button className="btn success" onClick={()=>this.updateTodo(todo.id)}>Update</button></td>
                                            <td><button className="btn alert-warning" onClick={()=>this.deleteTodo(todo.id)}>Delete</button></td>
                                        </tr>
                                )


                            }
                        </tbody>

                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodo}>ADD</button>
                    </div>
                </div>
            </>
        )
    }
}

export default TodoListComponent;