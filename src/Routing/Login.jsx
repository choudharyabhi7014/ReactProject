import React, { useState } from 'react'
import Header from '../FinalPage/Header'
import Loginpart from './Loginpart';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router';
import {  login,logout } from '../logicpart/Action';

function Login() {
    const [value, setvalue] = useState('');

    const dispatch = useDispatch()
    const access = useSelector(state => state.Loginlogout.access)
    const navigate = useNavigate()
    function handlesubmit(e) {
        e.preventDefault();

        dispatch(login())
        console.log(access)
        navigate('/')

    }
    function handleclick()
    {
        dispatch(logout())
        // navigate('/')
        
    }

    return (
        <>
            <Header />
            <section id="login">
                <div class="container">
                    <div class="row">
                        <div class="col-5">
                            <img src="images/lapwmn.jpg" alt='img' />
                        </div>
                        <div class="col-7" >
                            <form onSubmit={handlesubmit}>
                                <h3>Login</h3>
                                <h6>Don't have account?<a href="#!">create here</a></h6>
                                <div class="form-floating mb-3 mt-4">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Your email" name='gmail' />
                                    <label for="floatingInput">Your email</label>
                                </div>
                                <div class="form-floating mb-3 mt-4">
                                    <input id="password-field" type="password" class="form-control" name="password" value={value} onChange={(e) => setvalue(e.target.value)} placeholder="password" />
                                    <label for="password-field">Your password</label>
                                </div>
                                <ul class="d-flex justify-content-between">
                                    <li><div class="form-check ps-0">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            remember me
                                        </label>
                                    </div></li>
                                    <li><a href="#!">Forgot password?</a></li>
                                </ul>
                                <button class="btn btn-lg mt-3" >Log in </button>
                                <button type='button' class="btn btn-lg mt-3" onClick={handleclick}>Log out </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            {/* <Loginpart /> */}
        </>
    )
}

export default Login
