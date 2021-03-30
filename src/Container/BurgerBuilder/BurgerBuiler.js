import React , {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../Components/UI/Spinner/Spinner';


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 0.13,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        showSpinner: false
    }
    updatePurchaseState(ingredients){
        
        const sumArr = Object.keys(ingredients).map(igkey => ingredients[igkey]);
        console.log(`SumArr is: ${sumArr}`);
        let sum = 0;
        for(let i =0; i< sumArr.length;i++){
            
            sum = sum +sumArr[i];
        }
        console.log(`sum ${sum}`);
        this.setState({purchasable: sum>0})
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1  ;
        const updatedIngredient ={...this.state.ingredients};
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
        this.updatePurchaseState(updatedIngredient)
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1  ;
        const updatedIngredient ={...this.state.ingredients};
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
        this.updatePurchaseState(updatedIngredient)
    }
purchaseHandler=()=>{
    this.setState({purchasing: true})
}

purchaseCancelhandler =()=>{
    console.log('Hii');
    this.setState({purchasing: false})
}
purchaseContinueHandler = ()=>{
    this.setState({showSpinner: true})
    const order ={
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
            name: 'Ravi',
            address:{
                Village: 'Targa',
                zipcode: 828125,
                country: 'India'
            },
            email: 'ravikr0205@gmail.com'
        },
        deliveryMethod: 'fast'
    }
    axios.post('/orders.json',order).then(response=>{this.setState({showSpinner: false, purchasing:false})}).catch(error=>
        {this.setState({showSpinner: false, purchasing:false})});
}

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0
        }
        let orderSummary = <OrderSummary ingredients = {this.state.ingredients}
        purchaseCancelled ={this.purchaseCancelhandler}
        purchaseCOntinued = {this.purchaseContinueHandler}
        price = {this.state.totalPrice}
        />
        if(this.state.showSpinner){
            orderSummary = <Spinner />

        }
        return(
            <Auxiliary>
                <Modal show = {this.state.purchasing} modalClosed= {this.purchaseCancelhandler}>
                    {orderSummary}
                    
                </Modal>
                <div><Burger ingredients = {this.state.ingredients}/></div>
                <BuildControls ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disableInfo}
                purchasable = {!this.state.purchasable}
                ordered ={this.purchaseHandler}
                price = {this.state.totalPrice}
                
                />
                {this.updatePurchaseState}
            </Auxiliary>

        )
    }
}
export default BurgerBuilder;