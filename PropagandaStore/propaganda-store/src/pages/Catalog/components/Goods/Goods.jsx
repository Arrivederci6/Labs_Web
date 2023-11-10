import React from "react";
import Good from "./Good";
import goodImage1 from '../../../../img/bing_chilling.jpg';
import goodImage2 from '../../../../img/bing_chilling_mao.jpg';
import goodImage3 from '../../../../img/bing_chilling_fake.jpg';
import goodImage4 from '../../../../img/buzz_lighter.jpg'

const goodsData = [
    { image: goodImage1, title: "Bing Chilling", price: "300" },
    { image: goodImage2, title: "Bing Chilling Mao", price: "700" },
    { image: goodImage3, title: "Fake Bing Chilling", price: "150" },
    { image: goodImage4, title: "Buzz Lighter/ Max Khamuliak", price: "999" },
];

const Goods = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "0 0 300px 0" }}>
            {goodsData.map((good, index) => (
                <Good key={index} image={good.image} title={good.title} price={good.price} />
            ))}
        </div>
    );
}

export default Goods;