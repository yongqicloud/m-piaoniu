import React, { useState } from 'react'

import TopBar from './plate/TopBar'
import Nav from './plate/Nav'
import PickerFilter from './pickerFilter/PickerFilter'
import UnlimitedList from '@/UnlimitedList'

import {ListContaienrWrap} from './styles/styledListContainer'
import {OverlayWrap} from './styles/styledOverlay'

export default (props)=>{
  let {params} = props.match
  
  const [overLay, setOverLay] = useState({
    display:'none',
    isShow:false
  })
    
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
