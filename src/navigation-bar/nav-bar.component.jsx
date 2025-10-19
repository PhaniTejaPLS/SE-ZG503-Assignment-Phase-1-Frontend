import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav-bar.component.css';

export function NavBarComponent() {
    return (
        // <Navbar className="bg-body-tertiary justify-content-between header-padding" >
        //     <Navbar className="bg-body-tertiary">
        //         <Container>
        //             <Navbar.Brand href="#home">
        //                 <img
        //                     src="src/assets/univ-logo.png"
        //                     width="60"
        //                     height="60"
        //                     className="d-inline-block align-top"
        //                     alt="React Bootstrap logo"
        //                 />
        //             </Navbar.Brand>
        //         </Container>
        //     </Navbar>
        //     <Form inline>
        //         <Row xxl="25"  >
        //             <Col xxl="15">
        //                 <Form.Control
        //                     type="text"
        //                     placeholder="Search"
        //                     className="auto"
        //                 />
        //             </Col>
        //             <Col xs="auto">
        //                 <Button type="submit">
        //                     <i className="bi bi-search"></i>
        //                 </Button>
        //             </Col>
        //         </Row>
        //     </Form>
        //     <Navbar className="bg-body-tertiary ">
        //         <Container>
        //             <Navbar.Brand href="#home" className="profile-icon">
        //                 <span className="me-3 fs-5">Username</span>
        //                 <i className="bi bi-person-circle"></i>
        //             </Navbar.Brand>
        //         </Container>
        //     </Navbar>

        // </Navbar>

        <>
            <div className="nav-bar-parent">
                <div className="nav-bar-logo-root" >
                    <div className="nav-bar-logo">
                        <span>
                            <img
                                src="src/assets/logo.svg"
                                width="60"
                                height="60"></img>
                        </span>
                    </div>
                    <div className="nav-bar-logo-header" >
                        <h3>University Inventory</h3>
                    </div>
                </div>
                <div className="nav-bar-searchbar-root">
                    <div className="nav-bar-searchbar" >
                        <form class="d-flex" role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light button-border " type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="nav-bar-profile-icon">
                       <i className="bi bi-person-circle profileicon "></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBarComponent;