import React,{Component} from 'react';
class User extends Component{
    constructor(props){
        super(props); //继承

    }
    state={

    }
    //在组件初始化的时候调用
    componentDidMount(){
        console.log('hello jsx  run')
        console.log('state',this.state)
        console.log('props',this.props)
        // let {dispatch}=this.props;
        this.props.actions.getUserData()

    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    //return 返回的是虚拟dom结构
    render(){
        return (
            <div>this is user page</div>
        );
    }
}

export default User;

