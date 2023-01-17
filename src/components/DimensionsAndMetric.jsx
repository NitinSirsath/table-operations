import React, { useState } from "react";
import {
  Container,
  ButtonContainer,
  ButtonWrapper,
} from "../styles/dimensionsAndMetric.style";

import Button from "@mui/material/Button";

const DimensionsAndMetric = ({buttonData,setButtonData}) => {
    
  const handleClick = (id) => {
    const newData = buttonData.map((button) => {
      if (button.id === id) {
        return { ...button, selected: !button.selected };
      }
      return button;
    });
    setButtonData(newData);
  };
  console.log(buttonData);
  return (
    <Container>
      <h3>Dimensions and Metrics</h3>
      <ButtonWrapper>
        <ButtonContainer>
          {buttonData.map((button, index) => {
            return (
              <Button
                onClick={() => handleClick(button.id)}
                variant={!button.selected ? "contained" : "outlined"}
                key={button.id}
              >
                {button.name}
              </Button>
            );
          })}
        </ButtonContainer>

        <Button variant="outlined" color="error">
          Apply Changes
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default DimensionsAndMetric;
