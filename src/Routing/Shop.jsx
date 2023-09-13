import React from 'react'
import data from '../Datapart/Data'
import Header from '../FinalPage/Header'
import { useDispatch } from 'react-redux'
function Shopdata({ id, tag, product, title, details, image, rating, sponser, food, price, del, pic, add }) {
    const dispatch = useDispatch()
    return (
        <>
            <div class="col-3">
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
                            <a class="add" href="javascript:void(0);" onClick={() => { dispatch({ type: 'AddToCart', payload: data.Shopdata[id - 1] }) }}><img src={pic} />{add}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Shop() {
    return (
        <>
            <Header />
            <section id="fillbyprice">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>We found 29 items for you!</h5>
                        <ul class="d-flex gap-3 align-items-center mt-4 shoe">
                            <li><a href="javascript:void(0);"><img src="images/grid.png" />Show:50</a></li>
                            <li><a href="javascript:void(0);"><img class="ftrd" src="images/grid1.png" />Short by:Featured</a></li>
                        </ul>
                    </div>

                    <div class="row mt-3">
                        <div class="col-3">
                            <div class="dailysalesinr">
                                <h3>Fill by price</h3>
                                <h5>Color</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Red(56)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        green(78)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        blue(54)
                                    </label>
                                </div>
                                <h5>Item Condition</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        New(1506)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Refurbished(27)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Refurbished(27)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Used(45)
                                    </label>
                                </div>
                                <a href="javascript:void(0);"><i class="fa-solid fa-filter"></i>Filter</a>
                            </div>

                            <div class="dlysaleinr dlysaleinr1">
                                <h3>New Products</h3>
                                <div class="new">
                                    <div class="newin">
                                        <ul class="d-flex">
                                            <li><img src="images/thumbnail-3.jpg" /></li>
                                            <li><h4>chen cardigan</h4>
                                                <h5>$28.85</h5>
                                                <ul class="d-flex star">
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                </ul>

                                            </li>
                                        </ul>
                                    </div>





                                    <div class="newin">
                                        <ul class="d-flex">
                                            <li><img src="images/thumbnail-4.jpg" alt="thumbnail" /></li>
                                            <li><h4>chen sweater</h4>
                                                <h5>$28.85</h5>
                                                <ul class="d-flex star">
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                </ul>

                                            </li>
                                        </ul>
                                    </div>


                                    <div class="newin">
                                        <ul class="d-flex">
                                            <li><img src="images/thumbnail-5.jpg" alt="thumbnail" /></li>
                                            <li><h4>colorful jacket</h4>
                                                <h5>$28.85</h5>
                                                <ul class="d-flex star">
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                    <li><img src="images/star.png" /></li>
                                                </ul>

                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="juice">
                                    <h5>Organic</h5>
                                    <h3>Save 17% on organic juice</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="row">
                                {
                                    data.Shopdata.map((v, i) => {
                                        return (<Shopdata {...v} key={i} />)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop
