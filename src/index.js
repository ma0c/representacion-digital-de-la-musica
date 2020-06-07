import React, { createElement } from 'react';
import { render } from 'react-dom';

import { Slides } from "./slides";

const theme = {
    colors: {
        primary: 'white',
        secondary: 'black'
    },
    fonts: {
        header: '"Yanone Kaffeesatz", Helvetica, Arial, sans-serif',
        text: '"Yanone Kaffeesatz", Helvetica, Arial, sans-serif'
  }
};

render(createElement(Slides, {theme}), document.getElementById('root'));
