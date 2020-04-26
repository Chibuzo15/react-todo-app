import React from 'react';
import classes from './TodoList.module.css'
import SingleTodo from '../SingleTodo/SingleTodo';

const todoList = (props) => {
    const todos = props.todos
    let i = 0;
    const todolist = todos.map( key => {
        i++;
       return (
        <SingleTodo
        deleteTodo={props.deleteTodo}
        number={key.id}
        key={i}
        time= {key.time}
        title= {key.title}
        />
       ) 
    })

    // console.log(todos);

    return(
        <ul className={classes['TodoListWrapper']}>
            {todolist}
        </ul>
    )
}

export default todoList;