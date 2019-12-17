import React from 'react'
import {useParams,useLocation} from 'react-router-dom'

import MyHeader from '@/myheader/MyHeader'
import UnlimitedList from '@/UnlimitedList'

export default function MoreList() {
  let parmas = useParams()
  let {title} = useLocation().state
  console.log(parmas)
  return (
    <>
     <MyHeader
        title={title}
     />
     <div className="hot-wrap"
      style={{
        height:'calc(100% - .44rem)',
        width:'100%',
        overflowY:'scroll',

      }}
     >
       <UnlimitedList
        type="list"
        path={`/api/v1/activities/${parmas.path}`}
       ></UnlimitedList>
     </div>
    </>
  )
}
