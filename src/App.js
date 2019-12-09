import React from 'react';

import 'assets/styles/reset.css'
import './App.css'
import Header from 'pages/home/Header'
import Banner from 'pages/home/Banner'
import HomeEntries from 'pages/home/HomeEntries'
import OperatingPosition from 'pages/home/OperatingPosition'
import ServiceEntry from 'pages/home/ServiceEntry'
import ListFrame from '@/ListFrame'

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <HomeEntries></HomeEntries>
      <OperatingPosition></OperatingPosition>
      <ServiceEntry></ServiceEntry>
      <ListFrame></ListFrame>
    </>   
  );
}

export default App;
