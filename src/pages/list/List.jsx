import React, { Component,useState, useEffect } from 'react'

import TopBar from './plate/TopBar'
import Nav from './plate/Nav'
import PickerFilter from './pickerFilter/PickerFilter'
import Item from '@/Item'
import UnlimitedList from '@/UnlimitedList'

import {ListContaienrWrap} from './styles/styledListContainer'
import {OverlayWrap} from './styles/styledOverlay'
import {get} from 'utils/http'

export default (props)=>{
  let {params} = props.match
  const [state, setState] = useState({
    list:[]
  })
  const [overLay, setOverLay] = useState({
    display:'none',
    isShow:false
  })
    useEffect(()=>{
      (async ()=>{
        let result = await get({
          url:'/api/v3/activities',
          params:{
            pageIndex: 1,
            categoryId: 2,
            time: '',
            sort: '',
            seatMap: false,
            highestPrice: '',
          }
        })
        console.log(result)
        setState({
          list:result.data
        })
      })()
    },[])
    return (
      <>
       <TopBar></TopBar>
       <Nav></Nav>
       <PickerFilter
          overLay={overLay}
          onChangeDisplay={setOverLay}
       ></PickerFilter>
       <ListContaienrWrap>
        <UnlimitedList 
          categoryId={params.categoryId}
          path="/api/v3/activities"
          type="list"
        ></UnlimitedList>
       </ListContaienrWrap>
       <OverlayWrap
        display={overLay.display}
        onClick={()=>{setOverLay({display:'none',isShow:false})}}
       ></OverlayWrap>
      </>
    )
}
