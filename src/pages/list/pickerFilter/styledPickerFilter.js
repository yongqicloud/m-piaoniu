import styled from 'styled-components'
import pick from 'assets/images/picking.png'

export const PickerFilterWrap = styled.div`
  height:.35rem;
  width:100%;
  position:relative;
  z-index:10;
  background:#fff;
  .main-menu-wrap{
    position:relative;
    height:100%;
    display: flex;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.15);
    z-index: 11;
    .item{
      flex: 1;
      display: block;
      font-size: 12px;
      color: #666;
      text-align: center;
      padding: 10px 0;
      border-bottom: 1px solid #e6e6e6;
      &.active{
        color:#ea3667;
      }
      &.icon::after{
        content: "";
        display: inline-block;
        position: relative;
        top: 0;
        left: 3px;
        width: 0;
        height: 0;
        border: 3px solid transparent;
        border-top-color: #666;
      }
    }
  }
  .sub-sort{
    position: absolute;
    top: .35rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    z-index: 5;
    padding-left:.15rem;
    .sub-item{
      padding:.14rem .3rem .14rem .09rem;
      font-size:.12rem;
      color:#333;
      &.active{
        color:#ff2661;
        &::after{
          content:"";
          position: absolute;
          top: .18rem;
          right: .18rem;
          width: .12rem;
          height: .09rem;
          background-image:url(${pick});
          background-size: 100%;
          background-position: 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .sub-date-picker{
    position: absolute;
    top: .34rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    z-index: 5;
    .list-calendar{
      padding: .16rem 0 .06rem;
      .month-wrap{
        display:flex;
        justify-content:center;
        font-size:.17rem;
        height:.2rem;
      }
      .quick-picker-wrap{
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 .15rem;
        margin-top: .16rem;
        margin-bottom: .17rem;
        .time-item{
          line-height: 32px;
          color: #333;
          border-radius: 16px;
          padding: 0 14px;
          background-color: #f5f5f5;
        }
      }
      .week-wrap{
        height:.26rem;
        display: flex;
        font-size: 11px;
        color: #666;
        .week-item{
          width: 14.28%;
          margin: 6px 0;
          text-align: center;
        }
      }
    }
  }
`