import axios from 'axios'
import { TOKEN, URL_API } from '../../util/setting'
import { LAY_DANH_SACH_PHIM } from '../types/phimType'


export const layDsPhimAction = (maNhom="GP01") => {
    // trả về hàm chưa gọi
    return (dispatch2) => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            headers: {
                TokenCybersoft: TOKEN
            }
        })
        promise.then((result) => {
            // console.log(result.data)
            let acction2 = {
                type: LAY_DANH_SACH_PHIM,
                mangPhim: result.data.content
            }
            dispatch2(acction2)// chờ có dữ liệu r đẩy lên redux

        })
        promise.catch((error) => {
            console.log(error);
        })
    }

}

export const layChiTietPhimAction = () => {

}