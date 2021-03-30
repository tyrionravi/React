
import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssclasses from "./layout.module.css";


const Layout = (props)=>(
    <Auxiliary>
       <Toolbar />
       <Sidedrawer />
        <main className = {cssclasses.Content}>
            {props.children}
        </main >
    </Auxiliary>
)
export default Layout;