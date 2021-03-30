import React from 'react';
import cssclasses from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) =>{
    return(
        <div className = {cssclasses.BuildControls}>
            <p>Price of the burger is: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
                <BuildControl key = {ctrl.label} label = {ctrl.label} 
                added = {()=>props.ingredientAdded(ctrl.type)}
                removed = {()=>props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
                
            ))}
            <button className = {cssclasses.OrderButton}
            disabled = {props.purchasable}
            onClick = {props.ordered}
            >ORDER NOW</button>
        </div>
    )

}

export default BuildControls;