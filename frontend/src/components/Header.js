import {Navbar, Nav, Container, NavDropdown, Badge} from 'react-bootstrap';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'; 
import {useNavigate} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
   const { userInfo } = useSelector((state) => state.auth);

   const dispatch = useDispatch();
   const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

   const logoutHandler = async () => {
    try { 
       await  logoutApiCall().unwrap();
       dispatch(logout());
       navigate('/');
    } catch (err) {
     console.log(err);
    }
   }

    return (
     <header>
        <Navbar bg='dark' variant= 'dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>Prince & Pearl Akyeampong Family</Navbar.Brand> 
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navebar-nav' />
                <Navbar.Collapse id='basic-navbar.nav'>
                    <Nav className='ms-auto'>
                       {userInfo ? (
                        <>
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>
                                   Update Profile
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <LinkContainer to='/history'>
                                <NavDropdown.Item>
                                    History 
                                </NavDropdown.Item>                          
                            </LinkContainer>   

                            <LinkContainer to='/princedaddy'>
                                <NavDropdown.Item>
                                    Daddy Prince
                                </NavDropdown.Item>                          
                            </LinkContainer>   

                            <LinkContainer to='/pearlmama'>
                                <NavDropdown.Item>
                                    Mama Pearl
                                </NavDropdown.Item>                          
                            </LinkContainer>   

                            <LinkContainer to='/Priscilla'>
                                <NavDropdown.Item>
                                    Priscilla Sedinam
                                </NavDropdown.Item>                          
                            </LinkContainer>   

                            <LinkContainer to='/Princejr'>
                                <NavDropdown.Item>
                                    Prince Selassie
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <LinkContainer to='/princeyaamaffuo'>
                                <NavDropdown.Item>
                                    Prince Yaamaffuo
                                </NavDropdown.Item>                          
                            </LinkContainer>   

                            <LinkContainer to='/petrayaanietta'>
                                <NavDropdown.Item>
                                    Petra Yaanietta
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <LinkContainer to='/princekatansa'>
                                <NavDropdown.Item>
                                    Prince Katansa
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <LinkContainer to='/gallery'>
                                <NavDropdown.Item>
                                    Family Photos
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <LinkContainer to='/news'>
                                <NavDropdown.Item>
                                    Family News
                                </NavDropdown.Item>                          
                            </LinkContainer>

                            <NavDropdown.Item onClick={ logoutHandler }>
                                Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                        </>
                       ) : (
                        <>
                        <LinkContainer to='/login'>
                        <Nav.Link>
                         <FaSignInAlt />Sign In
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                        <Nav.Link>
                        <FaSignOutAlt />Sign Up
                        </Nav.Link>
                        </LinkContainer>
                        </>

                       ) }
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     </header>

    );
};

export default Header;