import React from 'react'
import { useFormik } from 'formik';

import { GP_ID } from '../../util/setting';
import { dangNhapAction } from '../../redux/action/qLNDAction';
import { useDispatch } from 'react-redux';
import { useForm } from './useForm';



export default function LoginUser() {
    const { formik } = useForm()
    const { handleChange, handleSubmit } = formik
    return (
        <div className='loginForm w-25 px-5'>
            <form className="py-5" onSubmit={handleSubmit} >
                <div className="form-group">
                    <input type="text" className="form-control" name='taiKhoan' placeholder="Enter Username"
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name='matKhau' placeholder="Enter Pass"
                        onChange={handleChange} />
                </div>
                <button className='btn btn-success'>Login</button>
            </form>
        </div>
    )
}
