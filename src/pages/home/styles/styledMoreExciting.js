import styled from 'styled-components'

import more from 'assets/images/more-min.png'
import border from '@/styles/border'

export const MoreExcitingWrap = styled.div`
  width:100%;
  padding:.24rem .14rem;
  line-height: .4rem;
  display:flex;
`
export const ButtomWrap = border(styled.a`
  box-sizing:border-box;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#262626;
    .arrow{
      height: 10px;
      width: 7px;
      background: url(${more}) no-repeat;
      margin-left: 8px;
      background-size: cover;
    }
`)