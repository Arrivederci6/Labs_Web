import React from "react";
import Good from "./Good";
import Spinner from "../../../../components/Loader";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Goods = ({ selectedValue1, selectedValue2, value, id }) => {
    const [goodsData, setGoodsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timer = null;

        const fetchGoods = async () => {
            setIsLoading(true);
            timer = setTimeout(() => setIsLoading(false), 1500);
            
            const response = await axios.get('http://localhost:5500/goods');
            setGoodsData(response.data);
        };

        fetchGoods();
        return () => clearTimeout(timer);

    }, [id]);

    return isLoading ? <Spinner /> :(
        <div style={{ display: "flex", justifyContent: "space-around", margin: "0 0 300px 0" }}>
            {goodsData
                .filter((good) => 
                    (selectedValue1 === "" || (selectedValue1 === "option1" && good.hasSmoking) || (selectedValue1 === "option2" && !good.hasSmoking)) &&
                    (selectedValue2 === "" || (selectedValue2 === "option1" && good.price > 500) || (selectedValue2 === "option2" && good.price < 500)) &&
                    (good.title.toLowerCase().includes(value.toLowerCase()) || good.price.toString().includes(value))
                )
                .map((good, index) => (
                    <Good key={index} id={good.id} title={good.title} price={good.price} hasSmoking={good.hasSmoking} image={good.image} />
                ))}
        </div>
    );
}

export default Goods;
