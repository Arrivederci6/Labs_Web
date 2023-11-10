import React, { useState } from "react";
import './FilterSection.css';
import Dropdown from "../../../../components/Dropdown";
import SecondaryButton from "../../../../components/SecondaryButton";
import SearchBar from "../../../../components/SearchBar";

const FilterSection = () => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const handleSelectChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  return (
    <div className="filter__section">

        <div style={{display:"flex"}}>
        <Dropdown
        value={selectedValue1}
        onChange={handleSelectChange1}
        controlId="yourSelectControl1"
        label="Choose an option"
        selectItems={[
          { value: "option1", title: "Option 1" },
          { value: "option2", title: "Option 2" },
          { value: "option3", title: "Option 3" },
          { value: "option4", title: "Option 4" },
        ]}
        required={true}
      />
      <Dropdown
        value={selectedValue2}
        onChange={handleSelectChange2}
        controlId="yourSelectControl2"
        label="Choose an option"
        selectItems={[
          { value: "option1", title: "Option 1" },
          { value: "option2", title: "Option 2" },
          { value: "option3", title: "Option 3" },
          { value: "option4", title: "Option 4" },
        ]}
        required={true}
      />
      <Dropdown
        value={selectedValue3}
        onChange={handleSelectChange3}
        controlId="yourSelectControl3"
        label="Choose an option"
        selectItems={[
          { value: "option1", title: "Option 1" },
          { value: "option2", title: "Option 2" },
          { value: "option3", title: "Option 3" },
          { value: "option4", title: "Option 4" },
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
