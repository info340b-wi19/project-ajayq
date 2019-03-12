import React, { Component } from 'react';
import kathy from './img/kathy.jpg'
import ajay from './img/ajay.jpg'
import jv from './img/jv.jpg'
import matthew from './img/matthew.jpg'
import foodMain from './img/foodtable.jpg'
import Image from 'react-bootstrap/Image';
//import Route from './Route';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";

// import App from './App'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import App from './App.js';

export default class About extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={AboutPage} />
                <Route exact path='/find' component={App} />
            </Switch>
        )
    }
}

class Navigation extends Component {
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
        return (
            <div>
                <MDBNavbar id="navbar" color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">QuickStops</strong>
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
                                {/* <a href="" className="nav-link">Saved</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/* <a href="" className="nav-link">About</a> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/* <a href="" className="nav-link text-nowrap">Sign In</a> */}
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="box">
                    <Image id='main-photo' alt="Cups of Beers Being Served" src={foodMain} fluid />
                    <div className="centered">
                        <h1>QuickStops</h1>
                        <p>Find your next adventure!</p>
                    </div>
                    <NavLink to='/find'>
                        <button className='btn'>Start Now</button>
                    </NavLink>

                </div>


                <div className="flex-container">
                    <div className="flex-container">
                        <div className="flex-item">
                            <p className="flex-title">WHO</p>
                            <p>
                                You are an inspiring foodie or someone looking for a quick bite to eat. Our easy-to-use search and save function
                                will help anyone find their next go-to spot.
                            </p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex-item">
                            <p className="flex-title">WHAT</p>
                            <p> Whether you are finding restaurants close by to eat or browsing through
                                businesses 7 states away, we believe in no-frills features that will get the job done.
                                Search by location and tailor it with filters, your results will be shown on our contemporary
                                map. Start building your food bucket list.
                            </p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex-item">
                            <p className="flex-title">WHY</p>
                            <p>We are Mari-Kondo-ing crowd sourced review sites. By approaching our design with a minimalistic fashion,
                                we've narrowed the information down to only the essential details.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <h1>Meet Our Team</h1>
                    <div className="flex-container">
                        <div className="card id-card">
                            <img className="card-img-top cardImg" src={kathy} alt="Kathy"/>
                            <div className="card-body">
                                <h2 className="card-title">Kathy Tran</h2>
                                <p className="card-text">
                                    Kathy is a sophomore Informatics student at the University of Washington. She is from Olympia, WA and
                                    enjoys watching Brooklyn-Nine-Nine and take her dog to the park.
                                </p>
                            </div>
                        </div>

                        <div className="card id-card">
                            <img className="card-img-top cardImg" src={jv} alt="JV" />
                            <div className="card-body">
                                <h2 className="card-title">JV Yeom</h2>
                                <p className="card-text">
                                    JV is a junior Informatics student at the University of Washington. She is from Olympia, WA and her favorite
                                     park in Seattle is Gas Works Park!
                                    </p>
                            </div>
                        </div>

                        <div className="card id-card">
                            <img className="card-img-top cardImg" src={ajay} alt="Ajay"/>
                            <div className="card-body">
                                <h2 className="card-title">Ajay Qi</h2>
                                <p className="card-text">
                                    Ajay is a junior Informatics student at the University of Washington. His hometown is Cincinnati, Ohio and does
                                    caligraphy on the side.
                                    </p>
                            </div>
                        </div>

                        <div className="card id-card">
                            <img className="card-img-top cardImg" src={matthew} alt="Matthew"/>
                            <div className="card-body">
                                <h2 className="card-title">Matthew Vogt</h2>
                                <p className="card-text">
                                    Matthew is a junior Informatics student at the University of Washington. He is from Woodinville, WA and skydives on
                                    Tuesday afternoons.
                                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}