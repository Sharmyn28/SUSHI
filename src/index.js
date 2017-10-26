import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkout from './checkout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Checkout />, document.getElementById('root'));
registerServiceWorker();
