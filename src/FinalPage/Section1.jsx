import React from 'react'

function Section1() {
  return (
    <>

      <section id="slider">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-between bg-warning-subtle">
            <div class="cntntlft">
              <h1>Don't miss amazing grocery deals</h1>
              <h3>Sign up for the daily newsletter</h3>
              <form>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email address" />
                <button type="button">subscribe</button>
              </form>
            </div>
            <div class="imgrgt"><img src="images/freshapple1.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1
