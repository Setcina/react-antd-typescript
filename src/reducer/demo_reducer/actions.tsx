import * as actionTypes from './actionTypes';

import axios from 'axios';

export const demoGetApi=()=>{ 
    return dispatch=>{    
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{   
            const {data} = response;
            dispatch({   
                type:actionTypes.GET_API,
                params:data
            })        
        })
        .catch(error=>{ 

        })
    }

}

export const demoGet=()=>{  
    return{   
        type:actionTypes.GET_API,
        params:"niha"
    }
}