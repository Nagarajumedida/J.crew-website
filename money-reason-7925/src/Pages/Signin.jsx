import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./signin.css";

let initial = {
  email: "",
  password: ""
};

 const Signin = () => {

  let array = JSON.parse(localStorage.getItem("logindata"));
  const [shot, setShot] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setShot({ ...shot, [name]: value });
  };
  let loginSubmit = (event) => {
    event.preventDefault();
    if (array.email === shot.email && array.password === shot.password) {
      alert("LOGIN-SUCCESSFULL");
    } else if (array.email !== shot.email) {
      alert("PlEASE Check email");
    } else if (array.password !== shot.password) {
      alert("PLEASE CHECK YOUR PASSWORD");
    } else {
      alert("No Credentials Found");
    }
  };

  return (
     <>
       <section className='signinform'>
            <div className='container'>
            <h2 className='title'>Account Login</h2>

                    <div className='content'>
                        <div className='signin-form'>
                            <form className='form' onSubmit={loginSubmit} >
                                    <div className='group'>
                                        <label htmlFor="name">
                                            Full name
                                        </label>
                                        <br />
                                        <input type="text" 
                                        name="name" id='name' 
                                        autoComplete='off' 
                                        placeholder='Enter Your Name'
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className='group'>
                                        <label htmlFor="email">
                                           Email
                                        </label>
                                        <br />
                                        <input type="email" 
                                        name="email" 
                                        id='email' 
                                        autoComplete='off' 
                                        placeholder='Enter Your Email'
                                        value={shot.email}
                                        onChange={handleChange}
                                        />
                                    </div>
                            
                                    <div className='group'>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <br />
                                        <input type="password" 
                                        name="password" 
                                        id='password' 
                                        autoComplete='off' 
                                        placeholder='Enter Your Password'
                                        value={shot.password}
                                        onChange={handleChange}
                                        />
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