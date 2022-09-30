import React from 'react'
import { NavLink } from 'react-router-dom';
import "./signin.css"

 const Signin = () => {
  return (
     <>
       <section className='signinform'>
            <div className='container'>
            <h2 className='title'>Account Login</h2>

                    <div className='content'>
                        <div className='signin-form'>
                            <form className='form' >
                                    <div className='group'>
                                        <label htmlFor="name">
                                            Full name
                                        </label>
                                        <br />
                                        <input type="text" name="name" id='name' autoComplete='off' placeholder='Enter Your Name'/>
                                    </div>

                                    <div className='group'>
                                        <label htmlFor="email">
                                           Email
                                        </label>
                                        <br />
                                        <input type="email" name="email" id='email' autoComplete='off' placeholder='Enter Your Email'/>
                                    </div>
                            
                                    <div className='group'>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <br />
                                        <input type="password" name="password" id='password' autoComplete='off' placeholder='Enter Your Password'/>
                                    </div>

                                    <div className='group form-button' >
                                        <input type="submit" name="signup" id="signup" className='form-submit' value="Login"/>
                                    </div>
                            </form>
                            </div>
                            <div className='signin-image'>
                                 <figure className='image101'>
                                    <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt=""  />
                            <NavLink to="/signup" className="signin-page-link">Create an account</NavLink>

                                 </figure>
                            </div>

                    </div>
            </div>
     </section>
     </>
  )
}
export default Signin