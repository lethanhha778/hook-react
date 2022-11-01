import React, { useState } from 'react'

// rfce là tạo nhanh function component 
function Counter() {
    const [count, setCount] = useState(0);
    // trả về 1 mảng 2 phần tử [giá trị state, phương thức setState]
    //! luôn khai báo Hook ở đầu  
    console.log(count);
    //? useState(0) gía trị khởi tạo của useState
    //? nếu ko truyền giá trị khởi tạo thì mặc định là undefine
    //? count nhận giá trị từ khởi tạo


    // khai báo state chứa đối tượng user
    const [user, setUser] = useState({
        id:77,
        avt:'https://i.pravatar.cc/?u=77',
        
    })


    return (
        <div className='container'>
            UseState:{count}
            <hr />
            <button onClick={() => {
                console.log("Log");
                setCount(count - 1)
            }}
            >-</button>
            <div className="row">
                <div className="col-3">
                    <div className="card w-50" >
                        <img className="card-img-top" src={user.avt} alt="Card image cap" />
                        <div className="card-body">
                            <button
                            onClick={() => { 
                                let number = Math.floor(Math.random() * 100)
                                let newUser= {...user,avt:`https://i.pravatar.cc/?u=${number}`}
                                setUser(newUser)
                             }}
                             className='btn btn-dark'>Radom</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;
