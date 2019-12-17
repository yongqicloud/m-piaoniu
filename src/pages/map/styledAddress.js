import styled from 'styled-components'

import border from '@/styles/border'

export const AddressWrap = styled.div`
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
`
export const VenueWrap = border(styled.div`
  .name{
      margin-top: 13px;
      position: relative;
      padding-left:.14rem;
      display:flex;
      .venue-icon{
        background-image:url(https://static.piaoniu.com/m/static/img/venueIcon.7ffd824.png);
        height: 16px;
        width: 16px;
        background-size: 16px 16px;
      }
      .venue-content{
        padding-left:.05rem;
      }
    }
    .address{
      width:100%;
      font-size: 12px;
      color: #666;
      padding-left: 36px;
      margin-top: 5px;
      padding-bottom: 15px;
    }
`)

export const TransportWrap = border(styled.div`
    position: relative;
    padding-top: 10px;
    line-height: 1;
    padding-bottom: 10px;
    background-color: #fff;
    overflow: hidden;
    display:flex;
    .span-wrap{
      width:.72rem;
      height:.14rem;
      display:flex;
      align-items:center;
      justify-content:space-around;
      .icon{
        width: 15px;
        height: 15px;
        background-size: 15px 15px;
        margin-top:-.02rem;
      }
      .left-text{
        font-size:.12rem;
      }
    }
    .text{
      flex:1;
      font-size:.12rem;
      color:#666;
      p{
          line-height: 1.2;
          font-size: 12px;
          color: #666;
          margin-top: 5px;
        }
    }
`)  