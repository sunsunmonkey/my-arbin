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
    .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    /* transition: all 250ms linear; */

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`