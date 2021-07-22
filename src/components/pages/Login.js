import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css'
import '../../style.sass'

export default function login() {
    return (
    <div className="container">
        <section id="formHolder">

            <div className="row">
                <div className="col-sm-6 brand">
                <span href="#" className="logo">RI <span>.</span></span>

                <div className="heading">
                    <h2>Rabvik</h2>
                    <p>Your Right Choice</p>
                </div>

                <div className="success-msg">
                    <p>Great! You are one of our members now</p>
                    <span href="#" className="profile">Your Profile</span>
                </div>
                </div>

                <div className="col-sm-6 form">

                    <div className="signup form-peice">
                    <form className="signup-form" action="#" method="post">
                        <div className="form-group">
                            <label for="loginemail">Email Adderss</label>
                            <input type="email" name="loginemail" id="loginemail" required/>
                        </div>

                        <div className="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" name="loginPassword" id="loginPassword" required/>
                        </div>

                        <div className="CTA">
                            <input type="submit" value="Login"/>
                            <Link to='/sign-up' className='switch'>
                                I'm new
                            </Link>
                        </div>
                    </form>
                    </div>

                    {/* <div className="signup form-peice">
                    <form className="signup-form" action="#" method="post">

                        <div className="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" name="username" id="name" className="name"/>
                            <span className="error"></span>
                        </div>

                        <div className="form-group">
                            <label for="email">Email Adderss</label>
                            <input type="email" name="emailAdress" id="email" className="email"/>
                            <span className="error"></span>
                        </div>

                        <div className="form-group">
                            <label for="phone">Phone Number - <small>Optional</small></label>
                            <input type="text" name="phone" id="phone"/>
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" className="pass"/>
                            <span className="error"></span>
                        </div>

                        <div className="form-group">
                            <label for="passwordCon">Confirm Password</label>
                            <input type="password" name="passwordCon" id="passwordCon" className="passConfirm"/>
                            <span className="error"></span>
                        </div>

                        <div className="CTA">
                            <input className="sub" type="submit" value="Signup Now" id="submit"/>
                            {/* <span href="#" className="switch">I have an account</span> */}
                            {/* <Link to='' className='switch'>
                                I have an account
                            </Link>
                        </div>
                    </form>
                    </div> */} 
                </div>
            </div>
        </section>
    </div>
    )
};