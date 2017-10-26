import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';
import registerServiceWorker from './registerServiceWorker';
import {dishes} from './dishes'

ReactDOM.render(<Carousel dishes={dishes} />, document.getElementById('root'));
registerServiceWorker();
