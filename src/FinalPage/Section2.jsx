import React from 'react'

const data = [
    {
        id: 1,
        pic: "images/cat-13.png",
        title: "Cake & Milk",
        items: "26 items"
    },
    {
        id: 2,
        pic: "images/cat-12.png",
        title: "Organic Kiwi",
        items: "28 items"
    },
    {
        id: 3,
        pic: "images/cat-11.png",
        title: "Peach",
        items: "14 items"
    },
    {
        id: 4,
        pic: "images/cat-9.png",
        title: "Red Apple",
        items: "54 items"
    },
    {
        id: 5,
        pic: "images/cat-3.png",
        title: "Snack",
        items: "56 items"
    },
    {
        id: 6,
        pic: "images/cat-1.png",
        title: "Coffee & Tea",
        items: "89 items"
    },
    {
        id: 7,
        pic: "images/cat-2.png",
        title: "Vagitables",
        items: "72 items"
    },
    {
        id: 8,
        pic: "images/cat-4.png",
        title: "Strawberry",
        items: "36 items"
    },
    {
        id: 9,
        pic: "images/cat-5.png",
        title: "Black Plum",
        items: "123 items"
    },
    {
        id: 10,
        pic: "images/cat-14.png",
        title: "Custard Apple",
        items: "14 items"
    },

]

function Section2data({ id, pic, title, items }) {
    return (
        <>
            <div class="col">
                <a href="javascript:void(0);"><div class="featuredinr">
                    <div class="imginr"><img src={pic} />
                        <h6>{title}<span>{items}</span></h6></div></div></a>
            </div>

        </>
    )
}

function Section2() {
    return (
        <>
            <section id="featuredcat">
                <div class="container-fluid">
                    <div class="d-flex">
                        <h2>Featured Categories</h2>
                        <ul class="d-flex gap-3 mt-3">
                            <li><a href="javascript:void(0);">Cake & Milk</a></li>
                            <li><a href="javascript:void(0);">Coffee & Teas</a></li>
                            <li><a href="javascript:void(0);">Pet Foods</a></li>
                            <li><a href="javascript:void(0);">Vagitables</a></li>
                        </ul>
                    </div>

                    <div className='row'>   {
                        data.map((v, i) => {
                            return (
                                <Section2data {...v} key={i} />
                            )
                        })
                    }</div>
                </div>
            </section>
        </>
    )
}

export default Section2
