import styled from 'styled-components'

import back from 'assets/images/back-left.png'

export const MyHeaderWrap = styled.div`
  height:.44rem;
  position:relative;
  .content-wrap{
    width:100%;
    height:100%;
    position:relative;
    .btn-back{
      width:.44rem;
      height:.44rem;
      position:absolute;
      left:.15rem;
      top:0;
      display:flex;
      /* justify-content:center; */
      align-items:center;
      .icon{
        background:url(${back}) no-repeat;
        width: 11px;
        height: 19px;
        background-size: 100%;
      }

    }
    .content{
      margin:auto;
      height:100%;
      max-width: 200px;
      display:flex;
      justify-content:center;
      align-items:center;
      .title{
        color: #525252;
        font-size: 17px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 500;
      }
    }
  }
`