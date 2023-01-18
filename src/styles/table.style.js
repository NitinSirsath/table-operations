
import styled from 'styled-components';

export const Container = styled.div`

    margin-top: 40px;

    table {
  /* font-family: arial, sans-serif;
  border-collapse: collapse; */
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

}

td, th {
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding:12px;
}

tr:nth-child(even) {
  /* background-color: #dddddd; */
}
    `

    export const TableHeaders = styled.th`
        color: gray;
       
        
        p{
            align-items: center;
            display: inline-block;
        }
    `

    export const TotalValueDataContainer = styled.tr`

            td{
                font-weight: 700;
                font-size: 20px;
            }        
    `

    export const TableValueContainer = styled.tr`
        td{
            font-weight: 400;
            color: grey;
        }
    `