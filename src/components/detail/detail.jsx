import React,{Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Hello from '../home/home';
class Detail extends Component{
    constructor(props){
        super(props); //继承
        this.state={
        }; //初始化一些数据
    }
    //在组件初始化的时候调用
    componentDidMount(){
        // this.reqQueryAdvanceOrder()
        console.log(this.props.history.location.state);
    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    //return 返回的是虚拟dom结构
    render(){
        return (
            <div>this is detail page
                <div>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/detail/hello"  component={Hello}/>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default Detail;

