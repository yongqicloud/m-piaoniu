import styled from 'styled-components'

import more from 'assets/images/more.png'

export const MyOrderWrap = styled.div`
  width:100%;
  height:.45rem;
  padding-left:.19rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  >div{
    height:100%;
    display:flex;
    align-items:center;
    .action{
      font-size: 14px;
      color: #999;
    }
  }
  .box{
    padding-right:.1rem;
    width:.9rem;
    justify-content:space-between;
    .text{
      font-size: 16px;
      color: #262626;
      font-weight: 500;
    }
    .go{
      width:.06rem;
      height:.12rem;
      background:url(${more}) no-repeat center;
      background-size:.06rem .12rem;
    
    }
  }
`
export const OrderInfoWrap = styled.div`  
  width:100%;
  margin-bottom:.1rem;
  .orders{
    width:100%;
    height:.68rem;
    display:flex;
    flex-direction:row;
    .item{
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .icon{
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50%;
        margin-bottom: 8px;
        width: 22px;
        height: 22px;
        position: relative;
      }
      .text{
        font-size: 12px;
        color: #666;
      }
    }
  }
`