import * as React from 'react';
import {render} from 'react-dom';
import {DndProvider} from 'react-dnd';
import {Provider} from 'react-redux';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {App} from './components/app';
import {createStore} from './store/createStore';
import {Connection} from './services/Connection';
import {start} from './epics/epicActions';

const store = createStore({
    connection: new Connection(),
})
store.dispatch(start());

render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </Provider>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}
