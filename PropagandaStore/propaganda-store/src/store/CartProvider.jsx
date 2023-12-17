import React, { useReducer } from 'react';
import { CartContext } from './CartContext';
import { addToCart, changeQuantity } from './actions';
import { cartReducer } from './cartReducer';

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    
    const handleChangeQuantity = (item, quantity) => {
        if (quantity >= 0) {
            dispatch(changeQuantity(item, quantity));
        }
    };
    

    return (
        <CartContext.Provider value={{ cart, addToCart: handleAddToCart, changeQuantity: handleChangeQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
