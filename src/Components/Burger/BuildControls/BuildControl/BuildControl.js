import React from 'react';
import cssclasses from './BuildControl.module.css'

const BuildControl = (props) =>{
    return(
        <div className = {cssclasses.BuildControl}>
            <div className = {cssclasses.Label}>{props.label}</div>
            <button className = {cssclasses.Less} onClick = {props.removed}
            disabled = {props.disabled}
            >Less</button>
            <button className = {cssclasses.More} onClick = {props.added}>More</button>
        </div>
    )

}

export default BuildControl;