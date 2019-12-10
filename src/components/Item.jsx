import React from 'react'
import {ItemWrap} from './styles/styedItem'

export default function Item(props) {
  console.log(props)
  let {poster,star,shortname,venueName,timeRange,lowPrice} = props.data.recommendContent
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
            <span className="price">{lowPrice}</span>
            <span className="desc">元起</span>
          </div>
        </div>
      </div>
    </ItemWrap>
  )
}
