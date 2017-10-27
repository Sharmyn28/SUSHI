import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';
import Home from './Home';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
// import {dishes} from './dishes'
import {HashRouter, Switch, Route} from 'react-router-dom'

const Index = () => (
   <Provider store={store}>
      <HashRouter>
      {/* <Carousel dishes={dishes} /> */}
         <Switch>
            <Route  exact path = "/" component={Home}/>
            <Route  exact path = "/home" component={Home}/>
            <Route  exact path = "/carousel" component={Carousel}/>
          </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
