import React, { useContext } from 'react';
import { Card, Typography, CardContent, Button } from '@material-ui/core'

import { GlobalContext } from '../Context/Createcontext'

const Product = ({ product }) => {
    const { cart, addToCart, increase } = useContext(GlobalContext);

    const add = () => {
        if (cart.find(item => item.id === product.id)) {
            // product.quantity++;
            increase(product.id)
        } else {
            product.quantity=1;
            addToCart({product});
        }
    }

    return (
        <div className="product">
            <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5">{ product.name }</Typography>
                        <Typography variant="h6">{ product.price }</Typography>
                        <Button variant="outlined" color="primary" size="small" onClick={add}>Add to Cart</Button>
                    </CardContent>
            </Card>
           
        </div>
    )
}

export default Product