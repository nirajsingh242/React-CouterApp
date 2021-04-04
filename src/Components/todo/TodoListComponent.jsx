import React, { Component } from 'react'
import './TodoApp.css';
import './bootstrap.css';

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ id: 1, description: 'learning React by Saatvik Sir', done: false, targetDate: new Date() },
            { id: 2, description: 'learning SpringBoot Saatvik Sir', done: false, targetDate: new Date() },
            { id: 3, description: 'learning SQL by Dhir Sir', done: false, targetDate: new Date() },
            { id: 4, description: 'learning CSS (Self)', done: false, targetDate: new Date() }]
        }
    }
    render() {
        return (
            <>
                <div className='TodoListComponent'> Todo List</div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(

                                    todo =>
                                        <tr key={todo.id}>{/*solves issue of console unique key*/}
                                            {/* <td>{todo.id}</td> */}
                                            <td >{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )


                            }
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}

export default TodoListComponent;