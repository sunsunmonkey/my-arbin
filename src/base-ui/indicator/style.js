import styled from "styled-components";

export const IndicatorWrapper = styled.div`
   overflow: hidden;
   > *{
    flex-shrink: 0;

   }
   .i-content{
      position: relative;
      display: flex;
      transition: transform 200ms ease;
   }
`