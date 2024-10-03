import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <React.Fragment>
      <SliderComponent
        label="Home Value"
        min={0}
        max={250}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={3000}
      />

      <SliderComponent
        label="Down Payment"
        min={0}
        max={150}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={5000}
      />

      <SliderComponent
        label="Loan Amount"
        min={0}
        max={1250}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={7000}
      />
    </React.Fragment>
  );
};

export default SliderSelect;
