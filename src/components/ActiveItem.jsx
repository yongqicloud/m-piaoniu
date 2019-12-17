import React from 'react'
import {ActiveItemWrap} from './styles/styledActiveItem'
import {Link} from 'react-router-dom'

export default function ActiveItem(props) {
  let {properName,poster,lowPrice,categoryId} = props.data
  return (
    <ActiveItemWrap>
      <div className="active-item">
        <Link 
          to={{
            pathname:'/details',
            state:{
              categoryId,
              data:props.data,
              type:'list'
            }
          }}
        >
          <div className="poster"
            style={{"backgroundImage":`url(${poster})`}}
          ></div>
          <p className="name">{properName}</p>
          <div className="price">
            <span className="price-num">￥{lowPrice}</span>
            <span className="price-desc">起</span>
          </div>
        </Link>
      </div>
    </ActiveItemWrap>
  )
}
