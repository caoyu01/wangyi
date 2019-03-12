import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import './App.css';
import './css/head.css'
import Find from './components/Find'
import logo from './img/topbar.png';
import touxiang from './img/toxiang.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">   
        <div className='header'>
        <Router>
          <div>
        
          <div className='headCen'>
            <h1><img src={logo}/></h1> 
            <ul className='nav'>
              <li><NavLink to='/fxyy'>发现音乐</NavLink></li>
              <li><NavLink to='/myMusic'>我的音乐</NavLink></li>
              <li><NavLink to='/friends'>朋友</NavLink></li>
              <li><NavLink to='/store'>商城</NavLink></li>
              <li><NavLink to='/yinyueren'>音乐人</NavLink></li>
              <li><NavLink to='/kehuduan'>下载客户端</NavLink></li>
              <li><NavLink to='/login1'>登录</NavLink></li>
            </ul>
     
            <div className='search'>
              {/* <input style={bg} type='text' placeholder='音乐/视频/电台/用户' /> */}
              <div className='my'>
                <img src={touxiang}/>             
                <ul>
                  <li className='arr'>
                   {/*  <i style={bg1}></i> */}
                  </li>
                  <li>
                  <Icon type="user" />
                    <em>我的主页</em>
                  </li>
                  <li>
                  <Icon type="mail" />
                    <em>我的消息</em>
                  </li>
                  <li>
                  <Icon type="crown" />
                    <em>VIP会员</em>
                  </li>
                  <li>
                  <Icon type="setting" />
                    <NavLink to="/mine"><em>个人设置</em></NavLink>
                  </li>
                  <li>
                  <Icon type="safety" />
                    <em>实名认证</em>
                  </li>
                  <li>
                  <Icon type="poweroff" />
                   {/*  <em onClick={this.tui.bind(this)}>退出</em> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Switch>
              <Route path='/find' component={Find}></Route>
            
              
              <Redirect to='/find'></Redirect>
            </Switch>
            </div>
          </Router>
        </div>
      
      </div>
    );
  }
}

export default App;
