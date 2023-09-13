import React from 'react'
import Header from '../FinalPage/Header'
import Section1 from '../FinalPage/Section1'
import Section2 from '../FinalPage/Section2'
import Section3 from '../FinalPage/Section3'
import Section4 from '../FinalPage/Section4'
import Section5 from '../FinalPage/Section5'
import Section6 from '../FinalPage/Section6'
import Section6A from '../FinalPage/Section6A'
import Section6B from '../FinalPage/Section6B'
import Section6C from '../FinalPage/Section6C'
import Section7 from '../FinalPage/Section7'
import Section8 from '../FinalPage/Section8'
import Footer from '../FinalPage/Footer'

function Home() {
  return (
    <>
         <Header/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
         <div style={{display:'flex'}}>
          <div style={{flexGrow:1}}> <Section6/></div>
          <div style={{flexGrow:1}}> <Section6A/></div>
          <div style={{flexGrow:1}}><Section6B/></div>
          <div style={{flexGrow:1}}><Section6C/></div>
         </div> 
          <Section7/>
          <Section8/>
          <Footer/>
    </>
  )
}

export default Home
