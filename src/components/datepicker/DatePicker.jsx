import React ,{useState}from 'react'

import { DatePickerWrap } from './styledDatePicker'

export default function DatePicker(props) {
  let [date, setDate] = useState({
    currentYear:new Date().getFullYear(),
    currentMonth:new Date().getMonth(),
    year:  new Date().getFullYear(),
    month: new Date().getMonth(),
    today: new Date().getDate(),
  })
  let {year,month,today,currentYear,currentMonth} = date
  let weekDay = new Date(year,month,1).getDay()
  // 本月天数
  let currentDays = new Date(year,month + 1,0).getDate()
  let currentDaysArr = new Array(currentDays).fill(1).map((item,index)=>(index+1))
  let prevDays = new Date(year,month,0).getDate()
  let prevDaysArr = new Array(prevDays).fill(1).map((item,index)=>(index+1)).splice(prevDays-weekDay)
  // let nextDays = new Date(year,month + 2,0).getDate()

  let opacityYear = month ===  0 ? year-1 :year
  let opacityMonth = month === 0 ? 12 : month
  return (
    <DatePickerWrap>
      <div className="month-wrap">
        <span className="prev-month"
          onClick={()=>{
            setDate(state=>({
              ...state,
              year: state.month === 0 ? state.year - 1: state.year,
              month:state.month === 0 ? 11: state.month - 1 
            }))
          }}
        ></span>
        <div className="month-content">{month+1}月演出</div>
        <span className="next-month"
          onClick={()=>{
            setDate(state=>({
              ...state,
              year: state.month === 11 ? state.year + 1: state.year,
              month:state.month === 11 ? 0 : state.month + 1
            }))
          }}
        ></span>
      </div>
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
        <div className="day-wrap">
          {
            prevDaysArr.map((item)=>(
              <div
                className="item-day-wrap last-month"
                key={item}
                onClick={()=>{props.click({year:opacityYear,month:opacityMonth,day:item})}}
              >
                <span className="item-day">{item}</span>
              </div>
            ))
          }
          {
            currentDaysArr.map((item)=>(
              <div
                className={`item-day-wrap ${item < today&&month === currentMonth&&year=== currentYear ? 'before-today' : ''} ${item === today&&year=== currentYear&&month === currentMonth ? 'today' : ''}`}
                key={item}
                onClick={()=>{props.click({year,month:month+1,day:item})}}
              >
                <span className="item-day">{item}</span>
              </div>
                
            ))
          }
        </div>
    </DatePickerWrap>
  )
}
