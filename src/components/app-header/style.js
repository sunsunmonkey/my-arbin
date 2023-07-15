import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  background: white;
  height: 80px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;  
`