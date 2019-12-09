import React from 'react'

import {ServiceWrap} from './ServiceWrap'

export default function ServiceEntry() {
  return (
    <ServiceWrap>
      <div className="title">服务保障</div>
      <div className="services">
        <span className="services-item">无票赔付</span>
        <i className="line"></i>
        <span className="services-item">出票保真</span>
        <i className="line"></i>
        <span className="services-item">配送保障</span>
      </div>
    </ServiceWrap>
  )
}
