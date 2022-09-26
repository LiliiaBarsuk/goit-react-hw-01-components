import styled from '@emotion/styled';

const color = () => {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsContainer = styled.section`
   width: 500px;
   border-radius: 4px;
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
      0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
   background-color: white;
   text-align: center
`;

export const Title = styled.h2`
  font-size: 30px;
  color: grey;
  margin-bottom: 30px;
  padding-top: 20px;
`;

export const StatList = styled.ul`
   display: flex;
   align-items: center;
   justify-conten: center;
   list-style: none;
`;

export const Item = styled.li`
   display: flex;
   flex-direction: column;
   padding: 10px;
   width: calc(100% / 5);
   color: white;
   background-color: ${color};
`;

export const Label = styled.span`
   font-size: 15px;
   margin-bottom: 5px;
`; 

export const Percentage = styled.span`
   font-size: 25px;
`; 