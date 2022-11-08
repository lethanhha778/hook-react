import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

  let {uLogin} = useSelector(state => state.QLNDReducer)
  let renderName = () => {
    if(uLogin !== null){
        // đã đăng nhập
        return  <NavLink className="nav-link" to="/profile">Heloo {uLogin.hoTen}</NavLink>
    }else{
        // chưa
     return  <NavLink className="nav-link" to="/loginUser">Login User</NavLink>
    }
  }
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        {/* <li className="nav-item">    
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li> */}
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        {/* <li className="nav-item">    
                            <NavLink className="nav-link" to="/counter">Counter</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-effect">Use Effect</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/rfc">API RFC</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/rcc">API RCC</NavLink>
                        </li> */}
                        {/* <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-callback">Use CallBack</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-memo">Use Memo</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-ref">Use Ref</NavLink>
                        </li> */}
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/redux-demo">Redux</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/middle-ware">API-Redux</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/detail/phim123">Detail</NavLink>
                        </li>
                   
                        <li className="nav-item">
                           {renderName()}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        
                    </form>
                </div>
            </nav>

        </div>
    )
}
