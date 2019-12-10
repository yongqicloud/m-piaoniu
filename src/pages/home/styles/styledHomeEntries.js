import styled from 'styled-components'

const HomeEntriesWrap = styled.div`
  padding: .02rem .16rem;
  display:flex;
  width:100%;
  flex-wrap:wrap;
  .main-categories,.sub-categories{
    width:100%;
    display:flex;
    justify-content:space-between;
    .entry{
      margin-top:.22rem;
      width:20%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      img{
        width:.42rem;
        height:.42rem;
        margin:0 auto;
        margin-bottom:.1rem;
      }
      .title{
        font-size:.13rem;
        line-height:.16rem;
        color:#444;
      }
    }
  }
  .sub-categories{
    .entry{
      img{
        width: .26rem;
        height: .26rem;
      }
    }
  }
`
export{
  HomeEntriesWrap
}