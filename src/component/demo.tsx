import React from 'react'; 
import './demo.scss';
import {connect} from 'react-redux';
import {DEMO_REGION} from '../reducer/reducer_region'
import { demoGetApi,demoGet } from '../reducer/demo_reducer/actions';
export class Demo extends React.Component{ 
    constructor(props:any){ 
        super(props)
    }

    componentDidMount(){    
        //this.props.demoGetFn();
        this.props.demoGetApiFn();
    }

    list=()=>{  
       
        let list =this.props.getValue.map(item=>{ 
            
            return( 
                <li key={item.id}>{item.title}</li>
            )
        })

        return list;
        
    }

    render(){ 
        
        return( 
            <div className="react-demo">
                <p className="demo-name">This is React-CLI</p>
                <p>接口返回的数据</p>
                <ul>
                    {   
                        this.props.getValue!==undefined ?
                        this.list()
                        :
                        null
                    }
                </ul>
            
            </div>
        )
    }
}

const mapStateToProps=(state={},ownProps={})=>{   
    window.state=state;
    const attrState = state[DEMO_REGION];
    
    return {    
        getValue : attrState.getApi
    }
}

const mapDispatchToProps=(dispatch:any)=>{   
    return{ 
        demoGetApiFn:resparams=>{    
           
            dispatch(demoGetApi(resparams))
        },
        demoGetFn:()=>{ 
            dispatch(demoGet());
        }
    }
}

export const DemoView = connect(mapStateToProps,mapDispatchToProps)(Demo)
