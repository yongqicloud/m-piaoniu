import React,{useEffect,useRef,useState} from 'react'

import MyHeader from '@/myheader/MyHeader'
import DeatilsHeader from './DeatilsHeader'
import {IntroduceWrap} from './styled/styledDeatilsHeader'
import RelatedShow from './RelatedShow'
import Credit from './Credit'
import BuyButton from './BuyButton'
import Item from '@/Item'
import {withRouter,useLocation} from 'react-router-dom'

import {get} from 'utils/http'

function Details(props){
  console.log(useLocation().state)
  const [list, setList] = useState({
    data:[]
  })
  useEffect(()=>{
     document.querySelector('.scroll-wrap').scrollTop = 0
  })

  let {categoryId,data,type} = useLocation().state
  let soldOut = data.soldOut 
  let categoryIdRef = useRef()
  categoryIdRef.current = categoryId
  useEffect(()=>{
    (async ()=>{
      let result = await get({
        url:'/api/v3/activities',
        params:{
          pageIndex:1,
          pageSize:10,
          categoryId:categoryIdRef.current
        }
      })
      setList({
        data:result.data.slice(0,3).filter(item=>{
          return item.activityType === 1
        })
      })
      
    })()
  },[])
  return (
    <>
      <MyHeader
        title="演出详情"
      /> 
      <DeatilsHeader
        data={data}
        type={type}
      />
      <IntroduceWrap>
        <div className="title">演出简介</div>
        <div className="content">
          <div className="inner">

          </div>
          <div className="more">
            <div className="shadow"></div>
            <div className="text">
              展开更多
              <img src="https://static.piaoniu.com/nuxt-static/img/blueArrowDown.9e945aa.png" alt=""/>
            </div>
          </div>
        </div>
      </IntroduceWrap>
      <RelatedShow>
        {
          list.data.map(item=>(
            <Item
              type="list"
              key={item.recommendContent ? item.recommendContent.id : item.id}
              data={item}
            />
          ))
        }
      </RelatedShow>
      <Credit></Credit>
      <BuyButton
        buyText={soldOut ? "有票通知我" : "直接购票"}
        bgColor={soldOut ? "rgb(95, 183, 252)" : "#ff2661"}
      ></BuyButton>
    </>
  )
}

export default withRouter(Details)
