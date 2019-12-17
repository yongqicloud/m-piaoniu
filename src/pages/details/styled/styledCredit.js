import styled from 'styled-components'

export const CreditWrap = styled.div`
  width:1005;
  padding: .16rem 0;
  padding-bottom:1rem;
  background-color: #f6f7f9;
  .title{
    margin-bottom: 22px;
    color: #999;
    position: relative;
    height: 20px;
    text-align:center;
  }
  .items-wrap{
    padding:0 .35rem;
    display:flex;
    .item{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      flex:1;
      img{
        margin: 0 auto;
        width: 30px;
        height: 30px;
      }
      .text{
        margin-top: 7px;
        color: #999;
        font-size: 12px;
        display: block;
        line-height: 1;
        white-space: nowrap;
      }
    }
  }
`