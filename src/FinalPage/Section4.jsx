import React from 'react'
import data from "../Datapart/Data"
import { useDispatch, useSelector } from 'react-redux';

function Section4data({ id, tag, product, title, details, image, rating, sponser, food, price, del, pic, add, key }) {
    // const abc=useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
    // console.log(abc)
    return (
        <>
            <div class="col">
                <div class="prdtbx">
                    <div class="prdtbxnr">
                        <div class="tag">{tag}</div>
                        <img src={product} />
                        <span>{title}</span>
                        <a href="javascript:void(0);"><h4>{details}</h4></a>
                        <ul class="d-flex star">
                            <li><img src={image} /></li>
                            <li><img src={image} /></li>
                            <li><img src={image} /></li>
                            <li><img src={image} /></li>
                            <li><img src={image} /></li>
                            <li><span>{rating}</span></li>
                        </ul>
                        <h6> {sponser}<span class="food">{food}</span></h6>
                        <div class="d-flex justify-content-between">
                            <h5>{price}<del>{del}</del></h5>
                            <a class="add" href="javascript:void(0);" onClick={() => { dispatch({ type: 'AddToCart', payload: data.Section4data[id - 1] }) }}><img src={pic} />{add}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function Section4() {
    return (
        <>
            <section id="popularprdt">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Popular Products</h2>
                        <ul class="d-flex gap-3 align-items-center mt-4">
                            <li><a href="javascript:void(0);">All</a></li>
                            <li><a href="javascript:void(0);">Milk & Dairies</a></li>
                            <li><a href="javascript:void(0);">Coffee & Tea</a></li>
                            <li><a href="javascript:void(0);">Pet Foods</a></li>
                            <li><a href="javascript:void(0);">Meats</a></li>
                            <li><a href="javascript:void(0);">Vegatables</a></li>
                            <li><a href="javascript:void(0);">Fruits</a></li>
                        </ul>
                    </div>
                </div>

                <div className='row row-cols-5'>
                    {
                        data.Section4data.map((v, i) => {
                            return <Section4data {...v} key={i} />
                        })}
                </div>
            </section>
        </>)
}

export default Section4
