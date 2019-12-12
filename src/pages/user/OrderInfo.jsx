import React from 'react'

import {OrderInfoWrap} from './styled/'

export default function OrderInfo() {
  return (
    <OrderInfoWrap>
    <div className="orders">
      <div className="item">
        <div className="icon"
          style={{backgroundImage:"url(https://static.piaoniu.com/m/static/img/order-topay.4cf62ce.png)"}}
        ></div>
        <div className="text">待付款</div>
      </div>
      <div className="item">
        <div className="icon"
          style={{backgroundImage:"url(https://static.piaoniu.com/m/static/img/order-tosend.20248ed.png)"}}
        ></div>
        <div className="text">待付款</div>
      </div>
      <div className="item">
        <div className="icon"
          style={{'backgroundImage':"url(https://static.piaoniu.com/m/static/img/order-toreceive.d23cc4e.png)"}}
        ></div>
        <div className="text">待付款</div>
      </div>
    </div>
    </OrderInfoWrap>
  )
}
