import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Home/components/Header/Header";
import Footer from "../Home/components/Footer/Footer";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";

const Cart = () => {
    const { cart, changeQuantity } = useContext(CartContext);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <Header />
            <h1 style={{ margin: "50px 0", textAlign: 'center'}} className="title">Shopping Cart</h1>
            
            {cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-around', border:'1px solid #000', padding: '20px'}}>
                    <h2 style={{fontSize:'24px', fontWeight:"700"}} className="text">{item.title}</h2>
                    <div style={{display:'flex'}}>
                        <button onClick={() => changeQuantity(item, item.quantity - 1)} style={{border:'2px solid #000', padding:'10px 20px', borderRadius:'5px', backgroundColor:'#fff'}}>-</button>
                        <p style={{fontWeight:"500", fontSize:'24px', margin:'0 30px'}}>{item.quantity}</p>
                        <button onClick={() => changeQuantity(item, item.quantity + 1)} style={{border:'2px solid #000', padding:'10px 20px', borderRadius:'5px', backgroundColor:'#fff'}}>+</button>
                    </div>
                    <p style={{fontWeight:"500", fontSize:'24px'}}>${item.price * item.quantity}</p>
                </div>
            ))}

            <h2 style={{ margin: "30px 0 100px 1500px"}} className="text">Total amount: ${totalAmount.toFixed(2)}</h2>
            <Link to="/catalog" className="button" style={{marginLeft: '30px'}}>Back to catalog</Link>          
        </div>
    );
};

export default Cart;
