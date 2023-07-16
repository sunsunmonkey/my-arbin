import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  color: ${props => props.theme.isAlpha ? "#fff": "#484848"};
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  margin-right: 25px;
  font-weight: 600;
  .btns{
    display: flex;
    align-items: center;
    color: ${props => props.theme.isAlpha ? "#fff": "#484848"};
    margin-right: 2px;
    .btn{
       height: 42px;
       display: flex;
       align-items: center;
       padding: 0 12px;
       border-radius: 22px;
       cursor: pointer;
       &:hover {
        background-color:${props => props.theme.isAlpha ? "#717171": " #f5f5f5"};
      }
      
    }
       
  }
  .profile{
      display: flex;
      align-items: center;
      width: 77px;
      height: 42px;
      border: 1px solid #ccc;
      border-radius: 25px;
      justify-content:space-around;
      cursor: pointer;
      ${props => props.theme.mixin.boxShadow}
  }
  .panel{
    position: absolute;
    top: 54px;
    right: 0;
    width: 240px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
    color: #666;
    .top,.bottom{
      padding: 10px 0;
      .item{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
        &:hover{
           background-color: #f5f5f5;
        }
      }

    }
    .top {
        border-bottom: 1px solid #ddd;
    }
  }
`