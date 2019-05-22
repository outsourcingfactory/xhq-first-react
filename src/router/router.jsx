import React from 'react';
import {HashRouter, Route, Switch , Redirect} from 'react-router-dom';
import routerMap from './routerMap';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {
             routerMap.map((item,index)=>{
                    // if(item.path=='/detail'){
                    //      return  <React.Fragment key={item.id}>
                    //              <Route exact path="/detail" render={()=><Redirect to='detail/hello'></Redirect>}/>
                    //              <Route exact path="/detail/hello" component={item.component}/>
                    //           </React.Fragment>
                    //     }
                    return <Route exact path={item.path} key={item.id} component={item.component}/>
                })
            }
        </Switch>
    </HashRouter>
);
console.log('basicRoue',BasicRoute)
export default BasicRoute;

