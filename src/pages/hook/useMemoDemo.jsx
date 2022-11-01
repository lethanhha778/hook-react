import React, { useMemo, useState } from 'react'
import Cart from './Cart';


export default function useMemoDemo() {
    let [like, setLike] = useState(0);
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 }
    ];
   let cartMemo = useMemo(() => {
    return cart
   },[])
    return (
        <div className='container'>
            <div className="card w-50">
                <div className="card-body">
                    <div>
                        <div>
                            {like}♥
                        </div>
                        <span style={{ cursor: 'pointer', color: 'blue', fontSize: 35 }}
                            onClick={() => {
                                setLike(like + 1)
                            }}
                        >♥</span>
                        <Cart cart = {cartMemo}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
