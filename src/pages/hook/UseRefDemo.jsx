import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

    // const [userAcount, setUserAcount] = useState({
    //     username: '',
    //     password: ''
    // })
    const [num, setNum] = useState(0)

    let userAcountRef = useRef({
        username: '',
        password: ''
    })

    let user ={} //! => thì dữ liệu ko đổi ở các hàm khác

    let handleInput = (e) => {
        let { id, value } = e.target
        // userAcountRef.current.username = value

        // truyền động
        userAcountRef.current[id]= value
        // console.log(userAcountRef);

        // setUserAcount({
        //     ...userAcount,
        //     [id]:value
        // })
        // console.log(userAcount)
        
        //  user = {
        //     ... user,
        //     [id]:value
        // }
        // console.log(user)
    }

    console.log('login');
    console.log(userAcountRef);
    //? line 40: lưu đc dữ liệu mà ko render lại UI

    // console.log(user) //! ko có dữ liệu mới do ko render UI
    // let hanldeSubmit = (e)=>{
    //     console.log(user)
    // }

    return (
        <div className='container mt-5 '>
            <div>
              Number:  {num} 
             <br />
              <button onClick={() => { setNum(num+1) }}
               className='btn btn-danger'>Tăng</button>
            </div>
            <form
                className='w-50 mx-auto'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input onChange={handleInput} type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handleInput} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Yes</label>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
