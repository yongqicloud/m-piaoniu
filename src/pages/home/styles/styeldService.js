import styled from 'styled-components'
const ServiceWrap = styled.div`
  padding:.2rem .16rem;
  padding-bottom:0;
  .service-content{
    padding:0 .08rem;
    height:.32rem;
    line-height:.32rem;
    display:flex;
    justify-content:space-between;
    border-radius:.02rem;
    background: hsla(0,0%,96%,.53);
    .title{
      font-size:.12rem;
      color:#666;
    }
    .services{
      display:flex;
      align-items:center;
      .services-item{
        color:#999;
        font-size:.12rem;
      }
      .line{
        height: 12px;
        width: 1px;
        background-color: #e6e6e6;
        margin: 0 12px;
        display: inline-block;
      }
    }
  }
  
`
export{
  ServiceWrap
}