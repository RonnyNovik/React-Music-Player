import React from 'react';
import styles from './Button.module.css';
import { CSSTransition } from 'react-transition-group';
const Button = (props) => {
    return (
        <>
        <CSSTransition
                in={props.isToggled}
                appear={true}
                timeout={300}
                classNames='fade'>
        <button ref={props.ref} 
                 onClick={() => props.click(props.toggledType)} 
                 className={`${styles[props.type]}`}>
                 <i className={`${props.icon} ${props.isToggled ? styles['ui-icon-toggled'] : ''}`}></i>
                 {props.children}
         </button>
         </CSSTransition>
        </>
    );
};

export default Button;