import React, { Component } from 'react'
import axios from 'axios'
import { TOKEN,URL_API } from '../../util/setting'

export default class APIRCC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mangPhim: [

            ]
        }
    }
    getAPI = () => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            console.log(result.data.content);
            this.setState({
                mangPhim: result.data.content
            }, () => {
                //clg khi setState bị bất đồng bộ
                console.log(this.state.mangPhim);
            })

        });
        promise.catch((error) => {
            console.log(error)
        });
    }
    renderMovie = () => {
        return this.state.mangPhim.map((movie) => {
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
    render() {
        return (
            <div className='container py-5'>

                <button onClick={() => {
                    this.getAPI()
                }}
                    className='btn btn-info'>Call API</button>
                <div className="row py-3">
                    {this.renderMovie()}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getAPI()
    }
}
