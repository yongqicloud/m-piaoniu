import React from 'react'

import {SearchWrap} from './styledSearch'


export default function Search(props) {
  
  return (
    <SearchWrap
      uiDisplay={props.isFocus === 'true' ? 'none' : 'block'}
    >
      <div>
        <div className="ui-wrap">
          <span className="icon"></span>
          <span className="placeholder">搜索明星、演出、场馆</span>
        </div>
        <form action="">
          <input 
            type="text"
            className="search-input"
            onFocus={()=>props.onReceiveFocusState('true')}
            // onBlur={()=> props.onReceiveFocusState('false')}
          />
        </form>
      </div>
    </SearchWrap>
  )
}
