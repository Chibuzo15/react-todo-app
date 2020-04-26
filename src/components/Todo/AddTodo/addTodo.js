import React, { Component } from 'react';
import classes from './addTodo.module.css';
import Button from '../../../UI/Button/Button'

class AddTodo extends Component {
   
    render(){
        return (
            <div>
                <div className='Title'>Add New Todo Item</div>
                <form className={classes['Form']}>
                    <label className={classes['FormLabel']}>
                        Todo Name
                        <input onChange = {this.props.titleHandler}
                         value={this.props.title}
                         name='title'
                         type='text' />
                    </label>
                    <label className={classes['FormLabel']}>
                        Time
                        <input onChange = {this.props.timehandler}
                        value={this.props.time}
                        name='time'
                        type='text' /> 
                    </label>
                    <Button 
                    buttonClickHandler = {this.props.addTodoHandler}
                    type="Success"
                    >ADD</Button>
                </form>
            </div>
        )
    }
}

export default AddTodo;