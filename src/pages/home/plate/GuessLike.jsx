import React , {useState,useEffect,useRef} from 'react'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { GuessLikeWrap } from '../styles/styledGuessLike'

export default function GuessLike(props) {

  return (
    <GuessLikeWrap>
      <div className="title">猜你喜欢</div>
      {props.children}
    </GuessLikeWrap>
  )
}
