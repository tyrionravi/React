import React from 'react';
import cssclasses from './backdrop.module.css';

const Backdrop = (props)=>(
    props.show ? <div className = {cssclasses.Backdrop}></div> : null
)
export default Backdrop;