import styled from 'styled-components'
export const DatePickerWrap = styled.div`
  padding: .16rem 0 .06rem;
  .month-wrap{
    display:flex;
    justify-content:center;
    font-size:.17rem;
    height:.2rem;
    justify-content:center;
    align-items:center;
    .month-content{
      padding:0 17px;
    }
    .prev-month{
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #ababab;
      margin-top: 4px
    }
    .next-month{
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #ababab;
      margin-top: 4px;
    }
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
  .day-wrap{
    display:flex;
    flex-wrap:wrap;
    .item-day-wrap{
      width: 14.28%;
      padding:6px 0;
      display:flex;
      justify-content:center;
      align-items:center;
      .item-day{
        position: relative;
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color:#262626;
        
      }
      &.last-month{
        color:#999;
        opacity:0.2;
      }
      &.before-today{
        .item-day{
          color:#999;
          opacity:0.5;
        }
      }
      &.today{
        .item-day{
          color:#ff2661;
          position:relative;
          &::after{
            content: "今天";
            position: absolute;
            top: 14px;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 9px;
          }
        }
      }
    }
  }
`