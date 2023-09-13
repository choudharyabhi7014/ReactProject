import React from 'react'
import Header from '../FinalPage/Header'

function Contact() {
    return (
        <>
            <Header/>
            <section id="contactform">
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <div class="row">
                                <h4>Contact Form</h4>
                                <h3>Drop Us a Line</h3>
                                <span>Your eail address will  not be published.Required fields are marked*</span>

                                <div class="col-6">
                                    <div class="form-floating mb-3">
                                        <input type="name" class="form-control" id="floatingInput" placeholder="First Name" />
                                        <label for="floatingInput">first name</label>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="Your email" />
                                        <label for="floatingInput">Your email</label>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-floating mb-3">
                                        <input type="phone" class="form-control" id="floatingInput" placeholder="Your Phone" />
                                        <label for="floatingInput">Your Phone</label>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-floating mb-3">
                                        <input type="subject" class="form-control" id="floatingInput" placeholder="Your subject" />
                                        <label for="floatingInput">Your subject</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="floatingInput" placeholder="message" rows="7"></textarea>
                                        <label for="floatingInput">message</label>
                                        <button type="button" class="btn btn-primary btn-lg mt-4">Send message</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4">
                            <img src="images/lpwmn1.jpg" />

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact
