import styled from 'styled-components'
import defaultAvatar from 'assets/images/defaultAvatar.png'

export const UserInfoWrap = styled.div`
position:relative;
  .info-wrap{
    .info-content{
      width:100%;
      height:1.72rem;
      position:relative;
      background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
      .user-avatar{
        position: absolute;
        left: 18px;
        top: 37px;
        border: none;
        width:.56rem;
        height:.56rem;
        background:url(${defaultAvatar});
        background-size:cover;
        background-position:center;
        border-radius:50%;
      }
    }
  }
  .counts{
    position:absolute;
    bottom: 0;
    width:100%;
    height: 49px;
    display: flex;
    align-items: center;
    .item{
      flex:1;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color:#fff;
    }
  }
`