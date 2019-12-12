import React , {useState,useEffect} from 'react'

import { GuessLikeWrap }from '../styles/styledGuessLike'
import Item from '@/Item'
import {get} from 'utils/http'

export default function GuessLike() {
  let [list,setList] = useState({data:[]})
  useEffect(()=>{
    
    (async ()=>{
      let result = await get({
        url:'/api/v2/home/recommends',
        params:{
          pageIndex:1,
          pageSize:10,
        }
      })
      console.log(result)
      setList({
        data:result.data
      })
    })()

  },[])
  return (
    <GuessLikeWrap>
      <div className="title">猜你喜欢</div>
      <div className="wrap">
        {
          list.data.map(item =>(
            <Item
              type="home"
              key={item.recommendContent.id}
              data={item}
            />
          ))
        }
      </div>
    </GuessLikeWrap>
  )
}
