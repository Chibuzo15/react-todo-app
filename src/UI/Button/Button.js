import React from 'react';
import classes from './Button.module.css'

const button = (props) => {
    let style = [classes['Button'], classes[props.type]];
    
    return(
        <button 
        onClick={props.buttonClickHandler}
        className={style.join(' ')}
        >
            {props.children}
        </button>
    )
}

export default button;