import { Component } from "react";
import { Tab, Row, Col, Nav, Card } from "react-bootstrap";
import LoadCollateral from "./LoadCollateral";
import Payment from "./Payment";

class Collateral extends Component{
    render(){
        
        return(
            
            <div className="wrapper containerMargin">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <h5 className="custom-head">Collateral Management</h5>
                            <Nav.Item >
                            <Nav.Link eventKey="first" >Load Collateral</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Transaction</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Payment Settlement</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div className="cust-tab">
                            <div>
                                <label><b>DTS</b></label>
                                <p><b>2662.2</b></p>
                            </div>
                            <div>
                                <label><b>SENSIND</b></label>
                                <p><b>2662.2</b></p>
                            </div>
                            <div>
                                <label><b>Active Sessions</b></label><br/>
                                <label><b>Continuous</b></label>
                                <p><b>(9:00:00-17:00:00)</b></p>
                            </div>
                            <div>
                                <label><b>Turnover:17,628,900</b></label>
                                <label><b>Volume: 34,27,189</b></label>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" >
                        <LoadCollateral/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <LoadCollateral/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Payment/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                    
                </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Collateral