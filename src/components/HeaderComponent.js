
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {Redirect} from 'react-router-dom';
import { auth, provider } from "../firebase";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
} from "reactstrap";
import LoginModal from "./LoginModal";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent",
    };
    this.signin=this.signin.bind(this);
    this.logout=this.logout.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white",
      });
    } else {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent",
      });
    } else {
      this.setState({
        color: "bg-white",
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch,
    });
  };
  signin() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.additionalUserInfo.profile);
        this.props.loginUser(result.additionalUserInfo.profile);
      })
      .catch((error) => alert(error.message));

  }
  logout(){
    this.props.logoutUser();
  }
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <NavbarBrand href="/home">Envision</NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="fa fa-search " />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <div className="notification d-none d-lg-block d-xl-block" />
                    <i className="fa fa-google-wallet " />
                    <p className="d-lg-none">Notifications</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Mike John responded to your email
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        You have 5 more tasks
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Your friend Michael is in town
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another notification
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another one
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                {this.props.auth.isAuthenticated === true ? (
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="photo">
                        <img
                          alt="..."
                          src="data:image/jpeg;base64,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"
                        />
                        {this.props.auth.user.displayname}
                      </div>
                      <b className="caret d-none d-lg-block d-xl-block" />
                      <p className="d-lg-none">Log out</p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          Profile
                        </DropdownItem>
                      </NavLink>
                      <DropdownItem divider tag="li" />
                      <NavLink tag="li">
                        <DropdownItem
                          onClick={this.logout}
                           className="nav-item"
                        >
                          
                            Log out
                        </DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <LoginModal
                    auth={this.props.auth}
                    loginUser={this.props.loginUser}
                  />
                )}
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Header;
