import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props)=>
(
    <div className = {classes.Logo} style = {{height: props.height}}>
        <img src = {burgerLogo}  alt ='My Burger'/>
    </div>
)

export default Logo;