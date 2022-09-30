import React from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css"
// import { MdAccountBox } from 'react-icons/md';

const Signup = () => {
  return (
    <>
     <section className='signup'>
            <div className='container'>
            <h2 className='form-title'>Create an account for J.CREW</h2>

                    <div className='signup-content'>
                        <div className='signup-form'>
                            <form className='register-form' id='register-form'>
                                    <div className='form-group'>
                                        <label htmlFor="name">
                                            Full name
                                        </label>
                                        <br />
                                        <input type="text" name="name" id='name' autoComplete='off' placeholder='Enter Your Name'/>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="email">
                                           Email
                                        </label>
                                        <br />
                                        <input type="email" name="email" id='email' autoComplete='off' placeholder='Enter Your Email'/>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <br />
                                        <input type="number" name="phone" id='phone' autoComplete='off' placeholder='Enter Your Phone Number'/>
                                    </div>

                                   < div className='form-group'>
                                    <label htmlFor='country'>Country :</label>
                                    <br />
                             <select name="country" className='country'>
                                <option value="india">INDIA</option>
                             <option value="china">CHINA</option>
                             <option value="usa">USA</option>
                             <option value="canada">CANADA</option>
                         </select>
                                </div>
                                    <div className='form-group'>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <br />
                                        <input type="password" name="password" id='password' autoComplete='off' placeholder='Enter Your Password'/>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="cpassword">
                                            Confirm Password
                                        </label>
                                        <br />
                                        <input type="password" name="cpassword" id='cpassword' autoComplete='off' placeholder='Enter Confirm Password'/>
                                    </div>

                                    <div className='form-group form-button' >
                                        <input type="submit" name="signup" id="signup" className='form-submit' value="Register"/>
                                    </div>
                            </form>
                            </div>
                            <div className='signup-image'>
                                 <figure className='image'>
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png" alt=""  />
                            <NavLink to="/signin" className="signup-page-link">Already Registered?</NavLink>

                                 </figure>
                            </div>

                    </div>
            </div>
     </section>
    </>
  )
}
export default Signup;