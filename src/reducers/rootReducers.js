import {LOADDATA} from './action-types'

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

const defaultState = {
  list:[
    {
      id:1,
      title:'演唱会',
      category:category01,
      type:'max',
      categoryId:2
    },
    {
      id:2,
      title:'话剧歌剧',
      category:category02,
      type:'max',
      categoryId:5
    },
    {
      id:3,
      title:'休闲展览',
      category:category03,
      type:'max',
      categoryId:9999
    },
    {
      id:4,
      title:'体育赛事',
      category:category04,
      type:'max',
      categoryId:8
    },
    {
      id:5,
      title:'音乐会',
      category:category05,
      type:'max',
      categoryId:3
    },
    {
      id:6,
      title:'儿童亲子',
      category:categorySub01,
      type:'min',
      categoryId:4
    },
    {
      id:7,
      title:'戏曲综艺',
      category:categorySub02,
      type:'min',
      categoryId:7
    },
    {
      id:8,
      title:'舞蹈芭蕾',
      category:categorySub03,
      type:'min',
      categoryId:6
    },
    {
      id:9,
      title:'旅游玩乐',
      category:categorySub04,
      type:'min',
      categoryId:9
    },
    {
      id:10,
      title:'更多精彩',
      category:categorySub05,
      type:'min',
      categoryId:0
    },
  ],
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        list: [...state.list,...action.list]
      }
    default:
      return state
  }
}