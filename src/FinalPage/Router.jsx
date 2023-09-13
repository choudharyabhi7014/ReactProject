import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Routing/About'
import Home from '../Routing/Home'
import Contact from '../Routing/Contact'
import Page from '../Routing/Page'
import Login from '../Routing/Login'
import Shop from '../Routing/Shop'
import Section4 from './Cart'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='page' element={<Page/>}/>
            <Route path='account' element={<Login/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='cart' element={<Section4/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
