import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #333;
   z-index: 999;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   justify-content: center;

   .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    user-select: none;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }
    .picuture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;
      user-select: none;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

   }   
   
   }

   .preview{
      height: 100px;
   }

   .pic-enter{
      transform:translateX(${props=>props.isNext?"100%" : "-100%"});
      opacity: 0;
   }

   .pic-enter-active{
      transform:translateX(0);
      opacity: 1;
      transition: all 50ms ease;

   }

   .pic-exit{
   opacity: 1;
   }

   .pic-exit-active{
   opacity: 0;
   transition: all 50ms ease;
   }

`