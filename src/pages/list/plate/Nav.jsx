import React from 'react'
import { useStore } from 'react-redux'
import { NavWrap } from "../styles/styledNav";
import {Link} from 'react-router-dom'

export default function Nav() {
  const store = useStore()
  let {root} = store.getState()
  let myList = root.list.slice(0,9)
  myList.unshift({
      id:9999,
      title:'全部分类',
      
      type:'min',
  })
  // root
  return (
    <NavWrap>
      <div className="nav-menu-wrap">
        <div className="nav-menu">
          {
            myList.map(item => (
              <Link
                key={item.id}
                to="/list"
                className={item.id === 9999 ? 'active' : ''}
              >
                {item.title} 
              </Link>
            ))
          }
        </div>
      </div>
    </NavWrap>
  )
}
