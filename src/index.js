import React from 'react';
import ReactDOM from 'react-dom';
import './global/index.less';
import App from './components/app';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
