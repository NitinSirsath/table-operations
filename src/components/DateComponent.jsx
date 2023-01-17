import React,{useState} from 'react'
import {Container} from '../styles/dateComponent.style'
// import {LocalizationProvider} from '@mui/lab'
// import {AdapterDateFns} from '@mui/lab/AdapterDateFns'
// import {Box, TextField} from '@mui/material'
// import {DateRangePicker, DateRange} from '@mui/lab'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateComponent = ({startDate,endDate,setStartDate,setEndDate}) => {
    
    // const [value, setValue] = useState([null, null]);
  
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
     <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        
      />
      <span>to</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />

    </Container>
  )
}

export default DateComponent