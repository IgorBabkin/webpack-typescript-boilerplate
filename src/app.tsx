import './app.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Board} from "./components/Board";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChessBishop} from '@fortawesome/free-solid-svg-icons'

library.add(faChessBishop)

render(
    <div className="app">
        <Board />
    </div>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}
