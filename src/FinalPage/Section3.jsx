import React from 'react'


const data = [
    {
        id: 1,
        pic: "images/banner-1.png",
        title: "Everyday Fresh & Clean with our products",
        shop: "Shop Now"
    },
    {
        id: 2,
        pic: "images/banner-2.png",
        title: "Make your Breakfast Healthy and Easy",
        shop: "Shop Now"
    },
    {
        id: 3,
        pic: "images/banner-3.png",
        title: "The best organic products online",
        shop: "Shop Now"
    },
]

function Section3data({ id, pic, title, shop }) {
    return (
        <div class="col">
            <div class="foodcatinr">
                <img src={pic} />
                <div class="aboutprdt">
                    <h3>{title}</h3>
                    <div class="shop">
                        <a href="javascript:void(0);">{shop}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Section3() {
    return (

        <section id="foodcat">
            <div class="container-fluid">
                <div className='row'>
                    {
                        data.map((v, i) => {
                            return (<Section3data {...v} key={i} />)
                        })}
                </div>
            </div>
        </section>
    )
}

export default Section3
