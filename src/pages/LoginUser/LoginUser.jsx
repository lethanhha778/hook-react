import React from 'react'
import { useFormik } from 'formik';

import { GP_ID } from '../../util/setting';
import { dangNhapAction } from '../../redux/action/qLNDAction';
import { useDispatch } from 'react-redux';

export default function LoginUser() {
    let dispatch = useDispatch()
    const formik = useFormik({
        // giá trị khởi tạo( data cần lưu)
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
    
        onSubmit: values => {
            console.log(values)
            // gọi dispatch đưa dữ liệu cho dangKyAction
            let acction = dangNhapAction(values)
            // // giúp gọi hàm call API
            dispatch(acction)
        },
    });
    return (
        <div className='loginForm w-25'>
            <form className="py-5" onSubmit={formik.handleSubmit} >
                <div className="form-group">
                    <input type="text" className="form-control" name='taiKhoan' placeholder="Enter Username"
                     onChange={formik.handleChange}  />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name='matKhau' placeholder="Enter Pass" 
                     onChange={formik.handleChange} />
                </div>
                <button className='btn btn-success'>Login</button>
            </form>
        </div>
    )
}
