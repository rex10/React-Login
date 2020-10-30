import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';

const loggerMiddleware = createLogger()

export default createStore(rootReducers, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware 
        )
    );