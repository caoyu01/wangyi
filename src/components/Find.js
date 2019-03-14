import React from 'react';
import '../css/Find.css';
/* import Tuijian from './Tuijian'; */
import Songlist from './Songlist';
import AsyncComponent from "../async"



import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
var Tuijian=AsyncComponent(()=>import('./Tuijian'));
var Detail=AsyncComponent(()=>import('./Detail'))
class Find extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        
            return(
                <div>             
                   <Router>
                        <div>
                            <div className='fxyy1'>
                                <div>
                                    <NavLink to='/find/tuijian'>推荐</NavLink>
                                    <NavLink to='/find/phb'>排行榜</NavLink>
                                    <NavLink to='/gd'>歌单</NavLink>
                                    <NavLink to='/mv'>MV</NavLink>
                                    {/* <NavLink to='/gs'>歌手</NavLink> */}
                                    <NavLink to='/xdsj'>新碟上架</NavLink>
                                    {/* <NavLink to='/list3'></NavLink> */}
                                </div>
                            </div>
    
                                <Route path='/find/tuijian' component={Tuijian}></Route> 
                                <Route path="/find/songlist" component={Songlist}></Route>
                                <Route path="/find/detail:id" component={Detail}></Route>

                                {/* <Route path='/phb' component={Phb}></Route>
                                <Route path='/gd' component={Gd}></Route>  
                                <Route path='/mv' component={Mv}></Route> 
                                <Route path='/gs' component={Gs}></Route>
                                <Route path='/xdsj' component={Xdsj}></Route> 
                                <Route path='/list3' component={List3}></Route>   */}            
                        </div>
                    </Router>
                </div>
            )
        }
    }

export default Find;