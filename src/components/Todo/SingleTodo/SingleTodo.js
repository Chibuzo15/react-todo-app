import React from 'react';
import classes from './SingleTodo.module.css';
import Button from '../../../UI/Button/Button'

const singleTodo = (props) => (
<div className={classes['TodoBoxWrap']}>
    <li className={classes['TodoBox']}  >
        <p className={classes['Numbering']}>{props.number}</p>
        <div className={classes['TodoTextWrap']}>
            <div className={classes['TodoText']}>Time: {props.time} </div>
            <div className={classes['TodoText']}>Title: {props.title} </div>
    </div>            
    </li>
    <Button
    buttonClickHandler = {(event) => props.deleteTodo(event, props.number)}
    type="Delete"
    >Delete</Button>
</div>
);

export default singleTodo;