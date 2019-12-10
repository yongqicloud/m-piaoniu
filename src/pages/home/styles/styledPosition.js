import styled from 'styled-components'
const PositionWrap = styled.div`
  padding: 6.4vw 4.26666667vw 0;
  display:flex;
  justify-content:space-between;
  .item{
    width: 44vw;
    height: 18.13333333vw;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.07);
    border-radius: 1.6vw;
    overflow: hidden;
    position: relative;
    .title-wrap{
      width: 21.33333333vw;
      padding-top: 4.26666667vw;
      padding-left: 3.2vw;
      .main-title{
        background-size: contain;
        background-repeat: no-repeat;
        height: 3.73333333vw;
        width: 100%;
        margin-bottom: 1.86666667vw;
      }
      .sub-title{
        font-weight: 400;
        color: #666;
        font-size: 3.2vw;
        max-width: 70px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .poster-wrap{
      position: absolute;
      width: 22.93333333vw;
      top: 0;
      bottom: 0;
      right: 0;
      .top-text{
        position: absolute;
        left: 0;
        top: 0;
        width: 18.66666667vw;
        height: 4.26666667vw;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .poster{
        width: 21.33333333vw;
        height: 15.73333333vw;
        position: absolute;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 2.4vw;
      }
    }
  }

`
export{
  PositionWrap
}