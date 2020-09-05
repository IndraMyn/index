import React, { Fragment, useContext } from 'react'
import { Button, Navbar, Badge, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserInfoContext } from '../Context/UserInfoContext';

function NavbarPartial() {

    const [userInfo, setUserInfo] = useContext(UserInfoContext)

    return(
        <Fragment>
            <Navbar style={{background: '#b5681b', boxShadow: '0 1px 20px 1px #303030'}} expand="md" fixed="top">
                <Link to="/" className="mr-auto"><Button className="btn-hover-brown">Tokoku</Button></Link>
                {/* <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><Button className="btn-brown text-white">Home</Button></NavLink>
                    </NavItem>
                </Nav> */}
                <UncontrolledDropdown>
                    <DropdownToggle nav>
                        <Link to="/cart">
                            <Button outline className="btn-hover-brown btn-shadow mr-1">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <Badge color="danger"></Badge>
                            </Button>
                        </Link>
                    </DropdownToggle>
                </UncontrolledDropdown>
                {
                    (userInfo.login === true)?
                    (
                        <>
                            <UncontrolledDropdown>
                                <DropdownToggle nav>
                                    <Button outline className="btn-hover-brown btn-shadow">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Button>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to="/profil" className="dropdown-custom">
                                        <DropdownItem className="dropitem-custom">
                                            Profil
                                        </DropdownItem>
                                    </Link>
                                    <DropdownItem className="dropitem-custom">
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <a href="?" onClick={(e) => { 
                                        e.preventDefault() 
                                        setUserInfo({...userInfo, login: false})
                                    }} className="dropdown-custom">
                                        <DropdownItem className="dropitem-custom">
                                            Logout
                                        </DropdownItem>
                                    </a>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </>
                    ):
                    <>
                        <Link to="/login">
                            <Button className="btn-hover-brown">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="btn-hover-brown">
                                Daftar
                            </Button>
                        </Link>
                    </>
                }
            </Navbar>
        </Fragment>
    )
}

export default NavbarPartial