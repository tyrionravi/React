import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igkey=>{
        return <li key ={igkey}>{igkey}: {props.ingredients[igkey]}</li>
    })
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Check out </p>
            <Button btnType ="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType ="Success" clicked ={props.purchaseCOntinued}>CONTINUE </Button>
        </Auxiliary>
    )


}
export default OrderSummary;