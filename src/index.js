import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';
import Home from './Home';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom'

const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route  exact path ="/" component={Home}/>
            <Route  path ="/home" component={Home}/>
            <Route  path ="/carousel" component={Carousel}/>
          </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
