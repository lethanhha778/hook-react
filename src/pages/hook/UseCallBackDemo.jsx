import React, { useCallback, useState } from 'react'
import Post from './Post'

export default function UseCallBackDemo() {
    let [like, setLike] = useState(0);
    let [num, setNum] = useState(0);

    let renderLike = () => {
        console.log('like');
    } // tạo lại =>đổi địa chỉ => memo tưởng đổi dẫn đến memo render lại UI

    // let renderLikeCallback = useCallback(renderLike, [])
    // use callback giúp lưu lại hàm tránh thay đổi khi render lại UI
    let renderLikeCallback = useCallback(renderLike, [])
    // useCallback truyền vào 2 tham số:
    //+ truyền hàm 
    //+[like] truyền vào để khi like thay đổi thì render lại
    return (
        <div className='container'>
            <div className="card w-50">
                <div className="card-body">
                    {/* <Post /> */}
                    {/* truyền props để props thay đổi render lại UI */}
                    <Post renderLike={renderLikeCallback} like={like}/>
                    <p style={{ fontSize: 25, color: 'red' }}>♥{like}</p>
                    <div>
                        <span style={{ cursor: 'pointer', color: 'blue', fontSize: 35 }}
                            onClick={() => {
                                setLike(like + 1)
                            }}
                        >♥</span>
                    </div>
                </div>
                <div>
                    Num: {num}
                    <button className='btn btn-danger' onClick={() => {
                        setNum(num + 1)
                    }}>Tăng Number</button>
                </div>
            </div>
        </div>
    )
}

