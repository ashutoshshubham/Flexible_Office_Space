import { Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../../context/UserProvider'

const Login = () => {

    const navigate = useNavigate()

    const {loggedIn, setLoggedIn} = useUserContext();


    const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
        console.log(formdata);

        setSubmitting(true);

        const res = await fetch('http://localhost:5000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status)

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login Successful'
            })
            setLoggedIn(true)       //to show logout button without page refresh
            const data = await res.json();
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/main/browseSpace')
            resetForm();
        }
        else if (res.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email or Password is incorrect'
            })
        }
        else {
            Swal.fire({
                iicon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }

        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
    }





    return (
        <div className='login-bg-image vh-100'>


            <div className="login-card-position">
                <div className="card mx-auto w-50">
                    <div className="card-body">
                        <h1 className="card-title text-center">USER LOGIN</h1>


                        <Formik
                            initialValues={{ email: "", password: "" }}
                            onSubmit={loginSubmit}>
                            {({ values, handleSubmit, handleChange, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <label>Email Address</label>
                                    <input required type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

                                    <label>Password</label>
                                    <input required type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

                                    <Link to="/forgetpswd" className="">
                                        Forgot Password
                                    </Link>

                                    <button type="submit" className="btn btn-success w-100 my-2">
                                        {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                                    </button>
                                </form>

                                
                            )}
                        </Formik>
                        <p className='text-center mt-2'>Don't have account? <Link to='/main/signup'>SignIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login