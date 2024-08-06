import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 9%;
    display: flex;
    align-items: center;
    background-color: white;
    position: fixed;
    margin-top: -55px;

    :hover{
        transition: 0.5s;
        background-color: #d3d3d3;

    }
`;

export const Item = styled.div`
    background-color: #f2f2f2;
    width: 16%;
    height: 50%;
    width:200px;
    border-radius: 10%;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 5px;
    cursor: pointer;

    :hover{
        background-color: rgba(0,0,0,0)

    }

`;


export const Text = styled.p`
   font-size: 16px;
`;
