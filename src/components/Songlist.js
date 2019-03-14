import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import $ from 'jquery';
import zj from "../img/zj.jpg"
import '../css/Songlist.css';
import { Button ,Icon} from 'antd';
class Songlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            name:'',
            pic:'',
            desc:""
        }
    }

    play(){

    }
    btn(){
        this.props.history.push('/find/detail')
    }
    render(){
        var _this=this;
        var list1=[];
        
       this.state.list.splice(0,20).map(function(item,i){
            return(
                list1.push(
                <tr>
                    <td >{i+1} <span className="hover"><Icon type="play-circle" /></span></td>
                    <td onClick={_this.btn.bind(_this)} className='btn'>{item.name}</td>
                    <td >{item.sname}</td>
                    <td >{item.clicknumber}</td>
                    <td >{item.sheetName}</td>
                </tr>
                
                )
            )
        })

       /*   this.state.list.splice(19,20).map(function(item,i){
            list2.push(
                <li key={i} onClick={_this.play.bind(_this)}>
                <span>{i+1}</span><span>{item.name}</span>
                </li>
            )
        })

        this.state.list.splice(39,20).map(function(item,i){
            list3.push(
                <li key={i} onClick={_this.play.bind(_this)}>
                <span>{i+1}</span><span>{item.name}</span>
                </li>
            )
        }) */



        return(
            <div className="out">
               <div className="box">
                    <div className="head">
                        <div className="left">
                            <img src={this.state.pic}/>
                        </div>
                        <div className="right">
                            <h3>{this.state.name}</h3>
                            <Button type="primary" icon="poweron" loading={false} onClick={this.enterIconLoading}>
                            <Icon type="play-circle" />播放</Button>
                            <Button type="default" icon="poweron" loading={false} >
                            <Icon type="arrow-down" />播放</Button><br/>
                            <div className="title"><p>标签：</p><span>民谣</span><span>世界音乐</span></div><br/><br/>
                            <p>{this.state.desc}</p>
                        </div>
                        
                    </div>      
                    {/* //list       */}  
                    <div className="list-con">
                        <h2>歌曲列表</h2>
                        <table className="m-table">
                            <thead>
                                <tr>
                                    <th style={{width:'100px'}}></th>
                                    <th style={{width:'400px'}}>歌曲标题</th>
                                    <th style={{width:'200px'}}>歌手</th>
                                    <th style={{width:'100px'}}>播放量</th>
                                    <th style={{width:'100px'}}>标签</th>

                                </tr>
                            </thead>
                            <tbody>
                                {list1}
                            </tbody>
                        </table>

                    </div>
                    
               </div>
            </div>
        )
    }

   
    componentDidMount(){
        console.log(this.props.location.id)
        var _id=this.props.location.id;
        var _this=this
         $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/listonesheet.do",
            async:true,
            dataType:'json',
            data:{id:_id},
            success:function(data){
                console.log(data)

                _this.setState({list:data.info,pic:data.info.imgurl,name:data.info.name,desc:data.info.sname}) 
            }
        }) 

         /* test */
       /* $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/",
            async:true,
            dataType:'json',
            data:{key:579621905,limit:10,id:988690134},
            success:function(data){
                console.log(data.data)
                
            }
        }) */

     /*    $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/listonesheet.do",
            async:true,
            dataType:'json',
            data:{id:115},
            success:function(data){
               console.log(data,"list")
            }
        })
 */
    }

}



export default Songlist;
