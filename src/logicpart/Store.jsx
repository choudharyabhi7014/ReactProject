import { createStore } from 'redux';
import { combine } from './CartReducer';
const store = createStore(combine);

export default store;
