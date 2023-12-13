import React from "react";
import Good from "./Good";
import goodImage1 from '../../../../img/bing_chilling.jpg';
import goodImage2 from '../../../../img/bing_chilling_mao.jpg';
import goodImage3 from '../../../../img/bing_chilling_fake.jpg';
import goodImage4 from '../../../../img/buzz_lighter.jpg'

export const goodsData = [
    { id: 1, image: goodImage1, title: "Bing Chilling", price: "300", hasSmoking: true },
    { id: 2, image: goodImage2, title: "Bing Chilling Mao", price: "700", hasSmoking: false },
    { id: 3, image: goodImage3, title: "Fake Bing Chilling", price: "150", hasSmoking: false },
    { id: 4, image: goodImage4, title: "Buzz Lighter/ Max Khamuliak", price: "999", hasSmoking: true },
];

const Goods = ({ selectedValue1, selectedValue2, value }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "0 0 300px 0" }}>
            {goodsData
                .filter((good) => 
                    (selectedValue1 === "" || (selectedValue1 === "option1" && good.hasSmoking) || (selectedValue1 === "option2" && !good.hasSmoking)) &&
                    (selectedValue2 === "" || (selectedValue2 === "option1" && good.price > 500) || (selectedValue2 === "option2" && good.price < 500)) &&
                    (good.title.toLowerCase().includes(value.toLowerCase()) || good.price.toString().includes(value))
                )
                .map((good, index) => (
                    <Good key={index} id={good.id} image={good.image} title={good.title} price={good.price} hasSmoking={good.hasSmoking} />
                ))}
        </div>
    );
}


export default Goods;
