import { Component } from "react";
import { Tab, Row, Col, Nav, TabContainer, TabPane, TabContent, Container } from "react-bootstrap";
import BuySell from "./BuySell";
import Intraday from "./Intraday";
import OrderBook from "./OrderBook";
import OrderHistory from "./OrderHistory";

class Order extends Component{
    render(){
        return(
        <div className="wrapper containerMargin">
            
            <Tab.Container className="container-fluid" id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <h5 className="custom-head">Order Management</h5>
                    <Nav.Item >
                    <Nav.Link eventKey="first">Buy/Sell</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Intraday</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Order Book</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fourth">Order History</Nav.Link>
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
                    <BuySell/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Intraday/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <OrderBook/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <OrderHistory/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
        )
    }
}

export default Order