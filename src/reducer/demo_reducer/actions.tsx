import * as actionTypes from './actionTypes';

import axios from 'axios';

export const demoGetApi=()=>{ 
    
    return dispatch=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{   
            console.log(response)
            return{   
                type:actionTypes.GET_API,
                params:response
            }
        
        })
        .catch(error=>{ 

        })
    }

}