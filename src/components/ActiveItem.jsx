import React from 'react'
import {ActiveItemWrap} from './styles/styledActiveItem'

export default function ActiveItem(props) {
  let {properName,poster,lowPrice} = props.data
  return (
    <ActiveItemWrap>
      <div className="active-item">
        <a href="">
          <div className="poster"
            style={{"backgroundImage":`url(${poster})`}}
          ></div>
          <p className="name">{properName}</p>
          <div className="price">
            <span className="price-num">￥{lowPrice}</span>
            <span className="price-desc">起</span>
          </div>
        </a>
      </div>
    </ActiveItemWrap>
  )
}
