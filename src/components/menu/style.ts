import styled from "styled-components";

export const Container = styled.div<{menuState: boolean}>`
    width: ${({ menuState })=> menuState? '250px': '100px'};
    height: 90vh;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    margin-top: 55px;

    :hover{
       background-color: #f2f2f2;
    }

    hr{
        width: 70%
    }

    p{
        margin-right: 50%;
        font-size: 17px;
        
    }

    img{
        margin-right: ${({ menuState })=> menuState? '0px': '5px'};
    }

`;

export const MenuItem = styled.div<{menuState: boolean}>`
    width: 90%;
    min-height: ${({ menuState })=> menuState? '40px': '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    flex-direction:${({ menuState })=> menuState? 'row': 'column'};
    justify-content:${({ menuState })=> menuState? 'none': 'center'};
    

    span{
        font-weight: ${({ menuState })=> menuState? '600': '400'};
        margin-left: ${({ menuState })=> menuState? '20px': '-5px'};
        margin-top: ${({ menuState })=> menuState? '2px': '0px'}; 
        font-size: ${({ menuState })=> menuState? '12px': '12px'};
    }
    
`;

export const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;

    :hover{
        background-color: rgba(0,0,0,0)
    }    
`;
