import { Component } from "react";
import { Tab, Row, Col, Nav, Card } from "react-bootstrap";
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
                    <Col sm={7}>
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
                    <Col sm={3}>
                        <Card className="dashCard shadow" style={{width: 'auto', marginBottom:"10px"}}>
                            <Card.Body>
                                <Card.Subtitle>My Trade Summary</Card.Subtitle>
                                <Card.Title style={{margin:"10px"}}>NPR. 0.00</Card.Title>
                                <Card.Subtitle>Total Turnover</Card.Subtitle>
                                <Row>
                                    <Col sm={6}>
                                        <Card.Text>Traded Shares</Card.Text>
                                        <Card.Text>Transactions</Card.Text>
                                        <Card.Text>Scripts Traded</Card.Text>
                                        <Card.Text>Buy Count</Card.Text>
                                        <Card.Text>Sell Count</Card.Text>
                                    </Col>
                                    <Col sm={6}>
                                        <Card.Text>0</Card.Text>
                                        <Card.Text>0</Card.Text>
                                        <Card.Text>0</Card.Text>
                                        <Card.Text>0</Card.Text>
                                        <Card.Text>0</Card.Text>
                                    </Col>
                                </Row>
                                
                                {/* .bind: tyo parameter pani liyera jane */}
                               
                            </Card.Body>
                        </Card>  
                        <Card className="dashCard shadow" style={{width: 'auto'}}>
                            <Card.Body>
                                <Card.Subtitle>My Collateral Summary</Card.Subtitle>
                                <Card.Title style={{margin:"10px"}}>NPR. 0.00</Card.Title>
                            </Card.Body>
                        </Card>  
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Dashboard