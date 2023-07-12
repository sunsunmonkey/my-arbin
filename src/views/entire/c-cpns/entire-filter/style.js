import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
   display: flex;
    margin: 7px;
   .item{
    padding: 8px;
    border: 1px solid #DDDDDD;
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    }
    .item.active{
        background-color: ${props=>props.theme.color.secondaryColor};
        color: white;
    }
`