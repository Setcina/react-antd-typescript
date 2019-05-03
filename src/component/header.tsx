import React from 'react'; 
import { Button } from 'antd';
import {connect} from 'react-redux';
import { demoGetApi } from '../reducer/demo_reducer/actions';
import './header.scss';
//import './header01.css';
interface HeadersProps{ 

}
class Headers extends React.Component<HeadersProps>{ 
    constructor(props:any){ 
        super(props);
        
    }
    
    componentDidMount(){    
        this.props.demoGetApiFn()
    }
    render(){   
        
        return( 
            <div>99999
                <div className="bg">????</div>
                <Button>9999</Button>
            </div>
        )

    }
} 

const mapStateToProps=(state,ownProps)=>{   
    window.state=state;
    return state;
}

const mapDispatchToProps=(dispatch)=>{   
    return{ 
        demoGetApiFn:resparams=>{    
            dispatch(demoGetApi(resparams))
        }
    }
}

export const HeadersView = connect(mapStateToProps,mapDispatchToProps)(Headers)