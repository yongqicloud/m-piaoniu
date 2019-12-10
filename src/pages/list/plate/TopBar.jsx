import React from 'react'

import {TopBarWrap} from '../styles/styledTopBar'
import Search from '@/search/Search'


export default function TopBar() {
  return (
    <TopBarWrap>
      <button className="back">返回</button>
      <Search></Search>
      <button className="cancel">取消</button>
      
    </TopBarWrap>
  )
}
