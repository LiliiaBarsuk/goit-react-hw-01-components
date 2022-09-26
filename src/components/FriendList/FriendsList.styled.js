import styled from '@emotion/styled';

export const List = styled.ul`
   list-style: none;
   width: 300px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   
`;

export const Item = styled.li`
    display: flex;
    align-items: center; 
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: white; 
    padding: 10px; 
`;

export const Status = styled.span`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${p => {
        return p.status ? 'green' : 'red';
    }};
`;

export const Avatar = styled.img`
   width: 50px;
    margin-right: 10px;
`;

export const Name = styled.p`
    color: black;
    font-size: 24px;
    font-weight: bold; 
`;