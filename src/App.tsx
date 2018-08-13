
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import storeHelper from './helpers/storeHelper';
import { Main } from './Main';

declare let module: any

ReactDOM.render(
  <Provider store={storeHelper}>
    <Main />
  </Provider>,
  document.getElementById('root')
);


if (module.hot) {
    module.hot.accept();
}