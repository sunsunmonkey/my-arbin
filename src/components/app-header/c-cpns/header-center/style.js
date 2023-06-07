import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
    border: 1px solid #ddd;
    border-radius: 24px;
    display: flex;
    align-items:center;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .searchBar{
        display: flex;
        align-items: center;
        height: 48px;
        width: 300px;
        input{
            width: 235px;
            height: 45px;
            margin-left: 24px;
        }
        input::placeholder {
            color: #222;
            font-weight: 600;
        }
        .searchIcon{
            height: 32px;
            width: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content:center;
            background-color: ${props =>props.theme.color.primaryColor};
            color: white;
        }
        
    }

`