import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/photos/add')
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.error.errors)
            })
    }


    return (
        <div>
            <form className='col-4 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.firstName} name='firstName' />
                    {
                        errors.firstName ?
                            <p className='text-danger'>{errors.firstName.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.lastName} name='lastName' />
                    {
                        errors.firstName ?
                            <p className='text-danger'>{errors.lastName.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Email: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.email} name='email' />
                    {
                        errors.email ?
                            <p className='text-danger'>{errors.email.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.password} name='password' />
                    {
                        errors.password ?
                            <p className='text-danger'>{errors.password.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Confirm Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' />
                    {
                        errors.confirmPassword ?
                            <p className='text-danger'>{errors.confirmPassword.message}</p> :
                            null
                    }
                </div>
                <button>Register</button>
            </form>
            <Link to={'/login'}>Already have an account?</Link>
        </div>
    )
}

export default Register;