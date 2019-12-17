import styled from 'styled-components'

export const DeatilsHeaderWrap = styled.header`
  background:#fff;
  width:100%;
  position: relative;
  .header-image{
    width:100%;
    background-color: #292138;
    position: absolute;
    overflow: hidden;
    min-height: 1.8rem;
    height:${props=> props.height || '1.8rem'};
    .bg-img{
      width:100%;
      height:2.77rem;
      position:absolute;
      left:0;
      top:0;
      background:url('https://img.piaoniu.com/poster/f794659a2e61ee3d40ceaed695f1cf5197248ede.jpg?imageView2/2/w/208/h/280');
      filter:blur(.075rem);
      opacity: .2;
    }
  }
  .header-main{
    position:relative;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    height:2.1rem;
    
    .info{
      width:100%;
      position: relative;
      box-sizing: border-box;
      padding: .20rem .15rem .16rem .15rem;
      height: 1.64rem;
      display:flex;
      .img-box{
        padding-right:.15rem;
        img{
          display:block;
          width:.96rem;
          height:1.28rem;
        }
      }
      .content{
        flex:1;
        color:#fff;
        h2{
          font-size: 17px;
          font-weight: 700;
          min-height: 44px;
          line-height: 22px;
          color: #fff;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 13px;
        }
        .stars-score{
          margin-bottom: 18px;
          height: 20px;
          display:flex;
          .source{
            font-size: 14px;
            color: #fdb146;
            margin-right: 6px;
          }
          .stars{
            display: inline-block;
            overflow: visible;
            margin-right: 3px;
            display:flex;
            li{
              img{
                display:inline-block;
                width: 8px;
                height: 8px;
                margin-bottom: 1px;
              }
            }
          }
        }
        .price-info{
          flex:1;
          display:flex;
          align-items:center;
          .price{
            font-size: 24px;
            margin-right: 3px;
          }
          .text{
            font-size: 12px;
          }
        }
      }
    
    }
    .concern-comment{
      height:.3rem;
      padding: 0 .15rem ;
      margin-bottom: .16rem; 
      display:flex;
      justify-content:space-between;
      .concern,.comment{
        display:flex;
        justify-content:center;
        align-items:center;
        color:#fff;
        width:48%;
        background: hsla(0,0%,100%,.1);
        border-radius:.05rem;
        img{
          width: 15px;
          height: 14px;
          vertical-align: -1px;
          margin-bottom: -2px;
          margin-right: 4px;
        }
        span{
          color:#fff;
        }
      }
      .comment{
      }
    }
  }
  .header-bottom{
    padding-left:.14rem;
    .sold-empty-tip{
      /* width:100%; */
      height:.4rem;
      background-color: #eff6ff;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin-left: -14px;
      img{
        display:block;
        height: 16px;
        margin-right: 5px;
      }
      .text{
        flex:1;
        color: #4b8feb;
        font-size:.14rem;
      }
      .right{
        font-size:.12rem;
        color: #4b8feb;
      }
    }
    .time-range{
      font-size: 15px;
      padding-top: 24px;
    }
    .venue{
      box-sizing:content-box;
      display: flex;
      align-items: center;
      height: 33px;
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 15px;
      padding-top: 16px;
      .inner-text{
        padding-right:.11rem;
        flex: 1;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .icon{
        padding: 0 22px;
        border-left: 1px solid #f5f5f5;
        img{
          width: 20px;
          height: 24px;
        }
      }
    }
    .ticket-info{
      height:.48rem;
      position: relative;
      padding: 16px 0;
      border-bottom: 1px solid #f5f5f5;
      .text{
        font-size: 13px;
        color: #333;
      }
      .go{
        right: 14px;
        background:url('https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png');
        background-size: 8px 13px;
        height: 13px;
        width: 8px;
        position: absolute;
        top: 50%;
        margin-top: -7px;
      }
    }
    .service-info{
      position: relative;
      padding: 16px 0;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      .text{
        margin-right: 20px;
        font-size: 13px;
        color: #333;
      }
      .service-item{
        display:flex;
        margin-right:.1rem;
        align-items:center;
        img{
          display:inline-block;
          width: .12rem;
          height:.12rem;
          margin-right: 4px;
        }
      }
      .go{
        right: 14px;
        background:url('https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png');
        background-size: 8px 13px;
        height: 13px;
        width: 8px;
        position: absolute;
        top: 50%;
        margin-top: -7px;
      }
    }
  }  
`
export const IntroduceWrap = styled.div`
  overflow: hidden;
  background-color: #fff;
  margin-top: .10rem;
  position: relative;
  .title{
    position: relative;
    font-weight: 700;
    font-size: .15rem;
    padding-left: .15rem;
    margin-bottom: -.15rem;
    overflow: hidden;
    height: .55rem;
    line-height: .55rem;
  }
  .content{
    line-height: 1.6;
    font-size: 15px;
    padding: 5px 14px 0;
    color: #666;
    margin-bottom: 15px;  
    .inner{
      height:3rem;
      background:lightgreen;
    }
    .more{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      .shadow{
        position:absolute;
        left: 0;
        top: -.4rem;
        background: linear-gradient(180deg,hsla(0,0%,100%,0),#fff);
        height: 40px;
        width: 100%;
      }
      .text{
        width: 100%;
        height: 50px;
        background: #fff;
        line-height: 50px;
        font-size: 15px;
        text-align: center;
        color: #5fb7fc;
        img{
          width: 11px!important;
          margin-left: 5px;
          position: relative;
          top: -1px;
          margin-top: 0!important;
          margin-bottom: 0;
        }
      }
    }
  }
`
export const DetailBodyWrap = styled.div`

`

export const RelatedShowWrap = styled.div`
    overflow: hidden;
    background-color: #fff;
    margin-top: 10px;
    padding-bottom:.15rem;
    .title{
      position: relative;
      font-weight: 700;
      font-size: 15px;
      padding-left: 15px;
      margin-bottom: -15px;
      overflow: hidden;
      height: 55px;
      line-height: 55px;
    }
`