import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import {TableComponent} from './TableComponent';

function App() {
  return (
      <Provider store={store}>
        <TableComponent />
      </Provider>
  );
}

export default App;
