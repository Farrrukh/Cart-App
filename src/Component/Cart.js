import React ,{useContext}from 'react'
import { GlobalContext} from '../Context/Createcontext'
import CartItem from './CartItem'
import './Cart.css'


const Cart = props => {

    const { cart }  = useContext(GlobalContext)
    return (
        <div className='cart'>
            <table id='cardTable'>
               <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
               </thead>
               <tbody>
                   {cart.map(item=>(<CartItem key={item.id} products={item}/>))}
               </tbody>
            </table>
        </div>
    )
}


export default Cart
