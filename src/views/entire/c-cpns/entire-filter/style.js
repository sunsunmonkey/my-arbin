import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
    display: flex;
    margin: 7px;
    position: fixed;
    top: 67px;
    z-index: 99;
    left: 0;
    right: 0;
    background-color: white;
    padding-bottom: 10px;
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