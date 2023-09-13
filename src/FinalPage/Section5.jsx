import React from 'react'
import data from "../Datapart/Data"
import { useDispatch } from 'react-redux'
function Section5data({id, tag,product, title, details, image, rating, sponser, food, price, del, pic})
{
    const dispatch=useDispatch()
    return(
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

                                    <h5>{price}<del>{del}</del></h5>
                                    <a class="add" href="javascript:void(0);"  onClick={()=>{dispatch({type:'AddToCart',payload:data.Section5data[id-1]})}}><img src={pic}/>Add to cart</a>
                                </div>
                            </div>
                        </div>
        </>
    )
}

function Section5() {
    return (
        <>
            <section id="dailysales">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Daily Best Sales</h2>
                        <ul class="d-flex gap-3 align-items-center mt-4">
                            <li><a href="javascript:void(0);">Featured</a></li>
                            <li><a href="javascript:void(0);">Popular</a></li>
                            <li><a href="javascript:void(0);">New Added</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="dailysalesinr">
                                <h3>Bring nature into your home</h3>
                                <a href="javascript:void(0);">Shop Now</a>
                            </div>
                        </div>
                            {
                                data.Section5data.map((v,i)=>{
                                    return (<Section5data {...v} key={i}/>)
                                })
                            }


                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5
