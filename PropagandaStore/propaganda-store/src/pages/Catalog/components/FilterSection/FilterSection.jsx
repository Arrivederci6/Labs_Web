import React, { useState } from "react";
import './FilterSection.css';
import Dropdown from "../../../../components/Dropdown";
import SecondaryButton from "../../../../components/SecondaryButton";
import SearchBar from "../../../../components/SearchBar";
import Goods from "../Goods/Goods";

const FilterSection = () => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <div className="filter__section">

        <div style={{display:"flex"}}>
        <Dropdown
        value={selectedValue1}
        onChange={handleSelectChange1}
        controlId="yourSelectControl1"
        label="Has Smoking"
        selectItems={[
          { value: "option1", title: "Yes" },
          { value: "option2", title: "No" }
        ]}
        required={true}
      />
      <Dropdown
        value={selectedValue2}
        onChange={handleSelectChange2}
        controlId="yourSelectControl2"
        label="Price"
        selectItems={[
          { value: "option1", title: "> 500" },
          { value: "option2", title: "< 500" }
        ]}
        required={true}
      />
        </div>
      
        <SearchBar/>
      <SecondaryButton text="Apply"/>

    </div>
  );
};

export default FilterSection;
