import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import './App.css';
import './css/head.css';

/* import Find from './components/Find' */

import logo from './img/topbar.png';
import touxiang from './img/toxiang.jpg'
import $ from 'jquery'
import AsyncComponent from "./async"
var Find=AsyncComponent(()=>import('./components/Find'))
var Friends=AsyncComponent(()=>import('./components/Friends'))

class App extends Component {

  show(){
    $('.nav-box').toggle(1000)
  }

  render() {
    return (
      <div className="App">   
        <div className='header'>
        <Router>
          <div>
         
          <div className='headCen'>
            <h1><img src={logo}/></h1> 
            <ul className='nav'>
              <li><NavLink to='/find'>发现音乐</NavLink></li>
              <li><NavLink to='/myMusic'>我的音乐</NavLink></li>
              <li><NavLink to='/friends'>朋友</NavLink></li>
              <li><NavLink to='/yinyueren'>音乐人</NavLink></li>
              <li><NavLink to='/kehuduan'>下载客户端</NavLink></li>
              <li><NavLink to='/login1'>登录</NavLink></li>
            </ul>
     
            <div className='search'>
              {/* <input style={bg} type='text' placeholder='音乐/视频/电台/用户' /> */}
              <div className='my'>
                <div onClick={this.show.bind(this)}><img src={touxiang}/></div>            
                <ul className="nav-box">
                  <li className='arr'>
                   {/*  <i style={bg1}></i> */}
                  </li>
                  <li>
                  <Icon type="user" />
                    <em>我的主页</em>
                  </li>
                  
                  
                  <li>
                  <Icon type="setting" />
                    <NavLink to="/mine"><em>个人设置</em></NavLink>
                  </li>
                  
                  <li>
                  <Icon type="poweroff" />
                     <em>退出</em> 
                  </li>
                </ul>
              </div>
            </div>
          </div>

              <Route path='/find' component={Find}></Route>
              <Route path='/friends' component={Friends}></Route>
            
              
            </div>
          </Router>
        </div>
      
      </div>
    );
  }
}

export default App;
