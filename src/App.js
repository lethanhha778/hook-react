import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Header from './component/Header/Header'
import About from './pages/About/About'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import APIRCC from './pages/hook/APIRCC'
import APIRFC from './pages/hook/APIRFC'
import Counter from './pages/hook/Counter'
import UseCallBackDemo from './pages/hook/UseCallBackDemo'
import UseEffectDemo from './pages/hook/UseEffectDemo'
import useMemoDemo from './pages/hook/useMemoDemo'
import UseRefDemo from './pages/hook/UseRefDemo'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import ApiMiddleWare from './pages/ReduxDemo/ApiMiddleWare'
import ReduxDemo from './pages/ReduxDemo/ReduxDemo'
import Register from './pages/Register/Register'
import { FormTemplate } from './Template/FormTemplete'
import { HomeTemplate } from './Template/HomeTemplete'
// hỗ trợ sử dụng history của Router cho các file ko phải component
import { createBrowserHistory } from 'history'
import LoginUser from './pages/LoginUser/LoginUser'

export const history = createBrowserHistory()

export default function App() {

    return (
        <Router history={history} >
            {/* <BrowserRouter> */}
            {/* <Header /> dùng cho tất cả các trang */}
            {/* {templete: mẫu ui đc dùng cho nhiều trang
                +Hometemplete (Header dùng chung cho các trang bt)
                +FormTemplate ( thiết kế ko cần header)
                + AdminTemplate (sidebar, header của admin)
            } */}
            <Switch>
                {/* 
                <Route exact path='/home' render={ (propsRoute) => {
                    return <div>
                        <Header/>
                        <Home {...propsRoute}/>
                    </div>
                  }
                }/>
                  <Route exact path='/about' render={ (propsRoute) => {
                    return <div>
                        <Header/>
                        <About {...propsRoute}/>
                    </div>
                  }
                }/> */}
                {/* HOC: truyền cpn này vào props của cpn khác
                Home => props của HomeTemplate
                */}

                {/* đường path/Home sẽ hiện cpn Home */}
                {/* nếu ko có exact thì so sanh đường dẫn có chứa ký tự thỏa đk */}
                {/* <Route /> định nghĩa đường dẫn */}
                <HomeTemplate exact path="/home" component={Home}></HomeTemplate>
                <HomeTemplate exact path="/about" component={About}></HomeTemplate>

                {/* <Route exact path="/about" component={About}></Route> */}
                <FormTemplate exact path="/login" component={Login}></FormTemplate>
                <FormTemplate exact path="/register" component={Register}></FormTemplate>

                <HomeTemplate exact path="/counter" component={Counter}></HomeTemplate>
                <HomeTemplate exact path="/use-effect" component={UseEffectDemo}></HomeTemplate>
                <HomeTemplate exact path="/rfc" component={APIRFC}></HomeTemplate>
                <HomeTemplate exact path="/rcc" component={APIRCC}></HomeTemplate>
                <HomeTemplate exact path="/use-callback" component={UseCallBackDemo}></HomeTemplate>
                <Route exact path="/use-memo" component={useMemoDemo}></Route>
                <HomeTemplate exact path="/use-ref" component={UseRefDemo}></HomeTemplate>
                <HomeTemplate exact path="/redux-demo" component={ReduxDemo}></HomeTemplate>
                <HomeTemplate exact path="/middle-ware" component={ApiMiddleWare}></HomeTemplate>
                <HomeTemplate exact path="/detail/:maPhim" component={Detail}></HomeTemplate>
                <HomeTemplate exact path="/profile" component={Profile}></HomeTemplate>
                <HomeTemplate exact path="/loginUser" component={LoginUser}></HomeTemplate>


                {/* khi ko có trang cụ thể thì vào home */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" component={Home}></Route>

            </Switch>
            {/* </BrowserRouter> */}
        </Router>
    )
}
