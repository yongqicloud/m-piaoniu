import React, { Component,useState, useEffect } from 'react'

import TopBar from './plate/TopBar'
import Nav from './plate/Nav'
import PickerFilter from './pickerFilter/PickerFilter'
import {ListContaienrWrap} from './styles/styledListContainer'
import {OverlayWrap} from './styles/styledOverlay'
import {get} from 'utils/http'
import Item from '@/Item'

export default (props)=>{
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
        {
          state.list.map(item =>(
            item.activityType === 2
              ?<div 
                key={item.id}
                style={{display:'block!important'}}
                className="ad-img"
              >
                <img src={item.poster} alt=""/>
              </div>
              :<Item 
                type='list'
                key={item.id}
                data={item}
              />
              
          ))
        }
       </ListContaienrWrap>
       <OverlayWrap
        display={overLay.display}
        onClick={()=>{setOverLay({display:'none',isShow:false})}}
       ></OverlayWrap>
      </>
    )
}
