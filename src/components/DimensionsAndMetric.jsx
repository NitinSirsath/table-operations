import React, { useState } from "react";
import {
  Container,
  ButtonContainer,
  ButtonWrapper,
  HeadingContainer
} from "../styles/dimensionsAndMetric.style";

import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';


const DimensionsAndMetric = ({buttonData,setButtonData}) => {

    const [showSettings, setShowSettings] = useState(false);

    const handleShowSettings = () => {
        setShowSettings(!showSettings)
    }

  const handleClick = (id) => {
    const newData = buttonData.map((button) => {
      if (button.id === id) {
        return { ...button, selected: !button.selected };
      }
      return button;
    });
    setButtonData(newData);
  };


  return (
    <Container>
     <HeadingContainer>
     <h3 style={{color:"grey"}}>Dimensions and Metrics</h3>
     <Button variant="outlined" onClick={()=>handleShowSettings()} endIcon={<SettingsIcon />}>{showSettings? 'Close Settings':'open Settings'}</Button>
     </HeadingContainer>
      {showSettings && (
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

        {/* <Button variant="outlined" color="error">
          Apply Changes
        </Button> */}
      </ButtonWrapper>
      )}
    </Container>
  );
};

export default DimensionsAndMetric;
