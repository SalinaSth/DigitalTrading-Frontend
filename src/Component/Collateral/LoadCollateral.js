import { Component } from "react";
import Switch from "react-switch";

class LoadCollateral extends Component{
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
                <h4>Load Collateral</h4>
                <div className="cust-top row cust-col">
                    <div className= "col-md-6 ">
                        <p>Total Collateral: NPR. 1,92,800</p>
                        <p>Utilized Collateral: NPR. 32,800</p>
                        <p>Available Collateral: NPR. 1,62,800</p>

                        <form>
                            <label><b>Bank</b></label>
                            <select name="Bank" className="browser-default custom-select form-control" 
                                value="Bank" onChange={this.onValueChange}>
                                <option>Connect IPS(CIPS)</option>
                                <option >TMS</option>
                                <option >EQ</option>
                            </select>
                           
                            <label><b>Amount</b></label>
                            <input type="number" placeholder="0000.00" className="form-control" />
                            <button type="submit" className="button btn" style={{marginRight:"10px"}}>Submit</button>
                            <button type="cancel" className="button btn">Cancel</button>
                        </form>
                    </div>
                    <div  className= "col-md-6">
                        <p><b>Client Name:</b></p>
                        <p>{localStorage.getItem('fullname')}</p>
                        <p>Client Code: 87700</p>

                        <form>
                            <label><b>Payment Type</b></label>
                            <input type="number" placeholder="Collateral payment" className="form-control" />
                           
                            <label><b>Remarks</b></label>
                            <input type="number" placeholder="Collateral deposited" className="form-control" />

                            <button type="submit" className="button btn">Refund</button>
                        </form>
                    </div>
                </div> 
            </div>
        )
    }
}

export default LoadCollateral