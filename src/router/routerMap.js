import React from 'react';
import Loadable from 'react-loadable';
const Home = Loadable({
    // loader: ()=> import('../components/home/home'),
    loader: ()=> import('../redux/containers/home'),
    loading(){
        return <div>loading.......</div>
    }
});
const Detail = Loadable({
    loader: ()=> import('../components/detail/detail'),
    loading(){
        return <div>loading.......</div>
    }
});
const Pay = Loadable({
    loader: ()=> import('../components/pay/pay'),
    loading(){
        return <div>loading.......</div>
    }
});
const Hello = Loadable({
    loader: ()=> import('../redux/containers/hello'),
    // loader: ()=> import('../components/hello/hello'),
    loading(){
        return <div>loading.......</div>
    }
});
const User = Loadable({
    loader: () => import('../redux/containers/user'),
    loading(){
        return <div>this is loading....    </div>
    }
});

const routerMap=[
    {
     id:1,
     path:'/',
     component:Home,
     name:'Home',
     meta:{
         title:'home页'
     }
    },{
    id:2,
    path:'/detail',
    component:Detail,
    name:'Detail',
    meta:{
        title:'详情页'
    }
    },{
    id:3,
    path:'/hello',
    component:Hello,
    name:'Hello',
    meta:{
        title:'hello页'
    }
    },{
    id:4,
    path:'/pay',
    component:Pay,
    name:'Pay',
    meta:{
        title:'pay页'
    }
    },{
        id:5,
        path:'/user',
        component:User,
        name:'User',
        meta:{
            title:'User页'
        }
    }
];

export default routerMap
