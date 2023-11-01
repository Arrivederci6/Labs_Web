import React from "react";
import Partner from "./Partner";
import partnerImage1 from '../../../../img/bing_chilling.jpg'
import partnerImage2 from '../../../../img/bing_chilling_mao.jpg'
import partnerImage3 from '../../../../img/bing_chilling_fake.jpg'
import PrimaryButton from "../../../../components/PrimaryButton"

const clickHandler = () =>{
    alert('hello');
};
const Partners = () => {
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"100px"}}>
            <div style={{display: "flex", gap:"200px"}}>
                <Partner image={partnerImage1} name="Real Bing Chilling"/>
                <Partner image={partnerImage2} name="Elegant Bing Chilling"/>
                <Partner image={partnerImage3} name="Fake Bing Chilling"/>
            </div>
            <PrimaryButton text="View more" onClick={clickHandler}/>
        </div>
    )
}

export default Partners;