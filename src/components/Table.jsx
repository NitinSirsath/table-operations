import React from "react";
import {
  Container,
  TableHeaders,
  TotalValueDataContainer,
  TableValueContainer,
} from "../styles/table.style";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

const tableHeaders = [
  {
    id: 1,
    name: "Date",
  },
  {
    id: 2,
    name: "App",
  },
  {
    id: 3,
    name: "Ad requests",
  },
  {
    id: 4,
    name: "Ad responses",
  },
  {
    id: 5,
    name: "Impression",
  },
  {
    id: 6,
    name: "Clicks",
  },
  {
    id: 7,
    name: "Revenue",
  },
  {
    id: 7,
    name: "Fill Rate",
  },
  {
    id: 7,
    name: "CTR",
  },
];

const Table = ({ fetchData, fetchAppData, buttonData }) => {
  const getInMillion = (value) => {
    const initialValue = 0;
    const sumWithInitial = fetchData.data?.reduce(
      (accumulator, currentValue) => accumulator + eval(value),
      initialValue
    );
    let convertionInMillion;
    return (convertionInMillion = (sumWithInitial / 1000000).toFixed(2));
  };

  const getTotalValue = (value) => {
    const initialValue = 0;
    let sumWithInitial = fetchData.data?.reduce(
      (accumulator, currentValue) => accumulator + eval(value),
      initialValue
    );
    let totatValue = sumWithInitial;

    return totatValue;
  };

  const adRequests = getInMillion("currentValue.requests");
  const adResponse = getInMillion("currentValue.responses");
  const impression = getInMillion("currentValue.impressions");
  const clicks = getInMillion("currentValue.clicks");
  const revenue = getTotalValue("currentValue.revenue");
  const fillRate = getTotalValue(
    "currentValue.requests/currentValue.responses * 100"
  );
  const ctr = getTotalValue(
    "currentValue.clicks/currentValue.impressions * 100"
  );

  const handleFilter = () => {
    
  }

  return (
    <Container>
      {fetchData.length !== 0 && (
        <table>
          <tr>
            {tableHeaders.map((item, index) => {
              return (
                <>
                  {!buttonData[index].selected && (
                    <>
                    {/* <Button variant="contained" ><FilterAltIcon /></Button> */}

                    <TableHeaders>
                        <Button onClick={()=>handleFilter()}><FilterAltIcon /></Button>
                        <p>{item.name}</p>
                    </TableHeaders>
                    </>
                    
                  )}
                </>
              );
            })}
          </tr>
          <TotalValueDataContainer>
            {!buttonData[0].selected && <td>{fetchData.data?.length}</td>}
            {!buttonData[1].selected && <td>{fetchAppData.length}</td>}
            {!buttonData[2].selected && <td>{adRequests || null} M</td>}
            {!buttonData[3].selected && <td>{adResponse || null} M</td>}
            {!buttonData[4].selected && <td>{impression || null} M</td>}
            {!buttonData[5].selected && <td>{clicks || null} M</td>}
            {!buttonData[6].selected && (
              <td>$ {Math.round(revenue || null)}</td>
            )}
            {!buttonData[7].selected && (
              <td>{Math.round(fillRate || null)} %</td>
            )}
            {!buttonData[8].selected && <td>{Math.round(ctr || null)} %</td>}
          </TotalValueDataContainer>

          {fetchData.data?.map((item, index) => {
            const filterName = fetchAppData.filter(
              (app) => app.app_id == item.app_id
            );
            const appName = filterName[0].app_name;
            const date = item.date.slice(0, 10);
            
            return (
              <TableValueContainer key={item.id}>
                {!buttonData[0].selected && <td>{date}</td>}
                {!buttonData[1].selected && <td>{appName}</td>}
                {!buttonData[2].selected && <td>{item.requests}</td>}
                {!buttonData[3].selected && <td>{item.responses}</td>}
                {!buttonData[4].selected && <td>{item.impressions}</td>}
                {!buttonData[5].selected && <td>{item.clicks}</td>}
                {!buttonData[6].selected && (
                  <td>$ {Math.round(item.revenue)}</td>
                )}
                {!buttonData[7].selected && (
                  <td>
                    {Math.round((item.requests / item.responses) * 100)} %
                  </td>
                )}
                {!buttonData[8].selected && (
                  <td>
                    {Math.round((item.clicks / item.impressions) * 100)} %
                  </td>
                )}
              </TableValueContainer>
            );
          })}
        </table>
      )}
    </Container>
  );
};

export default Table;
