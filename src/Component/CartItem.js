import React,{useContext} from 'react'
import { GlobalContext } from '../Context/Createcontext'

import {  Button } from '@material-ui/core'

const CartItem = ({products}) => {
    const {removeFromCart,increase,decrease} = useContext(GlobalContext)
    const remove=()=>{
        removeFromCart(products.id)
    }
    const increaseQtty = () => {
        increase(products.id);
    }

    const decreaseQtty = () => {
        if (products.quantity <= 1) {
            remove()
        } else {
            decrease(products.id);
        }
    }
    return (
        
            <tr>
             <td>
                    <Button color="secondary" onClick={remove}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </Button>{ products.name }
                </td>

                <td>${ products.price }</td>
                
                <td>{ products.quantity }</td>
                
                <td>
                    <Button color="primary" onClick={increaseQtty}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Button color="secondary" onClick={decreaseQtty}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </Button>
                </td>
                
                
        </tr>
        
    )
}

export default CartItem
