

import { useAuth } from '../Contexts/AuthContext';
import './nav-bar.component.css';
import { useNavigate } from 'react-router-dom';
export function NavBarComponent() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();


    const handleLogout = () =>{
        logout();
        navigate('/login');
    }

    const handleMyRequests = () => {
        navigate('/student/requests');
    }

    const redirectToAdminConsole = () =>{
        navigate('/admin/console')
    }

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
                                src='/logo.svg'
                                width="60"
                                height="60"
                                alt="University Inventory Logo"
                            />
                        </span>
                    </div>
                    <div className="nav-bar-logo-header" >
                        <h3>University Inventory</h3>
                    </div>
                </div>
                <div className="nav-bar-searchbar-root">
                    <div className="nav-bar-searchbar" >
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light button-border " type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="button-cart">
                        <button className="btn btn-outline-light button-border "
                            onClick={()=> navigate('/cart')}
                        >
                                <i className="bi bi-cart"></i>
                        </button>
                    </div>
                    <button className="btn btn-dark nav-bar-profile-icon" 
                        data-bs-toggle="modal"
                        data-bs-target="#profileModal"
                        onClick={{}}
                    >
                       <i className="bi bi-person-circle profileicon "></i>
                    </button>
                </div>

            </div>


            <div className="modal fade" id="profileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Profile</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                            <br />
                            <br />
                            <h4>{user.email}</h4>
                            <br />
                            <br />
                            <p><strong>Role:</strong>  {user.role}</p>
                            <br />
                            
                            <button type="button" className="btn btn-outline-light"
                                data-bs-dismiss="modal"
                                onClick={handleMyRequests}
                            >My Requests</button>

                            <button type="button" className="btn btn-outline-light"
                                data-bs-dismiss="modal"
                                onClick={{}}
                            >Admin Console</button>
                             


                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-danger" data-bs-dismiss="modal"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NavBarComponent;