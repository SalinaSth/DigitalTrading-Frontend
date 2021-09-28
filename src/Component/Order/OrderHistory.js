import { Component } from "react";
import Switch from "react-switch";

class OrderHistory extends Component{
    constructor() {
        super();
        this.state = {
            buy:"",
            orderType:"",
            checked: false
        };
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(checked, event) {
        this.setState({
            checked,
            buy: event.target.value,
            orderType: event.target.value
        });
    }
    render(){
        return(
            <div className="container"> 
                <h4>Order Book</h4>
                <div className="cust-top row">
                    <div className= "col-md-4">
                        <label><b>Client Name/Code</b></label>
                        <p>{localStorage.getItem('fullname')}</p>
                    </div>
                    <div  className= "col-md-4">
                        <label><b>Client Name/Code</b></label>
                        <p>83700</p>
                    </div>

                    <div className="table-responsive">
                    <div className="table-wrapper">
                        <table className="table table-hover" style={{marginTop:'20px'}}>
                            <thead  style={{color:'#027961'}}>
                                <tr>
                                    <th>SN</th>
                                    <th>STATUS</th>
                                    <th>SYMBOL</th>
                                    <th>TYPE</th>
                                    <th>QTY</th>
                                    <th>PRICE</th>
                                    <th>REM QTY</th>
                                    <th>VALUE(Npr)</th>
                                    <th>Validity</th>
                                    <th>Valid Till</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td style={{color:"#06664e"}}>OPEN</td>
                                    <td>API</td>
                                    <td>BUY</td>
                                    <td>100</td>
                                    <td>180</td>
                                    <td>100</td>
                                    <td>18000.00</td>
                                    <td>Valid</td>
                                    <td>2021-7-10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderHistory