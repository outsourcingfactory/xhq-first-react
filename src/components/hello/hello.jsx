import React,{Component} from 'react';
class Hello extends Component{
    constructor(props){
        super(props); //继承
        this.state={
        }; //初始化一些数据
    }
    //在组件初始化的时候调用
    componentDidMount(){
     console.log('hello jsx  run')
     console.log('state',this.state)
     console.log('props',this.props)
    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    //return 返回的是虚拟dom结构
    render(){
        let {usertoken}=this.props;
        return (
            <div onClick={()=>{
                this.props.actions.setUsertoken(Math.random())
                this.props.history.push({
                    pathname: '/',
                    state: {
                        id: 4
                    }
                })
                return false;
            }}>this is hello {usertoken}</div>
        );
    }
}

export default Hello;

