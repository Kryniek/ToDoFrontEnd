import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'typeface-quicksand';

import './css/index.css';
import App from './component/App';

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

dotenvExpand(dotenv.config());

ReactDOM.render(<App />, document.getElementById('root'));