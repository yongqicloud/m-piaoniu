import React from 'react'
import {MoreExcitingWrap,ButtomWrap} from '../styles/styledMoreExciting'
export default function MoreExciting() {
  return (
    <MoreExcitingWrap>
      <ButtomWrap
        width="1px"
        color="#f5f5f5"
        radius={5}
      >
        <span>更多精彩内容待你发现</span>
        <span className="arrow"></span>
      </ButtomWrap>
    </MoreExcitingWrap>
  )
}
