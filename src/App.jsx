import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' 
import styled from 'styled-components'
import DateComponent from './components/DateComponent'
import DimensionsAndMetric from './components/DimensionsAndMetric'

const Heading = styled.h2`
  
`

function App() {
  const [startDate, setStartDate] = useState(new Date("2021/06/01"));
  const [endDate, setEndDate] = useState(new Date("2021/06/15"));

  return (
    <div className="App">
     <Heading>Analytics</Heading>
     <DateComponent startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
     />
     <DimensionsAndMetric />
    </div>
  )
}

export default App
