import React,{Component} from 'react';
class Home extends Component{
    constructor(props){
        super(props); //继承
        this.state={
        }; //初始化一些数据
    }
    //在组件初始化的时候调用
    componentDidMount(){

    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    //return 返回的是虚拟dom结构
    render(){
        let {usertoken}=this.props;
        return (
        <div onClick={()=>this.props.history.push({
            pathname:'/hello',
            state:{
                id:3
            }
        })}>this is home page {usertoken}</div>
        );
    }
}

export default Home;

