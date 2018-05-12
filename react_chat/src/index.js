import React from 'react';
import ReactDOM from 'react-dom';
// import './EventEmitter.min.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
