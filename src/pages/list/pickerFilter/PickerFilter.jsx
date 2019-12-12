import React, { Component } from 'react'

import {PickerFilterWrap} from './styledPickerFilter'

export default class PickerFilter extends Component {
  state={
    currentPicker:'',
    sort:false,
    date:false
  }
  static getDerivedStateFromProps(props,state){
    if(!props.overLay.isShow){
      return {
        sort:false,
        date:false
      }
    } 
    return null
  }
  handleSortClick=(val)=>async ()=>{
    let display = this.props.overLay.display
    if(display === 'block' && this.state.currentPicker === val){
      this.props.onChangeDisplay({
        display:'none',
        isShow:false
      })
    }else{
      this.props.onChangeDisplay({
        display:'block',
        isShow:true
      })
    }
    
    
    this.setState((state)=>{
      return {
        [val]:!state.sort,
        currentPicker:val
      }
    })
    // if(val === this.state.currentPicker){
    //   await this.setState((state)=>{
    //     return {
    //       [val]:false,
    //       currentPicker:''
    //     }
    //   })
    // }
  }
  render() {
    return (
      <PickerFilterWrap>
        <div className="main-menu-wrap">
          <div 
            className={`item icon sort ${this.state.sort ? 'active' : ''}`}
            onClick={this.handleSortClick('sort')}
          >
            综合排序
          </div>
          <div 
            className={`item icon time-picker ${this.state.date ? 'active' : ''}`}
            onClick={this.handleSortClick('date')}
          >
            时间选择
          </div>
          <div className="item online">
            在线选座
          </div>
        </div>
        <div 
          className="sub sub-sort"
          style={{display: this.state.sort ? 'block' : 'none'}}
        >
          <div className="sub-item active">综合排序</div>
          <div className="sub-item">综合排序</div>
          <div className="sub-item">综合排序</div>
          <div className="sub-item">综合排序</div>
        </div>
        <div
          className="sub-date-picker"
          style={{display: this.state.date ? 'block' : 'none'}}
        >
          <div className="list-calendar">
            <div className="month-wrap">12月演出</div>
            <div className="quick-picker-wrap">
              <span className="time-item">全部时间</span>
              <span className="time-item">本周末</span>
              <span className="time-item">一周内</span>
              <span className="time-item">一月内</span>
            </div>
            <div className="week-wrap">
              <span className="week-item">日</span>
              <span className="week-item">一</span>
              <span className="week-item">二</span>
              <span className="week-item">三</span>
              <span className="week-item">四</span>
              <span className="week-item">五</span>
              <span className="week-item">六</span>
            </div>
          </div>
        </div>
      </PickerFilterWrap>
    )
  }
}
