import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { TOKEN, URL_API } from '../../util/setting'
import { layDsPhimAction } from '../../redux/action/phimAction'

export default function ApiMiddleWare() {
    // redux tự render lại khi có dữ liệu, ko cần lưu vào state
    //1. khai báo reducer cho nghiệp vụ phim
    //2.kết nối API => mảng phim
    // 2.1 tạo hàm getAPI
    //  lifecycle didmount => useEffect(,[])
    //3. dispatch mảng phim => phimReducer
    let { mangPhim } = useSelector(state => state.phimReducer)

    // console.log(mangPhim)
    let dispatch = useDispatch()

    useEffect(() => {
        getAPI()
    }, [])

    let renderMovie = () => {
        return mangPhim.map((phim) => {
            return <div className='col-4' key={phim.maPhim}>
                <div className="card" >
                    <img className="card-img-top" src={phim.hinhAnh} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{phim.tenPhim}</h5>
                        <p className="card-text">{phim.moTa}</p>
                        <a href="#" className="btn btn-primary">Đặt Vé </a>
                    </div>
                </div>
            </div>
        })
    }

    let getAPI = () => {

        // tổ chức acctin creator => tạo action loại function
        // nếu acction có call api thì sẽ đem toàn bộ code API sang acction
        // => bị bất đồng bộ
        //? Middlewear => xử lý bất đồng bộ giữa API và dispatch lên redux + tổ chức theo acction creator
        // Middlewear (redux-thunk, redux saga)
        // sinh ra 2 hàm disptach cho redux 
        // =>dispatch1 gọi api => chờ đến khi lấy đc data
        //=> dispatch2 đẩy data lên redux 

        //? hàm call APi
        // let acction = layDsPhimAction;
        

        // nhận kq trả về là hàm chưa gọi
        let acction = layDsPhimAction("GP13");

        // dispatch: truyền hàm chưa gọi
        dispatch(acction)// gọi hàm call API (line 50)

    }
    return (
        <div className='container'>
            <h2>Demo Api Redux</h2>
            <div className="row">
                {renderMovie()}

            </div>
        </div>
    )
}
