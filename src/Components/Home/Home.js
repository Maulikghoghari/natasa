import React from 'react'
import HomeCarosel from './HomeCarosel'
import Banner from './Banner'
import About from './About'
import Card1 from './Card'
import ClientsSay from './ClientsSay'
import Blog from './Blog'
import News from './News'
import CardHorizantal from './CardHorizantal'
import BackToTop from './BackToTop'
import MouseCurser from './MouseCurser'

function Home() {
  return (
    <>
      <HomeCarosel/>
      <Banner/>
      <About/>
      <Card1/>
      <ClientsSay/>
      <Blog/>
      <News/>
      <CardHorizantal/>
      <BackToTop/>
      <MouseCurser/>
    </>
  )
}

export default Home