import styled from "@emotion/styled";

export const Table = styled.table`
    width: 800px;
    border-radius: 4px;
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
      0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: white;
`;

export const Thead = styled.thead`
    background-color: lightblue;
    color: white;
    font-size: 24px;
`;

export const HeadCell = styled.th`
    padding-top: 10px;
    padding-bottom: 10px;
`; 

export const TableBody = styled.tbody`
    text-align: center;
    font-size: 22px;   
`; 

export const TableCell = styled.td`
    padding-top: 10px;
    padding-bottom: 10px;
`;
