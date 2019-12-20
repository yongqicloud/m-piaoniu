import styled from 'styled-components'

import more from 'assets/images/more.png'

const ListFrameWrap = styled.div`
  .activity-floor{
    padding:.32rem 0 .08rem;
    overflow:hidden;
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:0 .14rem .16rem;
      overflow:hidden;
      .title{
        font-weight: 700;
        color: #565656;
        font-size: 18px;
      }
      .more{
        color: #999;
        height: 17px;
        line-height: 17px;
        padding-right: 10px;
        background-image:url(${more});
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: 5px 9px
      }
    }
    .activities{
      width:100%;
      overflow-x:auto;
      overflow-y:hidden;
      .wrap{
        padding-left:.14rem;
        display:flex;
        flex-wrap:nowrap;
      }
    }
  }
`

export {
  ListFrameWrap
}