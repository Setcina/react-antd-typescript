import {GET_API} from './actionTypes';

export const getApiFn=(state,action)=>{ 
    
    const getApi = action.params;
    const newState = {...state,getApi:getApi};
    
    return newState;
}

export const actionMap={};
actionMap[GET_API] = getApiFn;

export const reducer = (state={},action)=>{ 
    if(actionMap.hasOwnProperty(action.type)){  
        return actionMap[action.type](state,action);

    }
    return state;
}