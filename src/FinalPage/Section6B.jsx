import React from 'react'
import adata from './Section6data'
function Section6Adata({ id, image, details, pic, rating, price, del }) {
    return (
        <>

            <div class="topinr">
                <img src={image} width='50px' />
            </div>
            <div class="abouttop">
                <a href="javascript:void(0);"><h4>{details}</h4></a>
                <ul class="d-flex star">
                    <li><img src={pic} /></li>
                    <li><img src={pic} /></li>
                    <li><img src={pic} /></li>
                    <li><img src={pic} /></li>
                    <li><img src={pic} /></li>
                    <li><span>{rating}</span></li>
                </ul>
                <h5>{price}<del>{del}</del></h5>
            </div>

        </>
    )
}
function Section6B() {
    return (
        <>

            <section id="top">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap">
                        <h3>Recently Added</h3>
                        {
                            adata.map((v, i) => {
                                return (<Section6Adata {...v} key={i} />)
                            })}
                    </div>
                </div>


            </section>
        </>
    )
}

export default Section6B
