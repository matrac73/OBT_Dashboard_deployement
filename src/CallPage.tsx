import React from 'react';
import { Container, Row, Col, Spinner, Navbar, Nav, Button } from 'react-bootstrap';

import './App.css';
import DashboardBlock from './components/DashboardBlock';
import Detail from './components/Detail';

export interface Measurements {
  label: string,
  dataPoints: number[],
  color: string,
}

export const dataColors = { blue: '#3B82F6', green: '#10B981' }

interface DashboardProps { }

interface DashboardState {
  loadingGcp: boolean,
  loadingGreespector: boolean,
  gcpData: Measurements,
  usersData: Measurements,
  dates: string[],
  showDetails: boolean,
  blockDetailShortName: string,
} 

export default class CallPage extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      loadingGcp: true,
      loadingGreespector: true,
      gcpData: { label: 'GCP', dataPoints: [], color: '#3B82F6' },
      usersData: { label: 'user devices', dataPoints: [], color: '#10B981' },
      dates: [],
      showDetails: false,
      blockDetailShortName: ''
    };

    this.showDetailFunction = this.showDetailFunction.bind(this);
  }

  showDetailFunction(show: boolean, blockShortName: string) {
    if (show == false) {
      this.setState({ showDetails: show, blockDetailShortName: '' });
    } else {
      this.setState({ showDetails: show, blockDetailShortName: blockShortName });
    }
  }

  render() {
    if (this.state.showDetails) {
      // get details of the block to show
      let shortName = this.state.blockDetailShortName;
      // put switch statement here
      switch (shortName) {

        case "Specialist - Business Viability":
          // show this block
          return (
            <Detail showDetail={this.showDetailFunction} title="Specialist - Business Viability">
                <Row>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 1</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant1@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 2</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant2@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 3</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant3@encore.com</Row>
                    </Col>
                </Row>
            </Detail>
          );

        case "Specialist - Synergy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Specialist - Synergy">
                <Row>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 1</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant1@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 2</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant2@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 3</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant3@encore.com</Row>
                    </Col>
                </Row>
            </Detail>
          );

        case "Business Plan Reviewer":
          return (
            <Detail showDetail={this.showDetailFunction} title="Business Plan Reviewer">
              {/* <img src="media_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Human Ressources":
          return (
            <Detail showDetail={this.showDetailFunction} title="Human Ressources">
              {/* <CastRulesTable colNames={castRulesColNames} lines={castRulesLines} /> */}
            </Detail>
          );

        case "Customer Acquisition Strategy":
          return (
            <Detail showDetail={this.showDetailFunction} title="Customer Acquisition Strategy">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Specialist - Organizational Structure":
          return (
            <Detail showDetail={this.showDetailFunction} title="Specialist - Organizational Structure">
                <Row>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 1</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant1@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 2</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant2@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 3</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant3@encore.com</Row>
                    </Col>
                </Row>
            </Detail>
          );

        case "Specialist - Operations Optimization":
          return (
            <Detail showDetail={this.showDetailFunction} title="Specialist - Operations Optimization">
                <Row>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 1</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant1@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 2</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant2@encore.com</Row>
                    </Col>
                    <Col sm>
                        <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                        <Row className="justify-content-md-center">Consultant 3</Row>
                        <Row className="justify-content-md-center">+65 1234 5678</Row>
                        <Row className="justify-content-md-center">consultant3@encore.com</Row>
                    </Col>
                </Row>
            </Detail>
          );

        case "Accounting Compliance":
          return (
            <Detail showDetail={this.showDetailFunction} title="Accounting Compliance">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

        case "Legal":
          return (
            <Detail showDetail={this.showDetailFunction} title="Legal">
              {/* <img src="decision_making_picture.png" className="img-fluid m-1" /> */}
            </Detail>
          );

      }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src="/Logo.png" height={25} /> Organisation Belt Toolkit (demo)</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Settings</Nav.Link>
                        <Nav.Link href="/">Back to Main</Nav.Link>
                        <Nav.Link href="/login">Log out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Row className="justify-content-md-center">
                <Col sm={12} md={4} className="p-2">
                    <DashboardBlock title="Specialist - Business Viability" shortName="Specialist - Business Viability" helpText="Details about Specialist - Business Viability" showDetail={this.showDetailFunction}>
                        <Row>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 1</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant1@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 2</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant2@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 3</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant3@encore.com</Row>
                            </Col>
                        </Row>
                    </DashboardBlock>

                    <DashboardBlock title="Specialist - Synergy" shortName="Specialist - Synergy" helpText="Details about Specialist - Synergy" showDetail={this.showDetailFunction}>
                        <Row>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 1</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant1@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 2</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant2@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 3</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant3@encore.com</Row>
                            </Col>
                        </Row>
                    </DashboardBlock>

                </Col>
                <Col sm={12} md={4} className="p-2">

                    <DashboardBlock title="Specialist - Organizational Structure" shortName="Specialist - Organizational Structure" helpText="Details about Specialist - Organizational Structure" showDetail={this.showDetailFunction}>
                        <Row>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 1</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant1@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 2</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant2@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 3</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant3@encore.com</Row>
                            </Col>
                        </Row>
                    </DashboardBlock>

                    <DashboardBlock title="Specialist - Operations Optimization" shortName="Specialist - Operations Optimization" helpText="Details about Specialist - Operations Optimization" showDetail={this.showDetailFunction}>
                        <Row>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 1</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant1@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 2</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant2@encore.com</Row>
                            </Col>
                            <Col sm>
                                <Row className="justify-content-md-center"><img src="contact_icon.png" className="img-fluid m-1" /></Row>
                                <Row className="justify-content-md-center">Consultant 3</Row>
                                <Row className="justify-content-md-center">+65 1234 5678</Row>
                                <Row className="justify-content-md-center">consultant3@encore.com</Row>
                            </Col>
                        </Row>
                    </DashboardBlock>
                </Col>
            </Row>
        </ div>
    );
  }
}