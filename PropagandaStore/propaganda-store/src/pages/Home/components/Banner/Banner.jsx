import React from "react";
import './Banner.css';
import BannerArticle from "./BannerArticle";
import BannerImage from '../../../../img/mao.jpg'

const Banner = () =>{
    return(
        <main className="main">
            <img src={BannerImage} alt="mao" />
            <BannerArticle/>
        </main>
    )
}

export default Banner;