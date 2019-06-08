import './app.scss';
import * as React from 'react';
import {render} from 'react-dom';

render(
    <div className="app">Hey</div>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}
