import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <>

            <footer>
                <div class="container-fluid">

                    <div class="row">
                        <div class="col">
                            <div class="ftrinr">
                                <div class="logo"><a href="javascript:void(0);"><img src="images/logo.svg" alt="logo" /></a></div>
                                <p>Awesome grocery story website template</p>
                                <ul class="end">
                                    <li>
                                        <img src="images/icon-location.svg" alt="location" /><span><b>Address:</b> <a href="javascript:void(0);" />5171 W capmbell ave undefined kent, utah 53127 united states</span></li>
                                    <li><img src="images/icon-contact.svg" alt="contact" /><b>Call us:</b><a href="tel:+91-540-025-12553">(+91)-540-025-12553</a></li>
                                    <li><img src="images/icon-email-2.svg" alt="email" /><b>Email:</b><a href="email:sale@nest.com">sale@nest.com</a></li>
                                    <li><img src="images/icon-clock.svg" alt="clock" /><span><b>Hours:</b>10:00-18:00,mon-sat</span></li>
                                </ul>
                            </div>

                        </div>
                        <div class="col">
                            <h3>Company</h3>
                            <ul>

                                <li> <a href="javascript:void(0);">About us</a></li>
                                <li><a href="javascript:void(0);">delivery information</a></li>
                                <li><a href="javascript:void(0);">Privacy policy</a></li>
                                <li><a href="javascript:void(0);">Terms & conditions</a></li>
                                <li><a href="javascript:void(0);">Contact us</a></li>
                                <li><a href="javascript:void(0);">Support center</a></li>
                                <li><a href="javascript:void(0);">Careers</a></li>
                            </ul>
                        </div>

                        <div class="col">
                            <h3>Account</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Sign in</a></li>
                                <li><a href="javascript:void(0);">View cart</a></li>
                                <li><a href="javascript:void(0);">My wishlist</a></li>
                                <li><a href="javascript:void(0);">Track my order</a></li>
                                <li><a href="javascript:void(0);">Help ticket</a></li>
                                <li><a href="javascript:void(0);">Shipping details</a></li>
                                <li><a href="javascript:void(0);">Compare products</a></li>

                            </ul>
                        </div>

                        <div class="col">
                            <h3>Corprate</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Become a vendor</a></li>
                                <li><a href="javascript:void(0);">Affeliate program</a></li>
                                <li><a href="javascript:void(0);">Farm business</a></li>
                                <li><a href="javascript:void(0);">Farms careers</a></li>
                                <li><a href="javascript:void(0);">Our suppliers</a></li>
                                <li><a href="javascript:void(0);">Accessblity</a></li>
                                <li><a href="javascript:void(0);">Promotions</a></li>
                            </ul>
                        </div>

                        <div class="col">
                            <h3>Popular</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Milk & flavoured milk</a></li>
                                <li><a href="javascript:void(0);">Butter & margarine</a></li>
                                <li><a href="javascript:void(0);">Eggs substitutes</a></li>
                                <li><a href="javascript:void(0);">Marmalades</a></li>
                                <li><a href="javascript:void(0);">Sour cream & dips</a></li>
                                <li><a href="javascript:void(0);">Tea & kombucha</a></li>
                                <li><a href="javascript:void(0);">Cheese</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="ftrbtm">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    &#169;2022<span class="nst">Nest-</span>HTML ecommerce Template<br /> All rights reserved
                                </div>
                                <div class="col">
                                    <ul class="d-flex gap-4 justify-content-center">
                                        <li>
                                            <a class="call" href="tel:1900-666;"><img class="phone" src="images/phone-call.png" alt="call" />1900-666</a>
                                            <span class="working">working 8:00-22:00</span></li>
                                        <li>
                                            <a class="call" href="tel:1900-666;"><img class="phone" src="images/phone-call.png" alt="call" />1900-666</a>
                                            <span class="working">working 8:00-22:00</span></li>
                                    </ul>
                                </div>

                                <div class="col">
                                    <div class="d-flex justify-content-end">
                                        <h6>Follow us</h6>

                                        <a class="" href="https://www.facebook.com"><FacebookIcon/></a>
                                        <a class="" href="https://twitter.com"><TwitterIcon/></a>
                                        <a class="" href="https://www.instagram.com"><InstagramIcon/></a>
                                        <a class="" href="https://in.pinterest.com
                                        "><PinterestIcon/></a>
                                        <a class="" href="http://in.youtube.com"><YouTubeIcon/></a>
                                    </div>
                                    <p class="discount">up to 15% discount on your first subscribe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
