import React, { Component } from 'react'

import {PositionWrap} from '../styles/styledPosition'

export default class OperatingPosition extends Component {
  state={
    list:[
      {
        id:1,
        title:'0元看演出',
        mainTitle:'https://assets.piaoniu.com/home/op1-title-v2@3x.png',
        topText:'https://assets.piaoniu.com/home/op1-bgtext@3x.png',
        poster:'https://img.piaoniu.com/misc/dae9abe27089b8d80f4ab01d78a2e7fc4f72af71.png',
      },
      {
        id:2,
        title:'限时限量抢',
        mainTitle:'https://assets.piaoniu.com/home/op2-title@3x.png',
        topText:'https://assets.piaoniu.com/home/op2-bgtext@3x.png',
        poster:'https://img.piaoniu.com/misc/1cca4af4f80feda66133b40c8ce0c196dbb1f9f2.png',
      }
    ]
  }
  render() {
    return (
      <PositionWrap>
        {
          this.state.list.map(item=>(
            <div className="item" key={item.id}>
              <div className="title-wrap">
                <div className="main-title" style={{backgroundImage:`url(${item.mainTitle})`}}></div>
                <div className="sub-title">{item.title}</div>
              </div>
              <div className="poster-wrap">
                <div className="top-text" style={{backgroundImage:`url(${item.topText})`}}></div>
                <div className="poster" style={{backgroundImage:`url(${item.poster})`}}></div>
              </div>
            </div>
          ))
        }
      </PositionWrap>
    )
  }
}
