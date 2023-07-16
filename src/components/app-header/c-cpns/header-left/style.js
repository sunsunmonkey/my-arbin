import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
    flex: 1;
    display: flex;
    color:  ${props => props.theme.isAlpha ? "#fff": props.theme.color.primaryColor};
    margin-left: 20px;
    cursor: pointer;
`