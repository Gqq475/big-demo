import React from 'react';
import {render} from 'react-dom';

import './style/common.css';
import {Router,hashHistory} from 'react-router';
import routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
