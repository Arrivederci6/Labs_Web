import React from "react";
import './Partner.css'

const Partner = ({image, name}) => {
    return(
        <div className="partner__container">
            <div className="envelopment">
                <img src={image} alt="bing_chilling" style={{width:"350px", height:"300px"}}/>
                <h3 className="partner__title">{name}</h3>
                <p className="partner__text small__text">
                    Lorem ipsum, dolor sit 
                    amet consectetur adipisicing elit. Eveniet labore, optio 
                    laboriosam aspernatur quae consequatur!</p>
            </div>
        </div>
    )
}

export default Partner