import React from 'react'

import {CreditWrap} from './styled/styledCredit'

export default function Credit() {
  return (
    <CreditWrap>
      <div className="title">
        票牛服务保障
      </div>
      <div className="items-wrap">
        <div className="item">
          <img src="https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png" alt=""/>
          <span className="text">无票赔付</span>
        </div>
        <div className="item">
          <img src="https://static.piaoniu.com/nuxt-static/img/icon-danbao2.2e56eee.png" alt=""/>
            <span className="text">出票保真</span>
        </div>
        <div className="item">
          <img src="https://static.piaoniu.com/nuxt-static/img/icon-youpiao2.0df1e5e.png" alt=""/>
            <span className="text">配送保障</span>
        </div>
      </div>
    </CreditWrap>
  )
}
