import { Component } from "react";
import Switch from "react-switch";

class BuySell extends Component{
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
        if (this.state.checked === true) {
            var obtn=
            <button className="btn btn-md btn-block">Sell</button> 
        }else{
            var obtn=
            <button className="btn btn-md btn-block">Buy</button>
            
        }
        return(
            <div className="container">
                <div className="custom-opt">
                    <div class="form-row ">
                        <input type="radio" value="Continuous" name="buy" checked={true}
                            onChange={this.onValueChange} /> Continuous &nbsp;
                        <input type="radio" value="Preopen" name="buy" checked={true}
                            onChange={this.onValueChange} /> Preopen &nbsp;
                        <input type="radio" value="OddLot" name="buy" checked={true}
                            onChange={this.onValueChange} /> Odd Lot &nbsp;
                        <input type="radio" value="SpecialPreopen" name="buy" checked={true}
                        onChange={this.onValueChange} /> Special Preopen &nbsp;

                        <label  style={{float:"right"}}>
                            <label>&nbsp; Buy &nbsp;</label>
                            <Switch onChange={this.onValueChange} checked={this.state.checked} onColor="#86d3ff" 
                            onHandleColor="#2693e6" handleDiameter={18} uncheckedIcon={false} checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={18} width={48} className="react-switch" id="material-switch" />
                            <label>&nbsp; Sell &nbsp;</label>
                        </label>
                    </div> 
                </div>

                <div className="form-row" style={{marginTop:"10px", color:"#555555"}}>
                    <label><b>Product Type: &nbsp;</b></label>
                    <input type="radio" value="CNC" name="productType" checked={true}
                        onChange={this.onValueChange} /> CNC &nbsp;&nbsp;&nbsp;&nbsp;
                    <label><b>Order Type: &nbsp;</b></label>
                    <input type="radio" value="LMT" name="orderType" checked={true}
                        onChange={this.onValueChange}/> LMT &nbsp;
                    <input type="radio" value="MKT" name="orderType" checked={true}
                        onChange={this.onValueChange} /> MKT

                    <label style={{float:"right", marginLeft:"10px"}}><b>Code: &nbsp;</b>83770</label>
                    <label style={{float:"right"}}><b>ClientName: &nbsp;</b>{localStorage.getItem('fullname')}</label>
                </div>

                <div className="form-row row" style={{marginTop:"10px", color:"#555555"}}>
                    <div className="col-md-2">
                        <p><b>INST&nbsp;</b></p>
                        <select name="branchName" className="browser-default custom-select form-control" 
                            value="branchName" onChange={this.onValueChange}>
                            <option>EQ</option>
                            <option >TMS</option></select>
                    </div>
                    <div className="col-md-2">
                        <p><b>SYMBOL&nbsp;</b></p>
                        <input type="text" className="form-control" name="symbol" placeholder="Enter Symbol" 
                        onChange={this.onValueChange} />
                    </div>
                    <div className="col-md-2">
                        <p><b>QTY&nbsp;</b></p>
                        <input type="text" className="form-control" name="qty" placeholder="Enter QTY" 
                        onChange={this.onValueChange} />
                    </div>
                    <div className="col-md-2">
                        <p><b>Price&nbsp;</b></p>
                        <input type="text" className="form-control" name="price" placeholder="Price" 
                        disabled={true} onChange={this.onValueChange} />
                    </div>
                    <div className="col-md-2">
                        <p><b>Validity&nbsp;</b></p>
                        <input type="text" className="form-control" name="validity" placeholder="Validity" 
                        disabled={true} onChange={this.onValueChange} />
                    </div>
                    <div className="col-md-2">
                        <p><b>Valid Till&nbsp;</b></p>
                        <input type="text" className="form-control" name="valid" placeholder="Valid date" 
                        disabled={true} onChange={this.onValueChange} />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-9 table-responsive">
                        <div className="table-wrapper">
                            <table className="table table-hover" style={{marginTop:'20px'}}>
                                <thead  style={{color:'#027961'}}>
                                    <tr>
                                        <th>LTP</th>
                                        <th>LOW</th>
                                        <th>HIGH</th>
                                        <th>OPEN</th>
                                        <th>D HIGH</th>
                                        <th>D LOW</th>
                                        <th>AVG Price</th>
                                        <th>Pre Close</th>
                                        <th>52W HIGH</th>
                                        <th>52W LOW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DTS</td>
                                        <td>1890.90</td>
                                        <td>1896.99</td>
                                        <td>+13.6</td>
                                        <td>+0.88</td>
                                        <td>DTS</td>
                                        <td>1890.90</td>
                                        <td>1896.99</td>
                                        <td>+13.6</td>
                                        <td>+0.88</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3" style={{marginTop:"20px"}}>
                        {obtn}
                        &nbsp;<button className="btn btn-md btn-block">Cancel</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 table-responsive">
                        <div className="table-wrapper cust-tbl">
                            <label style={{marginTop:"20px", color:"#298049"}}><b>Top 3 BUY</b></label>
                            <table className="table table-striped table-hover">
                                <thead  style={{color:'#027961'}}>
                                    <tr>
                                        <th>Order</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>290</td>
                                        <td>450</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>220</td>
                                        <td>340</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>320</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3 table-responsive">
                        <div className="table-wrapper">
                        <label style={{marginTop:"20px", color:"#f5425a"}}><b>Top 3 SELL</b></label>
                            <table className="table table-striped table-hover">
                                <thead  style={{color:'#027961'}}>
                                    <tr>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>378</td>
                                        <td>280</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>350</td>
                                        <td>266</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>328</td>
                                        <td>210</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginTop:"20px"}}>
                        {/* <button className="btn btn-md btn-block">Buy</button> &nbsp; 
                        <button className="btn btn-md btn-block">Cancel</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default BuySell