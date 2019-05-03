import * as reducerRegion from './reducer_region';

import { reducer as demoReducer } from './demo_reducer/reducer';

import { combineReducers } from 'redux';

const reducers={};

reducers[reducerRegion.DEMO_REGION] = demoReducer;

const rootReducer = combineReducers(reducers);

export { rootReducer }