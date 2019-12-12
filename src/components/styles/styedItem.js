import styled from 'styled-components'
export const ImgWrap = styled.div`
  width:100%;
  img{
      width: 100%;
      box-sizing: border-box;
      display: block;
      padding: 14px;
      padding-bottom: 0;
      background-color: #fff
  }
  
`

export const ItemWrap = styled.div`
  padding:0 .15rem;
  position:relative;
  >div{
    width:100%;
    min-height:1.25rem;
    display:flex;
    flex-wrap:nowrap;

  }
  .poster-wrap{
    width:.92rem;
    height:1.15rem;
    padding-right:.17rem;
    padding-top:.15rem;
    .poster{
      width: 75px;
      height: 100px;
      background-image:url("https://img.piaoniu.com/poster/b98096237b6cb1bc3a1afecf68a07bce57762611.jpg?imageView2/2/w/164/h/220/format/jpg/q/60");
      background-size: cover;
      background-position: 50%;
    }
  }
  .info-wrap{
    flex: 1;
    padding-top:.15rem;
    display:flex;
    flex-direction:column;
    .title-wrap{
      display:flex;
      .title{
        font-size: 15px;
        color: #333;
        max-height: 44px;
        line-height: 22px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
        font-weight: 600;
        padding:0;
        
        }
      }
      .activity-tag{
          flex-shrink: 0;
          max-width: .40rem;
          margin-left: .04rem;
          color: #fff;
          .status-1{
            margin-right: 5px;
            border-radius: 2px;
            padding: 1px;
            width: 15px;
            height: 15px;
            background-color: #96a3ff;
            box-sizing: border-box;
            bottom: 12px;
            text-align: center;
            font-size: 10px;
            display: inline-block;
}
          }

    }
    .time-address{
      font-size: 12px;
      color: #999;
      margin-top: 9px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .rank,.no-rank{
      font-size: 10px;
      color: #999;
      margin-top: 4px;
      margin-bottom: 16px;
      .star{
        display:inline-block;
        font-size: 12px;
        font-weight: 700;
        color: #ffb02e;
        
      }
    }
    .price-wrap{
      position: relative;
      margin-bottom: 10px;
      .price{
        position: relative;
        top: 1px;
        color: #ff2661;
        font-size: 18px;
        font-weight: 700;
        margin-right: 4px;
      }
      .desc{
        display:inline-block;
        font-size: 10px;
        color: #999;
        transform: scale(.8);
        transform-origin:left bottom;
      }
      .status-text{
        font-size: 10px;
        color: #999;
        width: 45px;
        line-height: 19px;
        text-align: center;
        background-color: #f0f0f0;
      }
    }
  }
`