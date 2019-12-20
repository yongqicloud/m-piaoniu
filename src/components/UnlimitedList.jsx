import React , {useState,useEffect,useRef} from 'react'
import {withRouter,useParams} from 'react-router-dom'
import { Toast } from 'antd-mobile';
import Item from '@/Item'
import {get} from 'utils/http'
// loading tip
function loadingToast() {
  Toast.loading('加载中...', 1.5, () => {
    console.log('Load complete !!!');
  });
}
 
function UnlimitedList(props) {
  let {sortID} = props.sort || ''
  let {seatMap} =props.sort || 'false'
  let {startTime,endTime} = props.sort || ''
  let { categoryId }= useParams()
  // 频道id
  categoryId = (categoryId === '9999' ? '2' : categoryId)
  let [list,setList] = useState({
    data:[],
  })
  let [pageNo] = useState({
    pageIndex: 1,
    pageSize:10,
    categoryId,
  })
  const refPageNo = useRef(pageNo)
  useEffect(()=>{
    const fetchData = async ()=>{
      let result = await get({
        url:props.path,
        params:{
          pageIndex:pageNo.pageIndex,
          pageSize:pageNo.pageSize,
          categoryId,
          sort:sortID,
          seatMap,
          startTime,
          endTime
        }
      })
      await setList((state)=>({
        data:result.data
      }))

      // InterSection Observe
      const options = {
        root: document.querySelector('#root'),
        rootMargin: '0px',
        threshold: 1.0
      };
      // Intersection Observer callback; handle http result
      const callback = function(entries, observer) {
        entries.forEach(async (entry) => {
          if(entry.isIntersecting ){
            console.log('看到了')
            loadingToast()
            refPageNo.current.pageIndex +=1
            let result = await get({
              url:props.path,
              params:{
                pageIndex:refPageNo.current.pageIndex,
                pageSize:refPageNo.current.pageSize,
                categoryId,
                sort:sortID,
                seatMap,
                startTime,
                endTime
              }
            })
            
            setList((state)=>({
              data:[...state.data,...result.data]
            }))
          }
        });
      }
      const observer = new IntersectionObserver(callback, options)
      const target = document.querySelector('#observe');
      observer.observe(target)
    }

    fetchData()
    
  },[categoryId,sortID,seatMap,startTime,endTime])
  return (
      <div 
        className="wrap"
        style={{
          overflow:'hidden'
        }}
      >
        {
          list.data.length > 0
          ?list.data.map((item,index) =>(
            <Item
              type={props.type}
              key={item.recommendContent ? item.recommendContent.id : item.id}
              data={item}
            />
          ))
          :<div 
            className="empty-tip"
            style={{width:'100%',padding:'10px 0',textAlign:'center'}}
          >暂无数据哦!</div>
        }
        <div id="observe"></div>
      </div>
  )
}

export default withRouter(UnlimitedList)
