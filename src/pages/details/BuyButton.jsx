import React from 'react'
import {BuyButtonWrap} from './styled/styledBuyButton'
export default function BuyButton(props) {
  return (
    <BuyButtonWrap>
      <div className="custom-service">
        <div className="icon"></div>
        <div className="text">客服</div>
      </div>
      <div className="btn-buy"
        style={{
          background:props.bgColor
        }}
      >
        {props.buyText}
      </div>
    </BuyButtonWrap>
  )
}
