import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 15px;
   position: relative;
   > .cover{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(255,255,255,0.6);
      z-index:999;   
   }
`