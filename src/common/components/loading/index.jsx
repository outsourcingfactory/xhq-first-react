import React,{Component} from 'react';
import style from './loading.scss';

class Loading extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    //在组件初始化的时候调用
    componentDidMount(){
        // this.reqQueryAdvanceOrder()
    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    render(){
        return (
            <div className={style['loading-container']}>
                <img src={require('../../../image/GIF.gif')} alt=""/>
            </div>
        )
    }
}

export default Loading
