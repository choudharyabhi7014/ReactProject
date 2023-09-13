import React from 'react'
import data from './Section8data'
function Section8data({id,pic,detail,service})
{
    return(
        <>
             <div class="col">
                            <div class="iconsinr">
                                <ul class="d-flex gap-4">
                                    <li><img src={pic} alt="icon" /></li>
                                    <li>{detail}<span>{service}</span></li>
                                </ul>
                            </div>
                        </div>
        </>
    )
}
function Section8() {
    return (
        <>

            <section id="iconss">
                <div class="container-fluid">
                    <div class="row">
                       {
                        data.map((v,i)=>{
                            return (<Section8data {...v} key={i}/>)
                        })
                       }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Section8
