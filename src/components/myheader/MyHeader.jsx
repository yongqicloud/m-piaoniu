import React from 'react'
import {withRouter} from 'react-router-dom'

import { MyHeaderWrap }from './styledMyHeader'

function MyHeader(props) {
  return (
    <MyHeaderWrap>
      <div className="content-wrap">
        <div className="btn-back"
          onClick={()=>{
            props.history.goBack()
          }}
        >
          <div className="icon"></div>
        </div>
        <div className="content">
          <div className="title">{props.title}</div>
        </div>
      </div>
    </MyHeaderWrap>
  )
}
export default  withRouter(MyHeader)
