import { Component } from "react";
import { Link } from 'react-router-dom';
class DPWatchlist extends Component{
    render(){
        return(
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        
                        <table className="table table-striped table-hover" style={{marginTop:'30px'}}>
                            <thead  style={{color:'#027961'}}>
                                <tr>
                                    <th>Index Code</th>
                                    <th>Index value</th>
                                    <th>Prev Close</th>
                                    <th>Point Close</th>
                                    <th>% Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    //loop launa .map
                                    // this.state.bookings.map((booking) => { */}
                                        {/* return ( */}
                                            <tr>
                                                <td>somethings</td>
                                                <td>somethings</td>
                                                <td>somethings</td>
                                                <td>somethings</td>
                                                <td>somethings</td>
                                            </tr>
                                        {/* ) */}
                                    {/* ) */}
                                {/* } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default DPWatchlist