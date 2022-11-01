import React, { useEffect, useState } from 'react'

// biến toàn cục
// chỉ tạo 1 lần. khi render lại UI sẽ ko bị tạo lại
const arrDiaChi = [
    {
        id: 'HCM',
        name: 'Hồ Chí Minh',
        arrQ: [
            { id: 1, name: 'Q1' },
            { id: 2, name: 'Q2' },
            { id: 3, name: 'Q3' }

        ]
    },
    {
        id: 'DN',
        name: 'Đà Nẵng',
        arrQ: [
            { id: 4, name: 'Liên Chiểu' },
            { id: 5, name: 'Sơn Trà' },
            { id: 6, name: 'Hải Châu' }

        ]
    }
]

let timeOut = ''

export default function UseEffectDemo() {
    // hook nên đặt trước lệnh return

    const [number, setNumber] = useState(0)
    const [like, setLike] = useState(0)
    // 1 fnc có thể chứa nhiều useEffect
    //? useEffect
    // mounting(chạy khi load lên), updating(state hoặc props thay đổi), unmounting(khi cpn được gỡ khỏi UI)
    //number đổi => chạy useEfff => thì like đổi theo
    //? dùng 1 tham số

    //! useEffect(() => {
    //     console.log('didMount');
    //     console.log('didUpdate');
    // })
    //? useEffect(hàm callback,[]) tham số thứ 2 luôn luôn là mảng
    //? dùng 2 tham số
    //! useEffect(() => {
    //     console.log('didMount');

    // },[])// tham só thứ 2 là mảng rỗng thì chạy theo cpnMounting
    //? dùng 2 tham số
    // chạy khi number thay đổi
    useEffect(() => {
        // vẫn chạy 1 lần khi load ứng dụng
        // nhưng lần 2 chạy khi updating(number thay đổi)
        setLike(like + 1)
    }, [number])// truyền giá trị state vào tham số [] 
    //! shallow compare((number,string,boolean))


    let [idTP, setTP] = useState('');
    let [arrQ, setQ] = useState([])

    useEffect(() => {
        // 8:30
        if (idTP !== "") {
            console.log(idTP)
            let thanhPho = arrDiaChi.find((tp) => {
                return tp.id === idTP
            })
            console.log(thanhPho);
            let arrQuanNew = thanhPho.arrQ
            setQ(arrQuanNew)
            // console.log(arrQ);
        }
    }, [idTP])

    useEffect(() => {
        timeOut = setInterval(() => {
            console.log('interval')
        }, 1000);
        return ()=>{
            // code được thực thi khi cpn đc gỡ khỏi UI
            // => dùng để tắt các services chạy ngầm
            clearInterval(timeOut)
        }
    },[]);

    let renderQuan = () => {
        if (arrQ.length === 0) {
            return <option>Hãy Chọn Thành Phố</option>
        }
        else {
            return arrQ.map((quan) => {
                return <option value={quan.id} key={quan.id}>{quan.name}</option>
            })
        }
    }

    return (
        <div className='container'>
            {console.log('render')}
            <div className="w-50 mx-auto">
                <p>{number}</p>
                <p>like: {like}</p>
                <button className='btn btn-danger' onClick={() => { setNumber(number + 1) }}>
                    Plus
                </button>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Thành Phố</label>
                    <select className="form-control" id="" value={idTP} onChange={(e) => {
                        let idTpChon = e.target.value
                        setTP(idTpChon)
                        // console.log(idTpChon)
                        // xet xong Tp => render Ui => useEffect => setQuan

                    }}>
                        <option>Hãy Chọn TP</option>
                        <option value={"HCM"}>HCM</option>
                        <option value={"DN"}>ĐN</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Quận</label>
                    <select className="form-control" id="">
                        {renderQuan()}
                    </select>
                </div>
            </div>
        </div>
    )
}
