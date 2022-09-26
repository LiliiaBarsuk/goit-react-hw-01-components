import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
   width: 300px;
   border-radius: 4px;
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  
`;

export const Description = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding-top: 30px;
padding-bottom: 30px;
background-color: white;
`;

export const Avatar = styled.img`
   width: 60%;
   margin-bottom: 20px;
   border-radius: 100%
`;

export const Name = styled.p`
   margin-bottom: 10px;
   font-weight: bold;
   font-size: 25px
`;

export const Tag = styled.p`
   margin-bottom: 10px;
   color: grey;
   font-size: 15px;
`;

export const Location = styled.p`
   margin-bottom: 10px;
   color: grey;
   font-size: 15px;
`;

export const Stats = styled.ul`
   display: flex;
   list-style: none;
   align-items: center;
   justify-conten: center;
   background-color: azure;
`;

export const StatsItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-conten: center;
   width: 100px;
   heigth: 100px;
   padding: 20px;
   font-size: 15px;
   border: 1px solid silver;
`;

export const Label = styled.span`
   margin-bottom: 5px;
   color: grey;
`;

export const Quantity = styled.span`
   font-weight: bold;  
`;

 


