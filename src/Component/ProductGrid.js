import React, { useContext } from 'react'
import './ProductGrid.css'
import Product from './Product'
import { GlobalContext } from '../Context/Createcontext'

const ProductGrid = () => {
    const { products } = useContext(GlobalContext);
    
    return (
        <div className="productGrid">
            {products.map(product => (<Product key={product.id} product={product} />))}
        </div>
    )
}

export default ProductGrid