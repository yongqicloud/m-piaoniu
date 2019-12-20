import React, { Component } from 'react'


import {PickerFilterWrap} from './styledPickerFilter'

export default class PickerFilter extends Component {
  state={
    currentPicker:'',
    sort:false,
    date:false,
    pickerSeat:false,
    sortName:'综合排序'
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
  handleSortClick=(val)=> async ()=>{
    let display = this.props.overLay.display
    if(display === 'block' && this.state.currentPicker === val){
      // 隐藏二级选择包括蒙版
      this.props.onChangeDisplay({
        display:'none',
        isShow:false
      })
      this.setState((state)=>({
          currentPicker:'1',
          sort:false,
          date:false,
          
        }
      ))
    }else{
      // 在蒙版显示的时候 切换
      this.props.onChangeDisplay({
        display:'block',
        isShow:true
      })
      if(val === 'sort'){
        this.setState(state=>({
          sort:true,
          date:false,
          pickerSeat:false,
          currentPicker:val
        }))
      }else if(val === 'date'){
        this.setState(state=>({
          date:true,
          sort:false,
          pickerSeat:false,
          currentPicker:val
        }))
      }
    }
  }
  handleSort=(id,val)=>()=>{
    this.props.onChangeDisplay({
      display:'none',
      isShow:false
    })
    this.setState(()=>({
      sortName:val,
      sort:false,
      date:false,
    }))

    this.props.onChangeSort({
      sortID:id
    })
  }
  
  handlePickseat=()=>{
    this.props.onChangeDisplay({
      display:'none',
      isShow:false
    })
    this.setState(state=>({
      pickerSeat:!state.pickerSeat,
      currentPicker:'',
      sort:false,
      date:false,
    }))
    if(this.state.pickerSeat){
      this.props.onChangeSort({
        seatMap:false
      })
    }else{
      this.props.onChangeSort({
        seatMap:true
      })
    }
  } 

  render() {
    return (
      <PickerFilterWrap>
        <div className="main-menu-wrap">
          <div 
            className={`item icon sort ${this.state.sort ? 'active' : ''}`}
            onClick={this.handleSortClick('sort')}
          >
            {this.state.sortName || '综合排序'}
          </div>
          <div 
            className={`item icon time-picker ${this.state.date ? 'active' : ''}`}
            onClick={this.handleSortClick('date')}
          >
            {this.props.dateText || '时间选择'}
          </div>
          <div 
            className={`item online ${this.state.pickerSeat ? 'seatActive' : ''}`}
            onClick={this.handlePickseat}
          >
            在线选座
          </div>
        </div>
        <div 
          className="sub sub-sort"
          style={{display: this.state.sort ? 'block' : 'none'}}
        >
          <div 
            className={`sub-item ${this.state.sortName === '综合排序' ? 'active' : ''}`}
            onClick={this.handleSort(1,'综合排序')}
            >综合排序</div>
          <div 
            className={`sub-item ${this.state.sortName === '最新优先' ? 'active' : ''}`}
            onClick={this.handleSort(2,'最新优先')}
          >最新优先</div>
          <div 
            className={`sub-item ${this.state.sortName === '低价优先' ? 'active' : ''}`}
            onClick={this.handleSort(3,'低价优先')}
          >低价优先</div>
          <div 
            className={`sub-item ${this.state.sortName === '好评优先' ? 'active' : ''}`}
            onClick={this.handleSort(4,'好评优先')}
          >好评优先</div>
        </div>
        <div
          className="sub-date-picker"
          style={{display: this.state.date ? 'block' : 'none'}}
        >
          <div className="list-calendar">
            {
              this.props.children
            }
          </div>
        </div>
      </PickerFilterWrap>
    )
  }
}
