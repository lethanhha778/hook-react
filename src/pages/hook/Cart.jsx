import React, { memo } from 'react'

 function Cart(props) {
    console.log('object')
    return (
        <div>
            {/* {props.like}♥ */}
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default memo(Cart) // ko nhận diện đc kiểu (fcn, array, obj) có bị thay đổi ko
// dữ liệu props ko đổi => ko render lại
// khi like thay đổi thì ko render lại