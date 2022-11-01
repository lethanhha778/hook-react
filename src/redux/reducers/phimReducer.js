import { LAY_DANH_SACH_PHIM } from "../types/phimType"


const initialState = {
    mangPhim: [
        
    ]
}

export  const phimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM:
            state.mangPhim = action.mangPhim
            return {...state}
        default:
            return state
    }
}
