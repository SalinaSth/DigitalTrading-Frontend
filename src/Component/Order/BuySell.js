import { Component } from "react";

class BuySell extends Component{
    render(){
        return(
            <div className="container-xl">
                <div className="custom-opt">
                    <input type="radio" name="Continuous" value="Continuous" className="radiobtn"/> Continuous &nbsp;
                    <input type="radio" name="preopen" value="Preopen" className="radiobtn"/> Preopen &nbsp;
                    <input type="radio" name="oddlot" value="Oddlot" className="radiobtn"/> Odd lot &nbsp;
                    <input type="radio" name="sp" value="Special Preopen" className="radiobtn"/> Special Preopen &nbsp;
                </div>
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
                                <tr>
                                    <td>DTS</td>
                                    <td>1890.90</td>
                                    <td>1896.99</td>
                                    <td>+13.6</td>
                                    <td>+0.88</td>
                                </tr>
                                <tr>
                                    <td>DTS</td>
                                    <td>1890.90</td>
                                    <td>1896.99</td>
                                    <td>+13.6</td>
                                    <td>+0.88</td>
                                </tr>
                                <tr>
                                    <td>ENSIND</td>
                                    <td>1890.90</td>
                                    <td>1896.99</td>
                                    <td>+13.6</td>
                                    <td>+0.88</td>
                                </tr>
                                <tr>
                                    <td>MICRFIMD</td>
                                    <td>1890.90</td>
                                    <td>1896.99</td>
                                    <td>+13.6</td>
                                    <td>+0.88</td>
                                </tr>
                                <tr>
                                    <td>DENTSLIN</td>
                                    <td>1890.90</td>
                                    <td>1896.99</td>
                                    <td>+13.6</td>
                                    <td>+0.88</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuySell