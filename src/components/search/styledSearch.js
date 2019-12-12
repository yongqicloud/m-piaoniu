import styled from 'styled-components'

import search from 'assets/images/search-white.png'

export const SearchWrap = styled.div`
  flex:1;
  height:.44rem;
  padding:.05rem .08rem;
  display:flex;
  >div{
    width: 100%;
    height: .34rem;
    line-height: .34rem;
    position: relative;
    background-color: #f2f2f2;
    border-radius: .03rem;
    .ui-wrap{
      height:100%;
      display: ${props => props.uiDisplay || 'block'};
      margin: 0 auto;
      position: relative;
      z-index: 1;
      .icon{
        display:flex;
        background-image:url(${search});
        background-size:.15rem .17rem;
        width:.15rem;
        height:.17rem;
        position:absolute;
        margin-top:-.09rem;
        top:50%;
        left:.14rem;
      }
      .placeholder{
        font-size: .12rem;
        color: #666;
        margin-left: .37rem;
      }
    }
    form{
      .search-input{
        outline: none;
        color: #8f8f8f;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        padding: 0 15px;
        z-index:2;
      }
    }
  }
`