import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../redux/action/fbAction';


export default function ReduxDemo() {
    let { mangComment } = useSelector((state) => {
        return state.fakeFB
    })

    // lưu các giá trị lấy từ form
    let [userComment, setUserComment] = useState({
        username: '',
        comment: ''
    })



    let dispatch = useDispatch()

    let renderComent = () => {
        return mangComment.map((post, index) => {
            return <div className="row" key={index}>
                <div className="col-2">
                    <img className='img-fluid' src={post.avt} alt="" />
                </div>
                <div className="col-10">
                    <p style={{ color: 'red' }}>{post.username}</p>
                    <p>{post.comment}</p>
                </div>
            </div>
        })
    }

    let handleInput = (e) => {
        let { id, value } = e.target
        // console.log(id, value)
        setUserComment({
            ...userComment,
            [id]: value
        })
    }
    // console.log(userComment);
    let hanleSubmit = (e) => {
        e.preventDefault();
        // tạo acction
        /**
         * action creator
         * acction có 2 loại
         * 1: acction là object
         * 2: acction là function ( tách action ở 1 file riêng => dễ quản lý code action creator)
         */
        // let acction = addCommentAction(userComment)
        // dispatch(acction)
        dispatch(addCommentAction(userComment))
    }

    return (
        <div className='container mt-5'>
            <div className="w-50 mx-auto">
                <div className="row">
                    <div className="col-2">
                        <img className='img-fluid' src="https://i.pravatar.cc/?u=1997" alt="" />
                    </div>
                    <div className="col-10">
                        <p style={{ color: 'red' }}>user122</p>
                        <p>Đồ Ngốck</p>
                    </div>
                </div>
                {renderComent()}
            </div>
            <form onSubmit={hanleSubmit}
                className='w-50 mx-auto'>
                <div className="form-group">
                    <input onChange={handleInput} type="text" className="form-control" id="username" placeholder="username" />
                </div>
                <div className="form-group">
                    <input onChange={handleInput} type="text" className="form-control" id="comment" placeholder="comment" />
                </div>
                <button type="submit" className="btn btn-primary">Sent</button>
            </form>
        </div>
    )
}
