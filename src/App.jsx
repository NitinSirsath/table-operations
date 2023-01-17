import { useEffect, useState } from "react";

import "./App.css";
import styled from "styled-components";
import DateComponent from "./components/DateComponent";
import DimensionsAndMetric from "./components/DimensionsAndMetric";
import Table from "./components/Table";
import { data } from "./components/buttonData";

const Heading = styled.h2``;

function App() {
  const [startDate, setStartDate] = useState(new Date("2021-05-01"));
  const [endDate, setEndDate] = useState(new Date("2021-05-01"));
  const [fetchData, setFetchData] = useState([])
  const [fetchAppData, setfetchAppData] = useState([])
  const [buttonData, setButtonData] = useState(data);
  
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'http://go-dev.greedygame.com/v3/dummy/apps'
      );
      const data = await response.json();
      setfetchAppData(data.data);
    };
    fetchApi();
  }, []);

  
  
  return (
    <div className="App">
      <Heading>Analytics</Heading>
      <DateComponent
      fetchAppData={fetchAppData}
      setfetchAppData={setfetchAppData}
      fetchData={fetchData}
      setFetchData={setFetchData}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <DimensionsAndMetric buttonData={buttonData} setButtonData={setButtonData}/>
      <Table fetchData={fetchData} fetchAppData={fetchAppData} buttonData={buttonData}/>
    </div>
  );
}

export default App;
