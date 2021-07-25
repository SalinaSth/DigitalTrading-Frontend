import { Component } from "react";
import Register from "../Authbase/Register";
import {Route, Link} from 'react-router-dom';
class Container extends Component{
    render(){
        return(
            <div className="container-fluid" style={{width: "100%"}}>
            <div className="row">
                 <div className="col-md-12" style={{width: "100%", margin: "0", padding:"0"}}>
                    
                     <Route path='/register' component={Register}/>
                     {/* <Route path='/login' component={Login}/> */}
                     
                  </div>
             </div> 
         </div>
        )
    }
} 

export default Container