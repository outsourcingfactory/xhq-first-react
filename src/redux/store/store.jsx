import thunkMiddleware from 'redux-thunk'  //导入redux-thunk 处理异步数据流
import {createLogger } from 'redux-logger'  //打印一些log
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from '../reducers/index';
let loggerMiddleware = createLogger();
// 设置调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//设置中间件 主要处理异步数据流
const enhancer=composeEnhancers(
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
);

//创建store
// let store=createStore(reducers,enhancer);
let store=createStore(reducers, applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
));

export default store;
