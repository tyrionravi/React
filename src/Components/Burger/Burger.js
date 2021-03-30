import React from 'react';
import cssclasses from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/Burgeringredient';

const Burger = (props) =>{
    
const transsformedIngredient = Object.entries(props.ingredients);
console.log(transsformedIngredient);
let arr = []
for (const items of transsformedIngredient){
  while(items[1]>0){
    arr.push(items[0]);
    items[1]= items[1]-1;
  }
}
console.log(arr)
let burgeritems = arr.map((items,i)=>
     <BurgerIngredient type = {items} key ={items+i}/>)
console.log(burgeritems);
if(arr.length ===0){
    burgeritems = <p>Please start adding items</p>
}



    return(
        <div className = {cssclasses.Burger}>
            <BurgerIngredient type="bread-top" />
            
            {burgeritems}
            <BurgerIngredient type="bread-bottom" />


        </div>

    );
}
export default Burger;