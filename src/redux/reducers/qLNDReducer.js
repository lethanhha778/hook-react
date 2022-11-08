import { USER_LOGIN } from "../../util/setting"
import { LOGIN } from "../types/qLNDType"

// chứa userLogin từ LocalStorage
let uLogin = null
if (localStorage.getItem(USER_LOGIN)) {
    // có local
    uLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    uLogin: uLogin
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            state.uLogin = action.uLogin
            return { ...state }
        // xóa local bằng remo Local 
        // đẩy disptah null lên reducer
        default:
            return state
    }
}
