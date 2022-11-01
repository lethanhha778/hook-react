import React, { useState } from 'react'
import { Prompt, useLocation } from 'react-router-dom'

// router => props history, match

export default function Login(props) {
  // nếu đăng nhập thành công => chuyển sang Home
  // ngược lại ko chuyển đi và thông báo lỗi


  // lấy dữ liệu từ form

  let [userAccount, setUserAccount] = useState({
    username: '',
    password: '',
    isSave: true
  })

  let handleUser = (e) => {
    let { id, value } = e.target
    setUserAccount({
      ...userAccount,
      [id]: value
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(userAccount)

    if (userAccount.username === "babao") {
      // đăng nhập thành công => chuyển về Home
      // thư viện router tự thêm vào props của cpn

      // api=>login =>home
      props.history.push("/home")

      // replace ghi đè lịch sử duyệt web
      // api=>login(Home) =>home back nó sẽ về api chứ ko phải login
      // props.history.replace('/home')
    }
    else {
      alert("Thất Bại")
    }
  }
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit}
        className=' py-5'>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={handleUser} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter user" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={handleUser} type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button className="btn btn-primary">Login</button>
        <button onClick={() => {
          props.history.goBack()
          // goBack chuyển về trang trc nó
        }} type='button'>Go</button>
      </form>
      <Prompt
        //! nếu đăng nhập thành công set isSave = false
        when={userAccount.isSave}
        message={(location) => {
          return "Bạn rời đi ư"
        }}
      />
    </div>
  )
}
