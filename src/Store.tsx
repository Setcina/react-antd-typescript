import { applyMiddleware,compose,createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducer/index';

const middlewares = [thunkMiddleware];

const storeEnhancers = compose( 
    applyMiddleware(...middlewares)
);

const win = window;

const storeEnhancers = compose( 
    applyMiddleware(...middlewares),
    win.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__() ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f)=>f,
)

export const store = createStore(rootReducer,{},storeEnhancers);