import React from 'react'

import MyHeader from '@/myheader/MyHeader'
import UserInfo from './userInfo/UserInfo'
import MyOrder from './MyOrder'
import OrderInfo from './OrderInfo'
export default function User() {
  return (
    <>
     <MyHeader
      title="我的"
     />
     <UserInfo></UserInfo>
     <MyOrder></MyOrder>
     <OrderInfo></OrderInfo>
    </>
  )
}
