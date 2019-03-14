import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import firebase from 'firebase/app';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";

//This renders the navigation bar used for all components other than the map. It handles 
// routing to different pages and can sign users out of their account. 
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    // Collapse the nav bar in smaller screen 
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    // Handles sign out for users 
    handleSignOut = () => {
        firebase.auth().signOut()
    }

    render() {
        return (
            <div>
                <MDBNavbar id="navbar" color="indigo" dark expand="md" >
                    <MDBNavbarBrand>
                        <NavLink to="/" ><strong className="white-text">QuickStops</strong></NavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav center="true" className="white-text">
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <NavLink to='/' className="nav-link">Home</NavLink>
                                {/* <a href="./App.js" className="nav-link">Find</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to='/find' className="nav-link">Find</NavLink>
                                {/* <a href="./App.js" className="nav-link">Find</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to='/About' className="nav-link">About</NavLink>
                                {/* <a href="" className="nav-link">Saved</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to='/saved' className="nav-link">Saved</NavLink>
                                {/* <a href="" className="nav-link">About</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <button className="btn btn-warning float-right" onClick={this.handleSignOut}> Sign Out</button>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}