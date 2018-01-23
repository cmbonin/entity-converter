import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index/component';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('app')
  );
});
