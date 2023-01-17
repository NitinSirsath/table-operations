import React,{useState,useEffect} from 'react'
import {Container,DateHeading,ButtonContainer} from '../styles/dateComponent.style'
// import {LocalizationProvider} from '@mui/lab'
// import {AdapterDateFns} from '@mui/lab/AdapterDateFns'
// import {Box, TextField} from '@mui/material'
// import {DateRangePicker, DateRange} from '@mui/lab'
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';

import "react-datepicker/dist/react-datepicker.css";


const DateComponent = ({startDate,endDate,setStartDate, setFetchData,setEndDate,setFetchAppData,fetchAppData}) => {
    
    
    // const [value, setValue] = useState([null, null]);
    const arr = startDate.toISOString().split("T")[0].split("-");
  const finalStartDate = `${arr[0]}-${arr[1]}-${arr[2]}`;
  const arr2 = endDate.toISOString().split("T")[0].split("-");
  const finalEndDate = `${arr2[0]}-${arr2[1]}-${arr2[2]}`;

    const handleDateChange = async () => {
        const response = await fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${finalStartDate}&endDate=${finalEndDate}`)
        const data = await response.json()
        setFetchData(data)
        
    }
  
  console.log(fetchAppData);
  return (
    <Container> 
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box width='500px'>
        <DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={[startDate, endDate]}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
            <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
            </>
        )}
        ></DateRangePicker>
    </Box>
            
        </LocalizationProvider> */}
        <DateHeading>Please select date and apply*</DateHeading>
     <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy/MM/dd"
      />
      <span>to</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy/MM/dd"
      />
    
    
   <ButtonContainer>
   <Button  onClick={()=>handleDateChange()} variant="outlined" size='small' color="error">
  Apply changes
</Button>
   </ButtonContainer>
    </Container>
  )
}

export default DateComponent