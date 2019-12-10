import styled from 'styled-components'

// img
import expand from 'assets/images/expand.png'
import search from 'assets/images/search-dark.png'
import person from 'assets/images/person.png'


const HeaderWrap = styled.div`
  background:#fff;
  height:.44rem;
  display: flex;
  .city-picker{
    display: flex;
    padding-right:.09rem;
    span{
      min-width:.28rem;
      max-width: 1.5rem;
      padding: 0 .12rem 0 .16rem;
      line-height: .44rem;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      background:url(${expand}) no-repeat;
      background-size:.05rem .03rem;
      background-position:100%;

    }
  }
  .search-box{
    flex:1;
    padding:.05rem 0 .05rem .08rem;
    .search-wrap{
      width:100%;
      height:100%;
      background:#f5f5f5;
      border-radius:.17rem;
      display:flex;
      align-items:center;
      position: relative;
      /* padding-left:.14rem; */
      .search-icon{
        position:absolute;
        left:.14rem;
        top:50%;
        margin-top: -.09rem;
        width: .16rem;
        height: .15rem;
        background:url(${search}) no-repeat center; 
        background-size:.16rem .15rem;
      }
      .placeholder{
        margin-left:.37rem;
        font-size: .15rem;
        line-height:1;
        color:#999;
      }
    }
  }
  .profile{
    width:.57rem;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .person-icon{
      width:.17rem;
      height:.19rem;
      background:url(${person}) no-repeat center;
      background-size:.17rem .19rem;
    }
  }
`
export{
  HeaderWrap
}