import React from 'react'

import ListFrame from '@/ListFrame'
import ActiveItem from '@/ActiveItem'
import MoreExciting from './MoreExciting'

import {get} from 'utils/http'
import {useState,useEffect} from 'react'

export default function Discount() {
  let [hotDataList,setHotDataList] = useState({data:[]})
  let [discountData,setDiscountData] = useState({data:[]})
  //  热门
  useEffect(()=>{
    (async()=>{
      let res = await get({
        url:'/api/v1/activities/hot',
        params:{
          pageIndex:1,
          pageSize:10,
        }
      })
      setHotDataList({
        data:res.data
      })
    })()
  },[])
  // 折扣
  useEffect(()=>{
    (async ()=>{
      let res = await get({
        url:'/api/v1/activities/discount',
        params:{
          pageIndex:1,
          pageSize:10,
        }
      })
      setDiscountData({
        data:res.data
      })
    })()
  },[])
  return (
    <>
     <ListFrame
      title='近期热门'
      path="hot"
      headText="枪手票"
     >
     {
        hotDataList.data.map(item=>(
          <ActiveItem
            key={item.id}
            data={item}
          />
        ))
      }
     </ListFrame>
     <ListFrame
      title="折扣专区"
      path="discount"
      headText="折扣票"
     >
      {
        discountData.data.map(item=>(
          <ActiveItem
            key={item.id}
            data={item}
          />
        ))
      }
     </ListFrame>
     <MoreExciting></MoreExciting>
    </>
  )
}
