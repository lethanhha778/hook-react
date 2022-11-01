import React, { memo } from 'react'

 function Post(props) {
    console.log("post");
    return (
        <div>
            <h5 className="card-title">Hôm Nay Trời Nắng Bất Ngờ</h5>
            <img src="https://i.pravatar.cc/?u=1999" alt="" className='w-100' />             
            {/* <p>♥{props.like}</p> */}
        </div>
    )
}
// memo : tự nhận biết state có truyền xún cho cpn con hay không => nếu có render lại UI của con
export default memo(Post)
