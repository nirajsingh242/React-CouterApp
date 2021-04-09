import React, { Component } from 'react'
import moment from 'moment'

import { ErrorMessage, Field, Form, Formik } from 'formik';
import TodoDataServiceService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
 
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount()
    {
        if(this.state.id==='-1') {
            return;
        }

        console.log("componentdid moount");
        let username=AuthenticationService.getLoggedInUser();
        TodoDataServiceService.getTodoById(username,this.props.match.params.id)
        .then(response=>this.setState({
            description:response.data.description,
            targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
        .catch(error=>console.log(error))

    }
    validate=(values)=>
    {
            let errors={};

            if(!values.description)
            {
                    errors.description='Please enter description'
            }
            else if(values.description.length<5)
            {
                     errors.description='Please enter min 5 char in description'
                     
            }
            
            if(!moment(values.targetDate).isValid)
            {
                errors.description='Please enter valid target date'
            }
           
            return errors;

    }

    onSubmit=(values)=>
    {
        console.log(values+" submit")
        let todo={
            id:this.state.id,
            description:values.description,
            targetDate:values.targetDate
        }

        if(this.state.id==='-1')
        {
            let username=AuthenticationService.getLoggedInUser();
            TodoDataServiceService.addTodo(username,todo)
            .then(()=>this.props.history.push('/todos'))
            .catch(error=>console.log(error))
        }else{

        let username=AuthenticationService.getLoggedInUser();
        TodoDataServiceService.updateTodo(username,this.state.id,todo)
        .then(()=>this.props.history.push('/todos'))
        .catch(error=>console.log(error))
    }

    }

    render()
    {
        let {description,targetDate}=this.state;
        return(
            <div >
               
            <div className="container TodoComponent">
            <h1 >Todo Form</h1>
                <Formik  initialValues={{description,targetDate}}
                
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                >
                    {
                        (props)=>(
                                <Form>
                                    <ErrorMessage name="description" className="alert alert-warning" component="div"/>
                                    <ErrorMessage name="targetDate" className="alert alert-warning" component="div"/>
                                    <fieldset className="form-group">
                                            <label>Description</label> 
                                            <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>   

                                    
                                    <fieldset className="form-group">
                                            <label>Target Date</label> 
                                            <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset> 
                                    
                                    <button className="btn btn-success" type="submit">Save</button>      
                                </Form>

                        )
                    }

                </Formik>

            </div>

            </div>
        )
    }
}

export default TodoComponent;