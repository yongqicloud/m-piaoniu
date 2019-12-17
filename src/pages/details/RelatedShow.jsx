import React from 'react'

import { RelatedShowWrap } from './styled/styledDeatilsHeader'

export default function RelatedShow(props) {
  return (
    <RelatedShowWrap>
      <div className="title">相关演出</div>
      {props.children}
    </RelatedShowWrap>
  )
}
