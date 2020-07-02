import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const startingState = {
    products: [
        { id: 1, name: 'Zero to One', price:10},
        { id: 2, name: 'Antifragile', price:20},
        { id: 3, name: 'Sapiens', price:99},
        { id: 4, name: 'The Learn Startup', price:33},
        { id: 5, name: 'AI Superpowers', price:2},
    ],
    cart: [
      { id: 4, name: 'The Learn Startup', price:33, quantity: 1},
        { id: 5, name: 'AI Superpowers', price:2, quantity: 1},
    ]
}

export  const GlobalContext = createContext(startingState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, startingState);

    function addToCart(product) {      
      dispatch({
        type: 'addToCart',
        payload: product
      })
    }

    function removeFromCart(id) {
      dispatch({
        type: 'remove',
        payload: id
      })
    }

    function increase(id) {
      dispatch({
        type: 'increase',
        payload: id
      })
    }

    function decrease(id) {
      dispatch({
        type: 'decrease',
        payload: id
      })
    }

    return (<GlobalContext.Provider value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeFromCart,
        increase,
        decrease
      }}>
        {children}
      </GlobalContext.Provider>);

}