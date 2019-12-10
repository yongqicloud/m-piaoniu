import React from 'react'

import {ListFrameWrap} from './styles/styledlistFrame'

export default function ListFrame(props) {
  return (
    <ListFrameWrap>
      <div className="activity-floor">
        <div className="header">
          <div className="title">
            {props.title}
          </div>
          <a 
            href="#"
            className="more"
          >全部</a>
        </div>
        <div className="activities">
          <div className="wrap">
            {props.children}
          </div>
        </div>
      </div>
    </ListFrameWrap>
  )
}
