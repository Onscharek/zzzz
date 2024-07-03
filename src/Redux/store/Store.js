// src/redux/store.js
import { createStore } from 'redux';
import reducer from '../reducer/ListProduct';

const store = createStore(reducer);

export default store;
