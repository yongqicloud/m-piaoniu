import styled from 'styled-components'
export const ActiveItemWrap = styled.div`
  .active-item{
    width:1.02rem;
    margin-right:.1rem;
    >a{
      display:block;
      width:100%;
      .poster{
        width:100%;
        height:1.37rem;
        position:relative;
        background-image:url(https://img.piaoniu.com/poster/e096fcf05e11913866cd7aaa600083e3e618f5cd.jpg?imageView2/2/w/220/h/164/format/jpg/q/60);
        background-position:50%;
        background-size:cover;
      }
      .name{
        white-space: nowrap;
        margin-top: 7px;
        margin-bottom: 3px;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .14rem;
        line-height:1.2;
      }
      .price{
        height:.17rem;
        .price-num{
          color:#ff2661;
          font-size:.12rem;
        }
        .price-desc{
          font-size: 12px;
          transform: scale(.8);
          transform-origin: left bottom;
          display: inline-block;
          margin-left: 2px;
          color: #999;
        }
      }
    }
  }

`