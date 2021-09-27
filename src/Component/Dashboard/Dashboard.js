import { Component } from "react";
import { Tab, Row, Col, Nav, TabContainer, TabPane, TabContent } from "react-bootstrap";
import DPWatchlist from "./DPWatchlist";
import IndexWatch from "./IndexWatch";
import MyWatchlist from "./MyWatchlist";

class Dashboard extends Component{
    render(){
        
        return(
            
            <div className="wrapper containerMargin">
                <h4>Welcome {localStorage.getItem('fullname')}</h4>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <h5 className="custom-head">Your Watchlist</h5>
                        <Nav.Item >
                        <Nav.Link eventKey="first" >DP Watchlist</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Index Watch</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">My Watchlist</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" >
                        <DPWatchlist/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <IndexWatch/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <MyWatchlist/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Dashboard