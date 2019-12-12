import React , {useState,useEffect,useRef} from 'react'
import {withRouter,useParams} from 'react-router-dom'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Item from '@/Item'
import {get} from 'utils/http'
// loading tip
function loadingToast() {
  Toast.loading('加载中...', 1.5, () => {
    console.log('Load complete !!!');
  });
}
 
function UnlimitedList(props) {
  let { categoryId }= useParams()
  let categoryIdRef = useRef(null)
  let num = categoryId === '9999' ? '2' : categoryId
  categoryIdRef.current = num
  let [list,setList] = useState({
    data:[],
  })
  let [pageNo,setPageNo] = useState({
    pageIndex: 1,
    pageSize:10,
    categoryId:categoryIdRef.current
  })
  const ref = useRef(pageNo)
  useEffect(()=>{
    const fetchData = async ()=>{
      let result = await get({
        url:props.path,
        params:{
          pageIndex:pageNo.pageIndex,
          pageSize:pageNo.pageSize,
          categoryId:categoryIdRef.current
        }
      })
      await setList((state)=>({
        // data:[...state.data,...result.data]
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
            ref.current.pageIndex +=1
            let result = await get({
              url:props.path,
              params:{
                pageIndex:ref.current.pageIndex,
                pageSize:ref.current.pageSize,
                categoryId:categoryIdRef.current
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
    
  },[categoryIdRef.current])
  return (
      <div className="wrap">
        {
          list.data.map((item,index) =>(
            <Item
              type={props.type}
              key={item.recommendContent ? item.recommendContent.id : item.id}
              data={item}
            />
          ))
        }
        <div id="observe"></div>
      </div>
  )
}

export default withRouter(UnlimitedList)
