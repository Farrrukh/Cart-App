import React, { useContext } from 'react'
import {GlobalContext} from '../Context/Createcontext'
import './Navbar.css';
import { Link } from "react-router-dom";

function Navigation() {
    const { cart } = useContext(GlobalContext);
    var divStyle = {
        color: 'white',
        backgroundColor:'#A52A2A'
      };
      
    return (
        
        <ul style={divStyle}>
            <li ><Link to="/"><i class="fa fa-home"></i></Link></li>
            <li><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</Link></li>
        </ul>
        
    
    )
}

export default Navigation