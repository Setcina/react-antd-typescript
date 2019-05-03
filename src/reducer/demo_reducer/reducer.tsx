import {GET_API} from './actionTypes';

export const getApiFn=(state,action)=>{ 
    console.log(action);
    return state;
}

export const actionMap={};
actionMap[GET_API] = getApiFn;

export const reducer = (state={},action)=>{ 
    if(actionMap.hasOwnProperty(action.type)){  
        return actionMap[action.type](state,action);

    }
    return state;
}