import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {HomeEntriesWrap} from '../styles/styledHomeEntries'
import {connect} from 'react-redux'

const mapState = (state)=>{
  return {
    list:state.root.list
  }
}
// 装饰器
@connect(mapState)
class HomeEntries extends Component {
  render() {
    console.log(this.props)
    let list = this.props.list
    return (
      <HomeEntriesWrap>
        <div className="main-categories">
          {
            list.map((item)=>(
              item.type ===  'max' &&
              <Link 
                to="/list"
                className="entry" 
                key={item.id} 
              >
                <img src={item.category} alt=""/>
                <div className="title">{item.title}</div>
              </Link>
            ))
          }
        </div>
        <div className="sub-categories">
          {
            list.map(item=>(
              item.type ===  'min' &&
              <a 
                href=""
                className="entry" 
                key={item.id}
              >
                <img src={item.category} alt=""/>
                <div className="title">{item.title}</div>
              </a>
            ))
          }
        </div>
      </HomeEntriesWrap>
    )
  }
}

export default HomeEntries