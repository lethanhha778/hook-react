import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GP_ID } from '../../util/setting';
import { dangKyAction } from '../../redux/action/qLNDAction';
import { useDispatch } from 'react-redux'

export default function Register() {
    let dispatch = useDispatch()
    const formik = useFormik({
        // giá trị khởi tạo( data cần lưu)
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maNhom: GP_ID
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Ko đc để trống"),
            matKhau: Yup.string().required("MK ko để trống").max(6, 'Must be 20 characters or less'),
            email: Yup.string().required('Email ko để trống').email("email chưa đúng định dạng"),
            hoTen: Yup.string().required('Tên ko trống').matches(/^[A-Z a-z]+$/, 'Chưa Đúng định dạng')
        }),
        onSubmit: values => {
            console.log(values)

            // gọi dispatch đưa dữ liệu cho dangKyAction
            let acction = dangKyAction(values)
            // giúp gọi hàm call API
            dispatch(acction)
        },
    });

    return (
        <div className='py-5'>
            <h2>Đăng ký</h2>
            <form onSubmit={formik.handleSubmit} >
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        name='taiKhoan'
                        aria-describedby="helpId"
                        placeholder='Tài khỏan'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.taiKhoan}
                    />
                    {/* thông báo lỗi */}
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                        <div className='text-danger'>{formik.errors.taiKhoan}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"
                        name='matKhau' aria-describedby="helpId"
                        placeholder='Mật Khẩu'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.matKhau}
                    />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className='text-danger'>{formik.errors.matKhau}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name='hoTen' aria-describedby="helpId"
                        placeholder='Họ tên'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.hoTen}
                    />
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className='text-danger'>{formik.errors.hoTen}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name='email' aria-describedby="helpId"
                        placeholder='Email'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-danger'>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name='soDt' aria-describedby="helpId"
                        placeholder='Số ĐT'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.soDt}
                    />
                </div>
                <button type="submit" className='btn btn-danger'>Đăng ký</button>
            </form>
        </div>
    )
}
