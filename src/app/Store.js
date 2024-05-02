import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Counterslice';

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
});

export default store