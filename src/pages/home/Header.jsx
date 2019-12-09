import React from 'react'

import {HeaderWrap} from './styledHeader'

export default function Header() {
  return (
    <HeaderWrap>
      <div className="city-picker"><span>北京</span></div>
      <div className="search-box">
        <div className="search-wrap">
          <span className="search-icon"></span>
          <span className="placeholder">搜索明星、演出、场馆</span>
        </div>
      </div>
      <div className="profile">
        <a href="javascript:;" className="person-icon"></a>
      </div>
    </HeaderWrap>
  )
}
