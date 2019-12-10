import React from 'react'

import Header from 'pages/home/plate/Header'
import Banner from 'pages/home/plate/Banner'
import HomeEntries from 'pages/home/plate/HomeEntries'
import OperatingPosition from 'pages/home/plate/OperatingPosition'
import ServiceEntry from 'pages/home/plate/ServiceEntry'
import Discount from 'pages/home/plate/Discount'
import GuessLike from 'pages/home/plate/GuessLike'

export default function Home(props) {
  console.log('prpos',props)
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <HomeEntries ></HomeEntries>
      <OperatingPosition></OperatingPosition>
      <ServiceEntry></ServiceEntry>
      <Discount></Discount>
      <GuessLike></GuessLike>
    </>
  )
}
