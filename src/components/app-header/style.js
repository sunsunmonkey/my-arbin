import styled from "styled-components";

export const HeaderWrapper = styled.div`

  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  .content{
        background: white;
        position: relative;
        z-index: 19;
      .top{

        height: 80px;
        display: flex;
        align-items: center; 
      }
 

  }
  .cover{
        position: fixed;
        z-index: 9;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0,0,0,.3);
      }
`
export const SearchAreaWrapper = styled.div`
    transition: height 250ms ease;
    height:${props => props.isSearch ?'100px':'0'} ;
`