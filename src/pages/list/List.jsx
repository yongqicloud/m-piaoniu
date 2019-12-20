import React, { useState } from 'react'

import TopBar from './plate/TopBar'
import Nav from './plate/Nav'
import PickerFilter from './pickerFilter/PickerFilter'
import UnlimitedList from '@/UnlimitedList'
import DatePicker from '@/datepicker/DatePicker'
import {ListContaienrWrap} from './styles/styledListContainer'
import {OverlayWrap} from './styles/styledOverlay'

export default (props)=>{
  let {params} = props.match
  const [sort, setSort] = useState({
    sortID:'',
    seatMap:false,
    startTime:'',
    endTime:'',
  })
  const [overLay, setOverLay] = useState({
    display:'none',
    isShow:false,
  })
  const [ dateText ,setDateText]= useState('')
  const handleClick=(val)=>{
    console.log('parent --- click',val)
    let {year,month,day} = val
    let startTime = new Date(year,month,day).getTime()
    let endTime = new Date(year,month,day+1).getTime() - 1
    setSort(state=>({
      ...state,
        startTime,
        endTime
    }))
    setOverLay(state=>({
      display:'none',
      isShow:false,
    }))
    setDateText(`${month}月${day}日`)
  }
    return (
      <>
       <TopBar></TopBar>
       <Nav></Nav>
       <PickerFilter
          overLay={overLay}
          dateText={dateText}
          onChangeDisplay={setOverLay}
          onChangeSort={setSort}
       >
         <DatePicker 
            click={handleClick}
         ></DatePicker>
       </PickerFilter>
       <ListContaienrWrap>
        <UnlimitedList 
          categoryId={params.categoryId}
          path="/api/v3/activities"
          type="list"
          sort={sort}
        ></UnlimitedList>
       </ListContaienrWrap>
       <OverlayWrap
        display={overLay.display}
        onClick={()=>{setOverLay({display:'none',isShow:false})}}
       ></OverlayWrap>
      </>
    )
}
