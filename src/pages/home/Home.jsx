import React from 'react'

import Header from 'pages/home/plate/Header'
import Banner from 'pages/home/plate/Banner'
import HomeEntries from 'pages/home/plate/HomeEntries'
import OperatingPosition from 'pages/home/plate/OperatingPosition'
import ServiceEntry from 'pages/home/plate/ServiceEntry'
import Discount from 'pages/home/plate/Discount'
import GuessLike from 'pages/home/plate/GuessLike'
import UnlimitedList from '@/UnlimitedList'
export default function Home(props) {
  return (
    <>
      <Header/>
      <Banner/>
      <HomeEntries/>
      <OperatingPosition/>
      <ServiceEntry/>
      <Discount/>
      <GuessLike>
        <UnlimitedList
          type="home"
          path="/api/v2/home/recommends"
        ></UnlimitedList>
      </GuessLike>
    </>
  )
}
