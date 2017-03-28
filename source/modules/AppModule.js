/**
 * author: Jeffrey Lanters
 * App Module bundles and loads.
 */

import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { App } from '../components/AppComponent';

require('../styles/Base.scss');

render(<App />, document.getElementById('app'));

FastClick.attach(document.body);