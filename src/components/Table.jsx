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
        name: 'Revenue:'
    },
    {
        id: 7,
        name: 'Fill Rate:'
    },
    {
        id: 7,
        name: 'CTR:'
    },
]

const Table = ({fetchData,fetchAppData}) => {


  return (
    <Container>
        <table>
            <tr>
                {tableHeaders.map((item) => {
                    return <th>{item.name}</th>
                })}
            </tr>
          
    {fetchData.data?.map((item) => {
        const filterName = fetchAppData.filter((app) =>  app.app_id == item.app_id)
        const appName = filterName[0].app_name
        return <tr>
        <td>{item.date}</td>
        <td>{appName}</td>
        <td>{item.requests}</td>
        <td>{item.responses}</td>
        <td>{item.impressions}</td>
        <td>{item.clicks}</td>
        <td>{item.revenue}</td>
        <td>{item.requests/item.responses*100}</td>
        <td>{item.clicks/item.impressions*100}</td>
        </tr>
    })}
  
        </table>
    </Container>
  )
}

export default Table