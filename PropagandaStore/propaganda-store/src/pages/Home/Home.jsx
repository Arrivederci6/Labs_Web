import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partner/Partners";
import Footer from "./components/Footer/Footer";

const Home = () =>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"160px"}}>
            <Header/>
            <Banner/>
            <Partners/>
            <Footer/>
        </div>
    )
}

export default Home;