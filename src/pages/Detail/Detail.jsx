import React from 'react'

export default function Detail(props) {
    // maPhim: tên tham số cần lấy từ URL
    // param trên url là dữ liệu ko bảo mật
    console.log(props);
  return (
    <div className='container'>
        <h1 className='alert alert-warning'>
            Tham Số (pram):{props.match.params.maPhim}
        </h1>
    </div>
  )
}
