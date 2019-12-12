import React from 'react'
import {UserInfoWrap} from './styledUserInfo'

export default function UserInfo() {
  return (
    <UserInfoWrap>
      <div className="info-wrap">
        <div className="info-content">
          <div className="user-avatar"></div>
          <div className="base-info">

          </div>
        </div>
      </div>
      <div className="counts">
        <div className="item">
          <div className="num">0</div>
          <div className="text">想看</div>
        </div>
        <div className="item">
          <div className="num">0</div>
          <div className="text">想看</div>
        </div>
        <div className="item">
          <div className="num">0</div>
          <div className="text">想看</div>
        </div>
        <div className="item">
          <div className="num">0</div>
          <div className="text">想看</div>
        </div>
      </div>
    </UserInfoWrap>
  )
}
