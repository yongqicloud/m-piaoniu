import React from 'react'
import {MyOrderWrap }from './styled/index'

export default function MyOrder() {
  return (
    <MyOrderWrap>
      <div className="text">我的订单</div>
      <div className="box">
        <div className="action">查看订单</div>
        <div className="go"></div>
      </div>
    </MyOrderWrap>
  )
}
