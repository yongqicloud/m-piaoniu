import React, {useState,useEffect}from 'react'

import {SearchWrap} from './styledSearch'


export default function Search() {
  const [focus, setFocus] = useState({
      isFocus:false
  })
  return (
    <SearchWrap>
      <div>
        <div className="ui-wrap">
          <span className="icon"></span>
          <span className="placeholder">搜索明星、演出、场馆</span>
        </div>
        <form action="">
          <input 
            type="text"
            className="search-input"
            onFocus={()=> this.setFocus({isFocus:true})}
          />
        </form>
      </div>
    </SearchWrap>
  )
}
