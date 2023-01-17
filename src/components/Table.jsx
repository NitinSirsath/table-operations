import React,{useState,useEffect} from 'react'
import {Container} from '../styles/table.style'

const tableHeaders = [
    {
        id: 1,
        name: 'Date'
    },
    {
        id: 2,
        name: 'App'
    },
    {
        id: 3,
        name: 'Ad requests'
    },
    {
        id: 4,
        name: 'Ad responses'
    },
    {
        id: 5,
        name: 'Impression'
    },
    {
        id: 6,
        name: 'Clicks'
    },
    {
        id: 7,
        name: 'Revenue'
    },
    {
        id: 7,
        name: 'Fill Rate'
    },
    {
        id: 7,
        name: 'CTR'
    },
]

const Table = ({fetchData,fetchAppData}) => {

    const getInMillion = (value) => {
        const initialValue = 0;
        const sumWithInitial = fetchData.data?.reduce(
          (accumulator, currentValue) => accumulator + eval(value),
          initialValue
        );
        let convertionInMillion
          return  convertionInMillion = (sumWithInitial/1000000).toFixed(2)
        
    }

   const getTotalValue = (value) => {
    const initialValue = 0;
    let sumWithInitial = fetchData.data?.reduce(
      (accumulator, currentValue) => accumulator + eval(value),
      initialValue
    );
    let totatValue = sumWithInitial
    return totatValue
   }
        


    
    const adRequests = getInMillion('currentValue.requests')
    const adResponse = getInMillion('currentValue.responses')
    const impression = getInMillion('currentValue.impressions')
    const clicks = getInMillion('currentValue.clicks')
    const revenue = getTotalValue('currentValue.revenue')
    const fillRate = getTotalValue('currentValue.requests/currentValue.responses * 100')
    const ctr = getTotalValue('currentValue.clicks/currentValue.impressions * 100')
    
  return (
    <Container>
       {
        fetchData.length !== 0 &&  <table>
        <tr>
            {tableHeaders.map((item) => {
                return <th>{item.name}</th>
            })}
        </tr>
        <tr>
    <td>{fetchData.data?.length}</td>
    <td>{fetchAppData.length}</td>
    <td>{adRequests || null} M</td>
    <td>{adResponse || null} M</td>
    <td>{impression || null} M</td>
    <td>{clicks || null} M</td>
    <td>$ {Math.round(revenue || null)}</td>
    <td>{fillRate || null} %</td>
    <td>{Math.round(ctr || null)} %</td>
    </tr>
      
{fetchData.data?.map((item) => {
    const filterName = fetchAppData.filter((app) =>  app.app_id == item.app_id)
    const appName = filterName[0].app_name
    const date = item.date.slice(0,10)
        console.log(date);
    return <tr>
    <td>{date}</td>
    <td>{appName}</td>
    <td>{item.requests}</td>
    <td>{item.responses}</td>
    <td>{item.impressions}</td>
    <td>{item.clicks}</td>
    <td>$ {Math.round(item.revenue)}</td>
    <td>{Math.round(item.requests%item.responses*100)} %</td>
    <td>{Math.round(item.clicks/item.impressions*100)} %</td>
    </tr>
})}

    </table>
       }
    </Container>
  )
}

export default Table