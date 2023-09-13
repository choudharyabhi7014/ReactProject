import React from 'react'
import {  Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
    return (
        <>
            <header>
                <div id="headertop">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="logo">
                                <a href="javascript:void(0);"><img src="images/logo.svg" alt="logo" /></a>
                            </div>
                            <ul class="d-flex gap-2">
                                <li><a href="javascript:void(0);"><span class="icons"><img src="images/icon-compare.svg" /></span><span class="no">3</span><span>Compare</span></a></li>
                                <li><a href="javascript:void(0);"><span class="icons"><img src="images/icon-heart.svg" /></span><span class="no">6</span><span>Wishlist</span></a></li>
                                <li><a href="javascript:void(0);"><span class="icons"><img src="images/icon-cart.svg" /></span><span class="no"></span><span onClick={()=> navigate('/cart')}>Cart</span></a></li>
                                <li><a onClick={()=> navigate('/account')}><span class="icons"><img src="images/icon-user.svg" /></span><span>Account</span></a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div id="headerbottom">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-between border mt-4 p-3 align-items-center">
                            <div class="category">
                                <a class="grid" href="javascript:void(0);"><i class="fa-solid fa-border-all"></i> Browse all categories</a>
                            </div>


                            <ul class="d-flex gap-5 align-items-center">
                                <li><a href="javascript:void(0);"><img src="images/icon-hot.svg" />Deals</a></li>
                                <li><a onClick={()=> navigate('/')} >Home</a></li>
                                <li><a onClick={()=> navigate('/about')} >About</a></li>
                                <li><a onClick={()=> navigate('/shop')}>Shop</a></li>
                                <li><a onClick={()=> navigate('/page')}>Vendors</a></li>
                                <li><a onClick={()=> navigate('/page')}>Mega menu</a></li>
                                <li><a onClick={()=> navigate('/page')}>Blog</a></li>
                                <li><a onClick={()=> navigate('/page')}>Pages</a></li>
                                <li><a onClick={()=> navigate('/contact')} >Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
