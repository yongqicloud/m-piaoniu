import React from 'react'
import {ItemWrap} from './styles/styedItem'
import {withRouter} from 'react-router-dom'
function Item(props) {

  if(props.type === 'home'){
    var {poster,star,shortname,venueName,timeRange,lowPrice,soldOut,categoryId} = props.data.recommendContent
  }else if( props.type === 'list'){
    var {poster,star,shortname,venueName,timeRange,lowPrice,soldOut,categoryId} = props.data
  }
  if(props.data.activityType === 2){

    return (
      <div className="img-box">
        <img src={poster} alt=""/>
      </div>
    )
  }
  
  return (
    <ItemWrap
      onClick={()=>{
        props.history.push(
          "/details",
          {
            categoryId,
            data:props.data,
            type:props.type
          })
      }}
    >
      <div>
        <div className="poster-wrap">
          <div className="poster"
            style={{"backgroundImage":`url(${poster})`}}
          >
          </div>
        </div>
        <div className="info-wrap">
          <div className="title-wrap">
            <div className="item-title">
              <span className="city">[天津]</span>
              {shortname}
            </div>
            <div className="activity-tag">
              <div className="status-1">电</div>
            </div>
          </div>
          <div className="time-address">
            <span className="tiem">{timeRange}</span>
            <span className="space">|</span>
            <span className="address">{venueName}</span>
          </div>
          {
            star === 0 ?
            <div className="no-rank">暂无评分</div>
            :
            <div className="rank">
              评分 
              <i dangerouslySetInnerHTML={{__html:"&nbsp"}}></i>
              <span className="star">{star}</span>
            </div>
          }
          <div className="price-wrap">
            {soldOut?(
              <NoPrice></NoPrice>
            ):(
              <HavePrice
                lowPrice={lowPrice}
              />
            )}
            
          </div>
        </div>
      </div>
    </ItemWrap>
  )
}
export default withRouter(Item)


function HavePrice(props) {
  return (
    <>
      <span className="price">{props.lowPrice}</span>
      <span className="desc">元起</span>
    </>
  )
}

function NoPrice() {
  return (
    <div className="status-text">
      暂无余票
    </div>
  )
}

