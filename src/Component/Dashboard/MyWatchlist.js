import { Component } from "react";
import { Link } from 'react-router-dom';
class MyWatchlist extends Component{
    render(){
        return(
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        
                        <table className="table table-striped table-hover" style={{marginTop:'30px'}}>
                            <thead  style={{color:'#027961'}}>
                                <tr>
                                    <th>Symbol</th>
                                    <th>LTP</th>
                                    <th>HIGH</th>
                                    <th>LOW</th>
                                    <th>OPEN</th>
                                    <th>CLOSE</th>
                                    <th>% Change</th>
                                </tr>
                            </thead>
                            <tbody>           
                                <tr>
                                    <td>NABIL</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>106.0</td>
                                    <td>-1.80</td>
                                </tr> 
                                <tr>
                                    <td>NABIL</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>106.0</td>
                                    <td>-1.80</td>
                                </tr>
                                <tr>
                                    <td>NABIL</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>106.0</td>
                                    <td>-1.80</td>
                                </tr>
                                <tr>
                                    <td>NABIL</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>106.0</td>
                                    <td>-1.80</td>
                                </tr>
                                <tr>
                                    <td>NABIL</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>104.8</td>
                                    <td>106.0</td>
                                    <td>-1.80</td>
                                </tr>                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyWatchlist