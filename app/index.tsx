import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'moonholdings.scss';

// Components
import App from './app';

const element = document.getElementById('app');

ReactDOM.render(<App compiler="TypeScript" framework="React" />, element);
