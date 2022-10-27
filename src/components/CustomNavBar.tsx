import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class CustomNavBar extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><img src="/Star_Up_Logo.png" height={40} /> STARUP (deployed demo)</Navbar.Brand>
                        {/* <Nav className="me-auto">
                            <Nav.Link href={require("./OBT_report.pdf")} download="OBT_report">Export</Nav.Link>
                            <Nav.Link href="#home">Settings</Nav.Link>
                            <Nav.Link href="/callpage">Call a Consultant</Nav.Link>
                            <Nav.Link href="/login">Log out</Nav.Link>
                        </Nav> */}
                    </Container>
                </Navbar>
                <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href={require("./OBT_report.pdf")} download="OBT_report">Export</Nav.Link>
                        <Nav.Link href="#home">Settings</Nav.Link>
                        <Nav.Link href="/callpage">Call a Consultant</Nav.Link>
                        <Nav.Link href="/login">Log out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default CustomNavBar;