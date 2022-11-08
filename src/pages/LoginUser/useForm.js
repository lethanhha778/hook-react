// tạo useForm tách chức năng ra khỏi hàm render jsx
// tách login ra riêng, UI riêng

import { useFormik } from 'formik';

import { GP_ID } from '../../util/setting';
import { dangNhapAction } from '../../redux/action/qLNDAction';
import { useDispatch } from 'react-redux';


export const useForm =()=> {
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
    return{
        formik,

    }
}