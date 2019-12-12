import styled from 'styled-components'

export const NavWrap = styled.div`
  width:100%;
  height:.4rem;
  background:#fff;
  position: relative;
  z-index:10;
  .nav-menu-wrap{
    width:100%;
    height:100%;
    .nav-menu{
      width:100%;
      height:100%;
      overflow-x:auto;
      white-space: nowrap;
      /* display:flex;
      flex-wrap:no-wrap; */
      a{
        box-sizing:border-box;
        display: inline-block;
        color: #333;
        margin: 0 15px;
        padding: 10px 0;
        &.active{
          border-bottom: 3px solid #ff2661;
          color: #ff2661;
        }
      }
    }
  }
`