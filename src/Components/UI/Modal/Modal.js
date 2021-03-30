import React from 'react';
import cssclasses from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props)=>
    (
        <Auxiliary>
            <Backdrop show={props.show} />
        <div className = {cssclasses.Modal}
        style ={{
            transform: props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: props.show? '1':'0'
        }}
        >
            {props.children}
        </div>
        </Auxiliary >

    )


export default Modal;