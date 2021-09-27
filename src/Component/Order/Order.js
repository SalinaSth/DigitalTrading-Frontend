import { Component } from "react";
import { Tab, Row, Col, Nav, TabContainer, TabPane, TabContent } from "react-bootstrap";
import BuySell from "./BuySell";

class Order extends Component{
    render(){
        return(
        <div className="wrapper containerMargin">
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                </Col>
                <Col sm={10}>
                <Tab.Content>
                    <Tab.Pane eventKey="first" >
                    <BuySell/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <BuySell/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <BuySell/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <BuySell/>
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