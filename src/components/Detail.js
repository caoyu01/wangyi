
import React from 'react';
import '../css/Detail.css'; 
import $ from 'jquery';
import { Carousel } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd';
import {Button} from 'antd'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pic:"",
            con:'',
            name:'',
            sname:'',
            url:''
        }
    }
    render(){

        return(
            <div className='out'>
                <div className="box">
                <div className="head">
                        <div className="left">
                            <div className="wyy"><img src={this.state.pic}/></div>
                        </div>
                        <div className="right">
                            <h3>{this.state.name}</h3>
                            <Button type="primary" icon="poweron" loading={false} onClick={this.enterIconLoading}>
                            <Icon type="play-circle" />播放</Button>
                            <Button type="default" icon="poweron" loading={false} >
                            <Icon type="arrow-down" />播放</Button><br/>
                            <div className="title"><p>标签：</p><span>民谣</span><span>世界音乐</span></div><br/><br/>
                            <h2>名字：{this.state.name}</h2>
                            <h2>作者：{this.state.sname}</h2>
                            <p>{this.state.con}</p>

                        </div>
                        <audio src={'https://api.bzqll.com/music/netease/url?id=64927&key=579621905'} controls='controls'>

                        </audio>
                    </div>  
                </div>
            </div>
        )
    }

    componentDidMount(){
        var _this=this;
        console.log(this.props.match.params.id)
        var id=this.props.match.params.id;
       $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/findmusic.do",
            async:true,
            dataType:'json',
            data:{id:id},
            success:function(data){
                console.log(data)
                var data=data.info
                _this.setState({pic:data.imgurl,name:data.name,sname:data.sname,con:data.lyric,url:data.url})
                 
            }
        }) 
    }


}

export default Detail;