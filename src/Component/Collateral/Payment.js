import { Component } from "react";
import Switch from "react-switch";

class Payment extends Component{
    constructor() {
        super();
        this.state = {
           
            checked: false
        };
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(checked) {
        this.setState({
            checked,
            
        });
    }
    render(){
        return(
            <div className="container"> 
                <h4>Payment Settlement</h4>
                <div className="cust-top row cust-col">
                    <label><b>Client Name: {localStorage.getItem('fullname')}</b></label>
                    <div style={{float:"right"}}>
                    <input type="search" value="Search.." placeholder="Search..." style={{marginRight:"10px"}}/>
                    <input type="search" value="Client Code" placeholder="Search..." />
                    </div>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <table className="table table-hover">
                                <thead  style={{color:'#027961'}}>
                                    <tr>
                                        <th>SN</th>
                                        <th>Client Name</th>
                                        <th>Business Date</th>
                                        <th>Total Amount</th>
                                        <th>Amount Pending</th>
                                        <th>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{localStorage.getItem('fullname')}</td>
                                        <td>2021-9-17</td>
                                        <td>18290.00</td>
                                        <td>10</td>
                                        <td style={{color:"#06664e"}}>Payment_Due</td>
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

export default Payment