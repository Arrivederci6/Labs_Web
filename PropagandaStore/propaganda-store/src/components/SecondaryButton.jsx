import React from "react";
import Button from '@mui/material/Button';

const SecondaryButton = ({text}) => {
    return(
        <Button variant="outlined" style={{color: "#000", borderColor: "#000", padding: '10px 50px'}}>{text}</Button>
    )
}

export default SecondaryButton;