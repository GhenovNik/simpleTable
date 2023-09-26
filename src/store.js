import { createStore } from 'redux';
import { tableReducer } from './reducer';

export const store = createStore(tableReducer);
