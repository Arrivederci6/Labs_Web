import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };
    
    const changeQuantity = (item, quantity) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].quantity = quantity;
                return updatedCart;
            }
            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, changeQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
