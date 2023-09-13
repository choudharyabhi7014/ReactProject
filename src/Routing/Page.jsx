import React from 'react'
import Header from '../FinalPage/Header'

function Page() {
    return (
        <>
        <Header/>
            <section id="pagenotfound">
                <div class="found">
                    <img src="images/mouse.png" />
                    <h2> Page not found</h2>
                    <p>The link you clicked may be broken or the page may have been removed.visit the <span>Homepage</span>or <span>Contact us</span>about the problem.</p>
                </div>
            </section>
        </>
    )
}

export default Page
