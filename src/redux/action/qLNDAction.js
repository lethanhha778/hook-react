import axios from "axios"
import { ACCESS_TOKEN, TOKEN, URL_API, USER_LOGIN } from "../../util/setting"

import { history } from "../../App"
import { LOGIN } from "../types/qLNDType"

// action loại 2: function
// cần truyền tham số => trả về 1 hàm chưa được gọi
// dispatch cần truyền vào hàm chưa gọi


export const dangKyAction = (userInfo) => {
    // dispatch2: hàm thư viện thunk hổ trợ để đưa data từ API lên redux
    return (dispatch2) => {
        // xỷ lý call APi đăng ký
        // input: userInfo (dữ liệu người dùng)=> dữ liệu cần truyền từ UI form
        let promise = axios({
            method: 'post',
            url: `${URL_API}/QuanLyNguoiDung/DangKy`,
            data: userInfo,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            console.log(result.data);
            // nếu cần đưa data từ api lên redux thì gọi dispatch 2

            //? nếu thành công thì thông báo và chuyển hướng trang về Home
            alert("Thành Công Rồi")
            // cài thêm history để hỗ trợ cái file ko phải cpn
            history.push('./login')
        })
        promise.catch((error) => {
            //! optional chaining (?.)
            console.log(error.response.data)
        })
    }
}

// acction liên quan về người dùng

export const dangNhapAction = (userInfo) => {
    return (dispatch2) => {
        let promise = axios({
            method: 'post',
            url: `${URL_API}/QuanLyNguoiDung/DangNhap`,
            data: userInfo,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            console.log(result.data);
            // lưu xún local storage
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken)
            
            let userInfo = JSON.stringify(result.data.content)
            localStorage.setItem(USER_LOGIN, userInfo)

            let action = {
                type:LOGIN,
                uLogin:userInfo
            }
            //dispatch2 đẩy dữ liệu về reducer
            dispatch2(action)
            // đn đc đẩy về home
            history.push('./home')
        })
        promise.catch((error) => {
            // optional chaining (?.)
            console.log(error.response.data)
        })
    }
}
// xóa local bằng remo Local 
// đẩy disptah null lên reducer