import React from "react";
import Header from "../Home/components/Header/Header";
import Footer from "../Home/components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import Goods from "./components/Goods/Goods";

const Catalog = () =>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Header/>;
            <FilterSection/>;
            <Goods/>
            <Footer/>;
        </div>
    );
}

export default Catalog;