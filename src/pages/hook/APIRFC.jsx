import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TOKEN, URL_API } from '../../util/setting'

export default function APIRFC(props) {

    const [mangPhim, setMangPhim] = useState([]);
    useEffect(()=>{
        getAPI()
    },[])

    let getAPI = async () => {
        try {
          let result = await axios({
                method: 'get',
                url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                headers: {
                    'TokenCybersoft': TOKEN
                }
            })
            setMangPhim(result.data.content)
            // console.log(mangPhim)
        } catch (error) {
            console.log(error)  
        }   
    }
    let renderMovie = () => {
        return mangPhim.map((movie) => {
            return <div className='col-3' key={movie.maPhim}>
                <div className="card">
                    <img className="card-img-top" src={movie.hinhAnh} alt={movie.biDanh} />
                    <div className="card-body">
                        <h4 className="card-title">{movie.tenPhim}</h4>
                        <p className="card-text">{movie.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className='container'>
            <button onClick={getAPI}
                className='btn btn-info'>Call API</button>
            <div className='row'>
                {renderMovie()}
            </div>
        </div>
    )
}
