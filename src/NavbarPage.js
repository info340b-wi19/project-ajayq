import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from "mdbreact";

// Constructs a navbar
// Expects a function which allows the navbar to change the state of the map.
class NavbarPage extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      func:this.props.func
    };
  
  }

  // toggles the collapsable part of the navbar when the screen is a smaller size.
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar id="navbar" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">QuickStops</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center="true" className="white-text">

            <MDBNavItem>
                <SearchBar func={this.state.func}/>
            </MDBNavItem>
            <MDBNavItem>
              <select className="browser-default custom-select" name="term"  onChange={this.props.handleSelect}>
                <option value="" selected>Category</option>
                <option value="brewery">Brewery</option>
                <option value="restaurants">Restaurant</option>
                <option value="breakfast">Breakfast</option>
                <option value="ice cream">Ice Cream</option>

              </select>
            </MDBNavItem>
            <MDBNavItem>
              <select className="browser-default custom-select" name="distance"  onChange={this.props.handleSelect}>
                <option value="40000" selected>Distance</option>
                <option value="1609">Walking (1 mile)</option>
                <option value="3218">Biking (2 miles)</option>
                <option value="8046">Driving (5 miles)</option>
              </select>
            </MDBNavItem>

            <MDBNavItem >
              
              <form onChange={this.props.handleCheckBoxChange} name="price">
                <label className="checkbox-inline"><input type="checkbox" value="1"/>$</label>
                <label className="checkbox-inline"><input type="checkbox" value="2" />$$</label>
                <label className="checkbox-inline"><input type="checkbox" value="3" />$$$</label>
                <label className="checkbox-inline"><input type="checkbox" value="4" />$$$$</label>
              </form>
            </MDBNavItem>
            

          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
                <a href="about.html" className="nav-link">Recent</a>
            </MDBNavItem>
            <MDBNavItem>
                <a href="about.html" className="nav-link">Saved</a>
            </MDBNavItem>
          <MDBNavItem>
                <a href="about.html" className="nav-link">About</a>
            </MDBNavItem>
            <MDBNavItem>
                <a href="about.html" className="nav-link text-nowrap">Sign In</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

// The SearchBar is a componenet of the navbar which preforms one of our main functionalities.
// It has a state which includes the current value inside the search bar and a function 
// which allows it to change the maps state.
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      func:this.props.func
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // this is where we would somehow change the state again.
    // call yelps, set a new lat and long.... 
    // 
    this.state.func(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <MDBFormInline waves onSubmit={this.handleSubmit}>
        <div className="md-form my-0">
          <input className="form-control mr-sm-2" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Search Location" aria-label="Search" />
        </div>
      </MDBFormInline>

    );
  }
}


export default NavbarPage;
