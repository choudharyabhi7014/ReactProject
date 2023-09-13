import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSearch from './Search'


function Section4data({ id, tag, product, title, details, image, rating, sponser, food, price, del, pic, add }) {
  const  dispatch=useDispatch()
    return (
        <>

            <div class="col">
                <div class="prdtbx">
                    <div class="prdtbxnr">
                        <div class="tag">{tag}</div>
                        <img src={product} alt='img'/>
                        <span>{title}</span>
                        <a href="#!"><h4>{details}</h4></a>
                        <ul class="d-flex star">
                            <li><img src={image} alt='img'/></li>
                            <li><img src={image} alt='img'/></li>
                            <li><img src={image} alt='img'/></li>
                            <li><img src={image} alt='img'/></li>
                            <li><img src={image} alt='img'/></li>
                            <li><span>{rating}</span></li>
                        </ul>
                        <h6> {sponser}<span class="food">{food}</span></h6>
                        <div class="d-flex justify-content-between">
                            <h5>{price}<del>{del}</del></h5>
                            <a class="add" href="#!"><img src={pic} alt='img'/>{add}</a>
                            <a class="add" href="#!"  onClick={()=>{dispatch({type:'RemoveFromCart',payload:id})}}><img src={pic} />Del</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function Section4() {
    const data = useSelector((state) => state.cartReducer)
    console.log(data)

    return (
        <>
            <section id="popularprdt">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Popular Products</h2>
                        <ul class="d-flex gap-3 align-items-center mt-4">
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">Milk & Dairies</a></li>
                            <li><a href="#!">Coffee & Tea</a></li>
                            <li><a href="#!">Pet Foods</a></li>
                            <li><a href="#!">Meats</a></li>
                            <li><a href="#!">Vegatables</a></li>
                            <li><a href="#!">Fruits</a></li>
                        </ul>
                    </div>
                </div>

                <div className='row row-cols-5'>
                    {
                                data.map((v, i) => {
                            return <Section4data {...v} key={i} />
                        })    
                    }
                </div>
            </section>
            <ProductSearch/>
        </>)
}

export default Section4
