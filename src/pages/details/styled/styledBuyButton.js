import styled from 'styled-components'

export const BuyButtonWrap = styled.div`
  position:fixed;
  width:100%;
  height:50px;
  bottom:0;
  display:flex;
  .custom-service{
    width:.65rem;
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .icon{
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
      background-size: contain;
      background-image:url('https://static.piaoniu.com/nuxt-static/img/custom-service.89c653b.png');
    }
    .text{

    }
  }
  .btn-buy{
    flex:1;
    background-color: #ff2661;
    font-size: 16px;
    line-height: 49px;
    min-width: 110px;
    height: 100%;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }
`