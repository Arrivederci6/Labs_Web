import React from "react";
import './Good.css';
import PrimaryButton from "../../../../components/PrimaryButton";

const clickHandler = () =>{
    alert("view more button has been clicked")
} 

const Good = ({ image, title, price }) => {
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
            <PrimaryButton text="View more" onClick={clickHandler}/>
        </div>
    )
}


export default Good;