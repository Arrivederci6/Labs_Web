import React, { useState } from "react";
import Good from "./Good";
import goodImage1 from '../../../../img/bing_chilling.jpg';
import goodImage2 from '../../../../img/bing_chilling_mao.jpg';
import goodImage3 from '../../../../img/bing_chilling_fake.jpg';
import goodImage4 from '../../../../img/buzz_lighter.jpg'
import selectedValue1 from '../FilterSection/FilterSection'

const goodsData = [
    { image: goodImage1, title: "Bing Chilling", price: "300", hasSmoking: true },
    { image: goodImage2, title: "Bing Chilling Mao", price: "700", hasSmoking: false },
    { image: goodImage3, title: "Fake Bing Chilling", price: "150", hasSmoking: false },
    { image: goodImage4, title: "Buzz Lighter/ Max Khamuliak", price: "999", hasSmoking: true },
];

const Goods = ({selectedValue1}) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "0 0 300px 0" }}>
            {goodsData.filter((good) => selectedValue1 === "" || (selectedValue1 === "option1" && good.hasSmoking) || (selectedValue1 === "option2" && !good.hasSmoking)).map((good, index) =>(
                <Good key={index} image={good.image} title={good.title} price={good.price} hasSmoking={good.hasSmoking} />
            ))}
        </div>
    );
}

export default Goods;