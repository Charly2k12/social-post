import React from 'react';
import { render } from 'react-dom';
import test from './test.scss';

render(
  <h1 className="test">Hello World</h1>, 
  document.getElementById('test')
);

