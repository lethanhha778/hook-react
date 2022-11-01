import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">    
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
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-callback">Use CallBack</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-memo">Use Memo</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/use-ref">Use Ref</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/redux-demo">Redux</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/middle-ware">API-Redux</NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to="/detail/phim123">Detail</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
