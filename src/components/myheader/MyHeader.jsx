import React from 'react'
import {withRouter} from 'react-router-dom'

import { MyHeaderWrap }from './styledMyHeader'

function MyHeader(props) {
  console.log(props)
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
          <div className="title">我的</div>
        </div>
      </div>
    </MyHeaderWrap>
  )
}
export default  withRouter(MyHeader)
