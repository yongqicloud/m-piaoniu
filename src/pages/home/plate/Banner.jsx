import React from 'react'

import { BannerWrap }from '../styles/styledBanner'
import SelfCarousel from './SelfCarousel'
export default function Banner() {
  return (
    <BannerWrap>
      <SelfCarousel></SelfCarousel>
    </BannerWrap>
  )
}
