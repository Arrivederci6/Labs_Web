import React from "react";
import './Good.css';
import { Link } from 'react-router-dom';

const Good = ({ id, image, title, price, hasSmoking }) => {
    return (
        <div className="wrapper">
            <img src={image} alt="" className="image" />
            <h3 className="good__title">{title}</h3>
            <p className="good__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet labore, optio
                laboriosam aspernatur quae consequatur!
            </p>
            <div className="price__section">
                <h4 className="price__section-title">Price:</h4>
                <var className="price__section-price">$ {price}</var>
            </div>
            <Link to={`/catalog/${id}`} className="button">View more</Link>
        </div>
    )
}


export default Good;