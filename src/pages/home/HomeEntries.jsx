import React, { Component } from 'react'

import {HomeEntriesWrap} from './styledHomeEntries'

// main-img
import category01 from 'assets/images/homeentries/category-large-1.png'
import category02 from 'assets/images/homeentries/category-large-2.png'
import category03 from 'assets/images/homeentries/category-large-3.png'
import category04 from 'assets/images/homeentries/category-large-4.png'
import category05 from 'assets/images/homeentries/category-large-5.png'
//sub-img
import categorySub01 from 'assets/images/homeentries/category-sub-1.png'
import categorySub02 from 'assets/images/homeentries/category-sub-2.png'
import categorySub03 from 'assets/images/homeentries/category-sub-3.png'
import categorySub04 from 'assets/images/homeentries/category-sub-4.png'
import categorySub05 from 'assets/images/homeentries/category-sub-5.png'


export default class HomeEntries extends Component {
  state={
    mainCategories:[
      {
        title:'演唱会',
        category:category01,
      },
      {
        title:'话剧歌剧',
        category:category02
      },
      {
        title:'休闲展览',
        category:category03
      },
      {
        title:'体育赛事',
        category:category04
      },
      {
        title:'音乐会',
        category:category05
      }
    ],
    subCategories:[
      {
        id:1,
        title:'儿童亲子',
        category:categorySub01
      },
      {
        id:2,
        title:'戏曲综艺',
        category:categorySub02
      },
      {
        id:3,
        title:'舞蹈芭蕾',
        category:categorySub03
      },
      {
        id:4,
        title:'旅游玩乐',
        category:categorySub04
      },
      {
        id:5,
        title:'更多精彩',
        category:categorySub05
      },
    ]
  }
  render() {
    return (
      <HomeEntriesWrap>
        <div className="main-categories">
          {
            this.state.mainCategories.map((item)=>(
              <a href="javascript:;" className="entry" key={item.key}>
                <img src={item.category} alt=""/>
                <div className="title">{item.title}</div>
              </a>
            ))
          }
        </div>
        <div className="sub-categories">
          {
            this.state.subCategories.map(item=>(
              <a href="javascript:;" className="entry">
                <img src={item.category} alt=""/>
                <div className="title">{item.title}</div>
              </a>
            ))
          }
        </div>
      </HomeEntriesWrap>
    )
  }
}

