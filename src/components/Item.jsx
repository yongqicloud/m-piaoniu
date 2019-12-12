import React from 'react'
import {ItemWrap} from './styles/styedItem'

export default function Item(props) {

  if(props.type === 'home'){
    var {poster,star,shortname,venueName,timeRange,lowPrice} = props.data.recommendContent
  }else if( props.type === 'list'){
    var {poster,star,shortname,venueName,timeRange,lowPrice} = props.data
  }
  if(props.data.activityType === 2){

    return (
      <div className="img-box">
        <img src={poster} alt=""/>
      </div>
    )
  }
  
  return (
    <ItemWrap>
      <div>
        <div className="poster-wrap">
          <div className="poster"
            style={{"backgroundImage":`url(${poster})`}}
          >
          </div>
        </div>
        <div className="info-wrap">
          <div className="title-wrap">
            <div className="title">
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
            {lowPrice?(
                <HavePrice
                  lowPrice={lowPrice}
                />
            ):(
              <NoPrice></NoPrice>
            )}
            
          </div>
        </div>
      </div>
    </ItemWrap>
  )
}

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

