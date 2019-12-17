import React from 'react'

import {AddressWrap,VenueWrap,TransportWrap} from './styledAddress'


export default function Address(props) {
  console.log(props)
  let {name,address,parking,transportation} = props
  return (
    <AddressWrap>
      <VenueWrap
        className="venue"
        width="0 0 1px 0"
        color="#e6e6e6"
      >
      <div className="name">
          <div className="venue-icon"></div>
            <div className="venue-content">{name}</div>
          </div>
        <div className="address">{address}</div>
      </VenueWrap>
      <TransportWrap
        className="transport"
        width="0 0 1px 0"
        color="#e6e6e6"
      >
        <div className="span-wrap">
          <div className="icon"
            style={{background: 'url(https://static.piaoniu.com/m/static/img/venueTrafficIcon.f0db479.png)'}}
          ></div>
          <div className="left-text">交通 :</div>
        </div>
        <div className="text">{transportation || '暂无'}</div>
      </TransportWrap>
      <TransportWrap
        className="parking"
      >
        <div className="span-wrap">
          <div className="icon"
            style={{background: 'url(https://static.piaoniu.com/m/static/img/venueParkingIcon.c61da4d.png)'}}
          ></div>
          <div className="left-text">停车 :</div>
        </div>
        <div className="text">
          <p>{parking}</p>
          <p></p>
          <p>卓展购物中心-停车场 316米 </p>
          <p></p>
          <p>中铁内部停车场：北京市海淀区复兴路69号</p>
          <p></p>
          <p>中国中铁广场-停车场</p>
        </div>
      </TransportWrap>
    </AddressWrap>
  )
}
