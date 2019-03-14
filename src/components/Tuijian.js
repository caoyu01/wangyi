import React from 'react';
import '../css/Tuijian.css';
import $ from 'jquery';
import { Carousel } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd';
import {Button} from 'antd'
import img1 from '../img/lunbo31.jpg'
import img2 from '../img/lunbo32.jpg'
import img3 from '../img/lunbo33.jpg'
import img4 from '../img/lunbo34.jpg'
import img5 from '../img/lunbo35.jpg'
import img6 from '../img/lunbo36.jpg'
import img7 from '../img/lunbo37.jpg'
import img9 from '../img/tu-39.jpg'
import img8 from '../img/lunbo38.jpg'
import { func } from 'prop-types';
class Tuijian extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            list1:[],
            list2:[],
            list3:[],
            list4:[],
            list5:[],
            banner:[],
            id1:''
        }
    }
    tap1(id){
        
        this.props.history.push({pathname:'/find/songlist',id:id}) 
        // this.context.router.push({ pathname : '/find/songlist', state : { msg : 'you have logined and will redirect to your page'}})
    }
    tap2(){
        console.log('34')
    }
    tap4(){

    }
    add1(){

    }
    
    render(){
        var jsx=[];
        this.state.banner.map((item,i)=>{
            jsx.push( <div className='tja2'><h3><img src={item} /></h3></div>)
        })
        var _this=this
            return(
                <div>             
                   <div className='tj1'>
                    <div className='tj11'>
                      
                        <Carousel effect="fade" className='tj12' autoplay>
                            {jsx}
                            <div className='tja5'><h3><img src={img5} /></h3></div>
                        </Carousel>
                    </div>
                    </div>
               
                    {/* 内容 */}
                    <div className='wrap'>
                        <div className="tjw">
                            {/*  列表 */}
                            <div className='tjw-r'>
                                <div className='tjw-r1'>
                                    <div>
                                        <img src={img7}/>
                                    </div>                        
                                </div>                                                 
                        <h4>用户名</h4>
                        <Button type="primary">签到</Button>
                        {/*  列表2 */}
                <div className='tjw-r2'>
                    <figure>
                        <span>0</span>
                        <figcaption>动态</figcaption>
                    </figure>
                    <figure>
                        <span>3</span>
                        <figcaption>关注</figcaption>
                    </figure>
                    <figure>
                        <span>0</span>
                        <figcaption>粉丝</figcaption>
                    </figure>
                </div>
                {/*  列表3 */}
                <div className='tjw-r3'>
                    <div className='tjw-r31'>
                        <p>入驻歌手</p>
                        <p>查看全部 ></p>
                    </div>
                </div>
                {/*  列表4 */}
                <ul className='tjw-r4'>
                                <li>
                                    <img src={img4}/>
                                    <div>
                                        <p>张惠妹aMEI</p>
                                        <span>台湾歌手张惠妹</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img4}/>
                                    <div>
                                        <p>张惠妹aMEI</p>
                                        <span>台湾歌手张惠妹</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img4}/>
                                    <div>
                                        <p>张惠妹aMEI</p>
                                        <span>台湾歌手张惠妹</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img4}/>
                                    <div>
                                        <p>张惠妹aMEI</p>
                                        <span>台湾歌手张惠妹</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img4}/>
                                    <div>
                                        <p>张惠妹aMEI</p>
                                        <span>台湾歌手张惠妹</span>
                                    </div>
                                </li>
                            </ul>
                            <div className='tjw-r5'>
                                <Button>申请成为网易音乐人</Button>
                            </div>
                            <div className='tjw-r6'>
                                <div className='tjw-r61'>
                                    <p>热门主播</p>
                                </div>
                            </div>
                            <ul className='tjw-r7'>
                                <li>
                                    <img src={img6}/>
                                    <div>
                                        <p>DJ艳秋 <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /></p>
                                        <span>著名音乐节目主持人</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img6}/>
                                    <div>
                                        <p>DJ艳秋 <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /></p>
                                        <span>著名音乐节目主持人</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img6}/>
                                    <div>
                                        <p>DJ艳秋 <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /></p>
                                        <span>著名音乐节目主持人</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={img6}/>
                                    <div>
                                        <p>DJ艳秋 <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /></p>
                                        <span>著名音乐节目主持人</span>
                                    </div>
                                </li>
                            </ul>
                            {/*  回顶部 */}
                            
                    <div id='tj-top'>
                        <span><Icon type="up" /></span>
                        <p>TOP</p>
                    </div>
            </div>
                



                    {/* 热门推荐 */}
                            <div className="tjw-l">
                                <div className='tjw-l1'>
                                    <h3>热门推荐</h3>
                                    <ul>
                                        <li>华语</li>
                                        <li>流行</li>
                                        <li>摇滚</li>
                                        <li>民谣</li>
                                        <li>电子</li>
                                    </ul>
                                    <p>更多<Icon type="arrow-right" /></p>
                                </div>
                            <div className='tjw-l2'>
                                <div className='tjw-l28'>                                   
                                    {                                           
                                        this.state.list.map(function(item,i){
                                            return(
                                                    <li key={i} onClick={_this.tap1.bind(_this,item.stid)}>
                                                        <div>
                                                            <span><Icon type="customer-service" theme="filled" /></span>    
                                                            <span>25万</span>  
                                                            <span><Icon type="play-circle" /></span>  
                                                        </div>
                                                        <img  src={item.imgurl}/>
                                                        <p>{item.name}</p>
                                                    </li>
                                                    )
                                            })
                                        }                   
                                </div>                               
                            </div>
                            <div className='tjw-l12'>
                                <h3>推荐MV</h3>                         
                            </div>
                            <div className='tjw-l22'>                               
                                <div className='tjw-l228'>
                                    {
                                        this.state.list1.map(function(item,i){
                                            return(
                                                <li key={i} onClick={_this.tap2.bind(_this)}>
                                                    <div>
                                                        <span><Icon type="customer-service" theme="filled" /></span>    
                                                        <span>25万</span>  
                                                        <span><Icon type="play-circle" /></span>  
                                                    </div>
                                                        <video src={item.url} controls='controls' poster={item.pic}></video>
                                                        <p>{item.name}</p>
                                                        <span>{item.singer}</span>
                                                </li>
                                                )
                                            })
                                    }                   
                                </div>                                                              
                            </div>

                            <div className='tjw-l13'>
                                <h3>新碟上架</h3>
                                <p>更多<Icon type="arrow-right" /></p>
                            </div>
                            <div className='tjw-l23'>                           
                                <div className='tjw-l238'>
                                    {
                                        this.state.list2.map(function(item,i){
                                            return(
                                                <li key={i} >
                                                    <div>
                                                        <span><Icon type="customer-service" theme="filled" /></span>    
                                                        <span>25万</span>  
                                                        <span><Icon type="play-circle" /></span>  
                                                    </div>
                                                    <img src={item.coverImgUrl}/>
                                                    <p>{item.title}</p>
                                                    <span></span>
                                                </li>
                                                )
                                            })
                                    }                   
                                </div>                               
                            </div>
                            {/* 歌单 */}
                            <div className='tjw-l14'>
                                <h3>榜单</h3>
                                <p>更多<Icon type="arrow-right" /></p>
                            </div>
                            <div className='tjw-l24'>
                                <div className='tjw-l24l'>
                                    <div onClick={_this.add1.bind(_this)}>
                                        <div>
                                            <img src={img6}/>
                                        </div>
                                            
                                        <div>
                                            <p>云音乐飙升榜</p>
                                            <span><Icon type="play-circle" /><Icon type="folder-add" /></span>

                                        </div>
                                    </div>
                           
                                    <Router>
                                        <div className='tjw-l24l1'>
                                            {
                                                this.state.list3.map(function(item,i){
                                                    return(                                                        
                                                        <li key={i}>
                                                        <Link to={"/find/detail"+item.id}>
                                                            <span>{i+1}</span>
                                                            <span>{item.name}</span>
                                                            <span>                                                                
                                                                <Icon type="play-circle" className='tjbf1' />                                                              
                                                                <Icon type="plus"/>
                                                                <Icon type="folder-add" />
                                                            </span>
                                                        </Link>
                                                        </li>
                                                    )
                                                })
                                            }                   
                                        </div>
                                    </Router>

                                    
                                </div>
                                <div className='tjw-l24c'>
                                    <div onClick={_this.add1.bind(_this)}>
                                        <div>
                                            <img src={img7}/>
                                        </div>
                                            
                                        <div>
                                            <p>云音乐新歌榜</p>
                                            <span><Icon type="play-circle" /><Icon type="folder-add" /></span>

                                        </div>
                                    </div>
                                    
                                    <Router>
                                        <div className='tjw-l24c1'>
                                            {
                                                this.state.list4.map(function(item,i){
                                                    return(                                                        
                                                        <li key={i} onClick={_this.tap4.bind(_this)}>
                                                            <Link to={"/find/detail"+item.id}>
                                                            <span>{i+1}</span><span>{item.name}</span><span><Icon type="play-circle" className='tjbf1' /><Icon type="plus" /><Icon type="folder-add" /></span>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }                   
                                        </div>
                                    </Router>
                                </div>
                                <div className='tjw-l24r'>
                                    <div onClick={_this.add1.bind(_this)}>
                                        <div>
                                            <img src={img8}/>
                                        </div>
                                            
                                        <div>
                                            <p>网易原创歌曲榜</p>
                                            <span><Icon type="play-circle" /><Icon type="folder-add" /></span>

                                        </div>
                                    </div>

                                    <Router>
                                        <div className='tjw-l24r1'>
                                            {
                                                this.state.list4.splice(20,20).map(function(item,i){
                                                    return(                                                        
                                                        <li key={i} onClick={_this.tap4.bind(_this)}>
                                                        <Link to={"/find/detail"+item.id}>
                                                        <span>{i+1}</span><span>{item.name}</span><span><Icon type="play-circle" className='tjbf1' /><Icon type="plus" /><Icon type="folder-add" /></span>
                                                        </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                            <li><span>更多</span><span><Icon type="play-circle" className='tjbf1' /><Icon type="plus" /><Icon type="folder-add" /></span></li>                   
                                        </div>
                                    </Router>
                                </div>
                            </div>

                        </div>
                        </div>
                            <div className='tj-footer'>
                                <img src={img9}/>
                            </div>
                            {/* 回顶部 */}
                            <div id='tj-top'>
                                <span><Icon type="up" /></span>
                                <p>TOP</p>
                            </div>
                    </div>

                </div>
            )
        }

    componentDidMount(){
        var _this=this;
        //轮播图’
        $.ajax({
            type:"get",
            url:"http://39.96.216.56/yun/lunbo.do",
            dataType:'json',
            async:true,
            success:function(data){
               
                var arr=[];
                for(var i=0;i<data.info.length;i++){
                    arr.push(data.info[i].imgurl)
                }
                _this.setState({banner:arr}) 
            }

        })

      /*   //test
        $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/findmusicsize.do",
            async:true,
            dataType:'json',
            data:{size:"10"},
            success:function(data){
               console.log(data.info,"there")
            }
        })
 */
        //list1
        $.ajax({
            type:'get',
            url:"http://39.104.79.34/yun/sheetlist.do",
            async:true,
            dataType:'json',
            data:{count:"8"},
            success:function(data){
               console.log(data)
                _this.setState({list:data.info})
            }
        })
//mv列表
        $.ajax({
            type:'get',
            url:"https://api.bzqll.com/music/netease/topMvList",
            async:false,
            data:{key:579621905,limit:4},
            dataType:'json',
            success:function(data){
               
                _this.setState({list1:data.data})
            }
        })

        $.ajax({
            type:'get',
            url:'https://api.bzqll.com/music/netease/highQualitySongList',//9
            async:false,
            dataType:'json',
            data:{key:579621905,limit:4,cat:'流行'},
            success:function(data){
                // console.log(data.data.playlists)
                _this.setState({list2:data.data.playlists})
            }
        })
        //歌单 飙升榜
        $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/findhotmusic.do",
            async:true,
            dataType:'json',
            data:{size:'15'},
            success:function(data){
                _this.setState({list3:data.info}) 
             
            }
        })
        //新歌榜
        $.ajax({
            type:'get',
            url:"http://39.96.216.56/yun/music/findnewmusic.do",
            async:true,
            dataType:'json',
            data:{size:'100'},
            success:function(data){
               
                _this.setState({list4:data.info})
            }
        })
/* //原创榜
        $.ajax({
            type:'get',
            url:"https://api.bzqll.com/music/netease/songList",
            async:true,
            dataType:'json',
            data:{key:579621905,limit:10,id:988690134},
            success:function(data){
                _this.setState({list5:data.data.songs})
            }
        }) */
        $(function(){
            /* $('#tj-top').click(function(){
                console.log('55') 
                $('html,body').stop().animate({"scrollTop":0},500);
                               
            }) */
            /* 回顶部 */
            $("#tj-top").click(function(){
                $("html,body").stop().animate({"scrollTop":0},500);

            });
            $(window).scroll(function(){
                var scroll=$(document).scrollTop();
                if(scroll>600){
                    $("#tj-top").fadeIn();
                }else{
                    $("#tj-top").fadeOut();
                }
            })
            
            
            
        })
        
    }
    
    }

export default Tuijian;