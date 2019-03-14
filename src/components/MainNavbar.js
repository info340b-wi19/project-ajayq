import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


export default class MainNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    } 

    render() {
        //
        // let signInOrOut = this.props.signedIn ? <NavLink to='/' className="nav-link">SignOut</NavLink> :
        // <NavLink to='/SignUp' className="nav-link">SignIn</NavLink>

        let aboutOrSaved = this.props.page == "about" ? <NavLink to='/saved' className="nav-link">Saved</NavLink> :
        <NavLink to='/' className="nav-link">About</NavLink>
        return (
            <div>
                <MDBNavbar id="navbar" color="indigo" dark expand="md" handleSignUp={this.handleSignUp}>
                    <MDBNavbarBrand>
                        <NavLink to="/"><strong className="white-text">QuickStops</strong></NavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav center="true" className="white-text">
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <NavLink to='/find' className="nav-link">Find</NavLink>
                                {/* <a href="./App.js" className="nav-link">Find</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/*signInOrOut*/}
                                <NavLink to='/SignUp' className="nav-link">SignIn</NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                {aboutOrSaved}
                                {/* <a href="" className="nav-link">About</a> */}
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}