import React from 'react'

import {ListFrameWrap} from './styles/styledlistFrame'
import {Link} from 'react-router-dom'


export default function ListFrame(props) {
  return (
    <ListFrameWrap>
      <div className="activity-floor">
        <div className="header">
          <div className="title">
            {props.title}
          </div>
          <Link 
            to={{
              pathname:`/morelist/${props.path}`,
              state:{
                title:props.headText
              }
            }}
            className="more"
          >全部</Link>
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
